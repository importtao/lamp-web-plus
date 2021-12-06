<template>
  <PageWrapper dense>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleBatchDelete">{{
          t('common.title.delete')
          }}
        </a-button>
        <a-button type="primary" @click="handleAdd">{{ t('common.title.add') }}</a-button>
      </template>
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.dataIndex === 'imgUrl'">
          <ImagePreviewGroup>
            <Image :width="30" v-if="record.imgUrl" v-for="url in record.imgUrl.split(',')"
                   :src="url"/>
          </ImagePreviewGroup>
        </template>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '详情',
              onClick: toMaterialsDetails.bind(null,record),
              color: 'error',
            },
            {
              label: t('common.title.edit'),
              onClick: toMaterialsEdit.bind(null,record),
            },
            {
              label: t('common.title.copy'),
              onClick: handleCopy.bind(null, record),
            },
            {
              label: t('common.title.delete'),
              color: 'error',
              popConfirm: {
                title: t('common.tips.confirmDelete'),
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <EditModal @register="registerDrawer" @success="handleSuccess"/>
  </PageWrapper>
</template>
<script lang="ts">
  import {defineComponent} from 'vue';
  import {useI18n} from '/@/hooks/web/useI18n';
  import {useMessage} from '/@/hooks/web/useMessage';
  import {BasicTable, TableAction, useTable} from '/@/components/Table';
  import {PageWrapper} from '/@/components/Page';
  import {useDrawer} from '/@/components/Drawer';
  import {handleFetchParams} from '/@/utils/lamp/common';
  import {ActionEnum} from '/@/enums/commonEnum';
  import {page, remove} from '/@/api/lamp/materials/materialsBaseInfo';
  import {columns, searchFormSchema} from './materialsBaseInfo.data';
  import EditModal from './Edit.vue';
  import {useGo} from '/@/hooks/web/usePage';
  import {Image, ImagePreviewGroup} from 'ant-design-vue';

  export default defineComponent({
    name: 'MaterialsBaseInfoManagement',
    components: {BasicTable, PageWrapper, EditModal, TableAction, Image, ImagePreviewGroup},
    setup() {
      const go = useGo();

      const {t} = useI18n();
      const {createMessage, createConfirm} = useMessage();
      // 编辑页弹窗
      const [registerDrawer, {openDrawer}] = useDrawer();

      // 表格
      const [registerTable, {reload, getSelectRowKeys}] = useTable({
        title: t('lamp.materials.materialsBaseInfo.table.title'),
        api: page,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        beforeFetch: handleFetchParams,
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        },
        actionColumn: {
          width: 360,
          title: t('common.column.action'),
          dataIndex: 'action',
          slots: {customRender: 'action'},
        },
      });

      function toMaterialsEdit(record) {
        go(`/inner/materialsEdit/` + record.id);
      }

      function toMaterialsDetails(record) {
        go(`/inner/materialsDetails/` + record.id);
      }

      // 弹出复制页面
      function handleCopy(record: Recordable, e) {
        e.stopPropagation();
        openDrawer(true, {
          record,
          type: ActionEnum.COPY,
        });
      }

      // 弹出新增页面
      function handleAdd() {
        openDrawer(true, {
          type: ActionEnum.ADD,
        });
      }

      // 弹出编辑页面
      function handleEdit(record: Recordable, e) {
        e.stopPropagation();
        openDrawer(true, {
          record,
          type: ActionEnum.EDIT,
        });
      }

      // 新增或编辑成功回调
      function handleSuccess() {
        reload();
      }

      async function batchDelete(ids: any[]) {
        await remove(ids);
        createMessage.success(t('common.tips.deleteSuccess'));
        handleSuccess();
      }

      // 点击单行删除
      function handleDelete(record: Recordable, e) {
        e.stopPropagation();
        if (record?.id) {
          batchDelete([record.id]);
        }
      }

      // 点击批量删除
      function handleBatchDelete() {
        const ids = getSelectRowKeys();
        if (!ids || ids.length <= 0) {
          createMessage.warning(t('common.tips.pleaseSelectTheData'));
          return;
        }
        createConfirm({
          iconType: 'warning',
          content: t('common.tips.confirmDelete'),
          onOk: async () => {
            await batchDelete(ids);
          },
        });
      }

      return {
        t,
        registerTable,
        registerDrawer,
        handleAdd,
        handleCopy,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleBatchDelete,
        toMaterialsEdit,
        toMaterialsDetails
      };
    },
  });
</script>
