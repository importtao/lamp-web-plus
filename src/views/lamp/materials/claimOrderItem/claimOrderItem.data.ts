import moment from 'moment';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.claimOrderItem.orderId'),
    dataIndex: 'orderId',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.materialsId'),
    dataIndex: 'materialsId',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.materialsName'),
    dataIndex: 'materialsName',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.skuId'),
    dataIndex: 'skuId',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.skuName'),
    dataIndex: 'skuName',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.unitPrice'),
    dataIndex: 'unitPrice',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.totalQuantity'),
    dataIndex: 'totalQuantity',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.deliveredQuantity'),
    dataIndex: 'deliveredQuantity',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.todoQuantity'),
    dataIndex: 'todoQuantity',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.unit'),
    dataIndex: 'unit',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.auditType'),
    dataIndex: 'auditType',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.requireTime'),
    dataIndex: 'requireTime',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.status'),
    dataIndex: 'status',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrderItem.remark'),
    dataIndex: 'remark',
    // width: 180,
  },
  {
    title: t('lamp.common.createTime'),
    dataIndex: 'createTime',
    sorter: true,
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'createTimeRange',
    label: t('lamp.common.createTime'),
    component: 'RangePicker',
    colProps: { span: 6 },
  },
];

// 编辑页字段
export const editFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    label: t('lamp.materials.claimOrderItem.orderId'),
    field: 'orderId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.materialsId'),
    field: 'materialsId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.materialsName'),
    field: 'materialsName',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.skuId'),
    field: 'skuId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.skuName'),
    field: 'skuName',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.unitPrice'),
    field: 'unitPrice',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.totalQuantity'),
    field: 'totalQuantity',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.deliveredQuantity'),
    field: 'deliveredQuantity',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.todoQuantity'),
    field: 'todoQuantity',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.unit'),
    field: 'unit',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.auditType'),
    field: 'auditType',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.requireTime'),
    field: 'requireTime',
    component: 'DatePicker',
    componentProps: {
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      showTime: { defaultValue: moment('00:00:00', 'HH:mm:ss') },
    },
  },
  {
    label: t('lamp.materials.claimOrderItem.status'),
    field: 'status',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrderItem.remark'),
    field: 'remark',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
