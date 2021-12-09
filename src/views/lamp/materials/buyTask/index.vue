<template>
  <PageWrapper dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
<!--      <template #toolbar>-->
<!--        <a-button type="primary" @click="handleBatchDelete">{{-->
<!--          t('common.title.delete')-->
<!--          }}-->
<!--        </a-button>-->
<!--        <a-button type="primary" @click="handleAdd">{{ t('common.title.add') }}</a-button>-->
<!--      </template>-->
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.dataIndex === 'materials'">
          <span>{{record.materialsName}}-{{record.skuName}}</span>
        </template>
        <template v-if="column.dataIndex === 'minRequireTime'">
          <span style="color: #faad14;" v-if="new Date(record.minRequireTime) <= now">{{record.minRequireTime}}</span>
          <span v-else>{{record.minRequireTime}}</span>
        </template>
        <template v-if="column.dataIndex === 'quantity'">
          <span style="color: #f5222d;">{{record.quantity}}</span>
        </template>
        <template v-if="column.dataIndex === 'todoQuantity'">
          <span style="color: #1890ff;">{{record.todoQuantity}}</span>
        </template>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '查看订单',
              onClick: toTaskOrderDetails.bind(null,record),
            },{
              label: '查看任务明细',
              onClick: toTaskItemDetails.bind(null,record),
              color: 'error',
            },
            {
              label: '查看物料',
              onClick: toMaterialsDetails.bind(null,record),
              color: 'error',
            },
          ]"
        />
      </template>

    </BasicTable>
    <EditModal @register="registerDrawer" @success="handleSuccess"/>
  </PageWrapper>
</template>
<script lang="ts">
  import {defineComponent,ref} from 'vue';
  import {useI18n} from '/@/hooks/web/useI18n';
  import {useMessage} from '/@/hooks/web/useMessage';
  import {BasicTable, TableAction, useTable} from '/@/components/Table';
  import {PageWrapper} from '/@/components/Page';
  import {useDrawer} from '/@/components/Drawer';
  import {handleFetchParams} from '/@/utils/lamp/common';
  import {ActionEnum} from '/@/enums/commonEnum';
  import {customPage, remove} from '/@/api/lamp/materials/buyTask';
  import {columns, searchFormSchema} from './buyTask.data';
  import EditModal from './Edit.vue';
  import { useGo } from '/@/hooks/web/usePage';


  export default defineComponent({
    name: 'BuyTaskManagement',
    components: {BasicTable, PageWrapper, EditModal, TableAction},
    setup() {
      const {t} = useI18n();
      const go = useGo();
      const now = ref(new Date())
      const {createMessage, createConfirm} = useMessage();
      // 编辑页弹窗
      const [registerDrawer, {openDrawer}] = useDrawer();

      // 表格
      const [registerTable, {reload, getSelectRowKeys}] = useTable({
        title: '采购任务明细',
        api: customPage,
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
          width: 340,
          title: '操作',
          dataIndex: 'action',
          slots: {customRender: 'action'},
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

      function toTaskItemDetails(record) {
        go(`/inner/taskItemDetailList/`+record.skuId);
      }
      function toTaskOrderDetails(record) {
        go(`/inner/buyTaskOrderList/`+record.skuId);

      }
      function toMaterialsDetails(record) {
        go(`/inner/skuDetails/`+record.skuId);

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
        now,
        registerTable,
        registerDrawer,
        toTaskItemDetails,
        toTaskOrderDetails,
        toMaterialsDetails,
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
