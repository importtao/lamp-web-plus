<template>
  <PageWrapper dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
<!--      <template #toolbar>-->
<!--        <a-button type="primary" @click="handleBatchDelete">{{-->
<!--          t('common.title.delete')-->
<!--        }}</a-button>-->
<!--        <a-button type="primary" @click="handleAdd">{{ t('common.title.add') }}</a-button>-->
<!--      </template>-->
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              color: 'error',
              label: '查看详情',
              onClick: handleDetail.bind(null, record),
            }

          ]"
        />
      </template>
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.dataIndex === 'status'">
          <Badge :status="'创建成功' == record.status?'processing':'拒绝' == record.status?'error': 'success'" :text="record.status" />
        </template>
        <template v-if="column.dataIndex === 'emergencyLevel'">
          <Badge :status="'加急' == record.emergencyLevel?'error':'一周内' == record.emergencyLevel?'warning': 'processing'" :text="record.emergencyLevel" />
        </template>
        <template v-if="column.dataIndex === 'requireType'">
          <Badge :status="'长期需求' == record.requireType?'error': 'processing'" :text="record.requireType" />
        </template>
        <template v-if="column.dataIndex === 'createUser'">
          <span>{{record.createUserName}}-{{record.createUserPhone}}</span>
        </template>
        <template v-if="column.dataIndex === 'imgUrl'">
          <ImagePreviewGroup>
          <Image :width="30" v-if="record.imgUrl" v-for="url in record.imgUrl.split(',')" :src="url" />
          </ImagePreviewGroup>
        </template>
      </template>
    </BasicTable>
<!--    <EditModal @register="registerDrawer" @success="handleSuccess" />-->
    <DetailModal @register="registerDrawer" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { useDrawer } from '/@/components/Drawer';
  import { handleFetchParams } from '/@/utils/lamp/common';
  import { ActionEnum } from '/@/enums/commonEnum';
  import { page, remove } from '/@/api/lamp/materials/lackApply';
  import { columns, searchFormSchema } from './lackApply.data';
  import EditModal from './Edit.vue';
  import DetailModal from './detail.vue';
  import {Image,ImagePreviewGroup} from 'ant-design-vue';
  import {Badge} from 'ant-design-vue';

  export default defineComponent({
    name: 'LackApplyManagement',
    components: { BasicTable, PageWrapper, EditModal,DetailModal, TableAction ,Image,ImagePreviewGroup,Badge},
    setup() {
      const { t } = useI18n();
      const { createMessage, createConfirm } = useMessage();
      // 编辑页弹窗
      const [registerDrawer, { openDrawer }] = useDrawer();

      // 表格
      const [registerTable, { reload, getSelectRowKeys }] = useTable({
        title: t('lamp.materials.lackApply.table.title'),
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
          width: 160,
          title: t('common.column.action'),
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      // 弹出复制页面
      function handleCopy(record: Recordable, e) {
        e.stopPropagation();
        openDrawer(true, {
          record,
          type: ActionEnum.COPY,
        });
      }

      // 弹出复制页面
      function handleDetail(record: Recordable, e) {
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
        handleDetail,
        handleAdd,
        handleCopy,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleBatchDelete,
      };
    },
  });
</script>
