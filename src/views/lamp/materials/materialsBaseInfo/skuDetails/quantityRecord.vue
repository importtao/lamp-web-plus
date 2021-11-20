<template>
  <Timeline  reverse="true" mode="alternate">
    <TimelineItem :color="i%4==0?'red':'green'" v-for="i in 16" :position="i%4==0?'left':'right'">
<!--      <clock-circle-outlined style="font-size: 16px" />-->
      <template #dot v-if="i%4==0"><RightCircleFilled two-tone-color="#52c41a" style="font-size: 24px"/></template>
      <template #dot v-else><LeftCircleFilled two-tone-color="#eb2f96" style="font-size: 24px"/></template>
      <Card size="small" title="2021-01-01 12:46:32" >
<!--        <template #extra><a href="#">more</a></template>-->
        <Descriptions  :column="5" bordered layout="vertical">
          <DescriptionsItem label="数量">{{i}}</DescriptionsItem>
          <DescriptionsItem label="仓库">{{i}}号库</DescriptionsItem>
          <DescriptionsItem label="操作名称">领用出库</DescriptionsItem>
          <DescriptionsItem label="操作人">张三</DescriptionsItem>
          <DescriptionsItem label="备注">第{{i}}次{{i%4==0?'入':'出'}}库</DescriptionsItem>
        </Descriptions>
      </Card>
    </TimelineItem>
  </Timeline>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import {Timeline,TimelineItem,Card,Descriptions,DescriptionsItem} from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { useDrawer } from '/@/components/Drawer';
  import { handleFetchParams } from '/@/utils/lamp/common';
  import { ActionEnum } from '/@/enums/commonEnum';
  import { page, remove } from '/@/api/lamp/materials/warehouseInventoryRecord';
  import { columns, searchFormSchema } from './warehouseInventoryRecord.data';
  // import EditModal from './Edit.vue';
  import {propTypes} from "/@/utils/propTypes";
  import { ClockCircleOutlined,LeftCircleFilled,RightCircleFilled } from '@ant-design/icons-vue';


  export default defineComponent({
    name: 'WarehouseInventoryRecordManagement',
    components: { BasicTable, PageWrapper,  TableAction , Timeline,TimelineItem,ClockCircleOutlined,Card,Descriptions,DescriptionsItem,LeftCircleFilled,RightCircleFilled},
    props: {
      skuId: propTypes.string,
    },
    setup() {
      const { t } = useI18n();
      const { createMessage, createConfirm } = useMessage();
      // 编辑页弹窗
      const [registerDrawer, { openDrawer }] = useDrawer();

      // 表格
      const [registerTable, { reload, getSelectRowKeys }] = useTable({
        title: '库存变更记录表',
        api: page,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
        },
        beforeFetch: handleFetchParams,
        // useSearchForm: true,
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
      };
    },
  });
</script>
