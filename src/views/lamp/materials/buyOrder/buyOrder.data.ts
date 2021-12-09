import moment from 'moment';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  // {
  //   title: t('lamp.materials.buyOrder.materialsId'),
  //   dataIndex: 'materialsId',
  //   // width: 180,
  // },
  // {
  //   title: t('lamp.materials.buyOrder.skuId'),
  //   dataIndex: 'skuId',
  //   // width: 180,
  // },
  {
    title: '订单编号',
    dataIndex: 'id',
    width: 220,
  },
  {
    title: '物料规格',
    dataIndex: 'materials',
    // width: 180,
  },
  {
    title: t('lamp.materials.buyOrder.quantity'),
    dataIndex: 'quantity',
    // width: 180,
  },
  // {
  //   title: t('lamp.materials.buyOrder.actualQuantity'),
  //   dataIndex: 'actualQuantity',
  //   // width: 180,
  // },
  // {
  //   title: t('lamp.materials.buyOrder.minRequireTime'),
  //   dataIndex: 'minRequireTime',
  //   // width: 180,
  // },
  // {
  //   title: t('lamp.materials.buyOrder.expectedArrivalTime'),
  //   dataIndex: 'expectedArrivalTime',
  //   // width: 180,
  // },
  {
    title: t('lamp.materials.buyOrder.status'),
    dataIndex: 'status',
    width: 120,
  },
  // {
  //   title: t('lamp.materials.buyOrder.orderIndex'),
  //   dataIndex: 'orderIndex',
  //   // width: 180,
  // },
  // {
  //   title: t('lamp.materials.buyOrder.remark'),
  //   dataIndex: 'remark',
  //   // width: 180,
  // },
  // {
  //   title: t('lamp.materials.buyOrder.contractInfo'),
  //   dataIndex: 'contractInfo',
  //   // width: 180,
  // },
  // {
  //   title: t('lamp.materials.buyOrder.supplierInfo'),
  //   dataIndex: 'supplierInfo',
  //   // width: 180,
  // },
  {
    title: '发起人',
    dataIndex: 'createUser',
    sorter: false,
    width: 250,
  },
  {
    title: t('lamp.common.createTime'),
    dataIndex: 'createTime',
    sorter: false,
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
    label: t('lamp.materials.buyOrder.materialsId'),
    field: 'materialsId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.buyOrder.skuId'),
    field: 'skuId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.buyOrder.quantity'),
    field: 'quantity',
    component: 'Input',
    show: false,

  },
  {
    label: t('lamp.materials.buyOrder.actualQuantity'),
    field: 'actualQuantity',
    component: 'Input',
  },
  {
    label: t('lamp.materials.buyOrder.minRequireTime'),
    field: 'minRequireTime',
    component: 'DatePicker',
    componentProps: {
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      // showTime: { defaultValue: moment('00:00:00', 'HH:mm:ss') },
    },
  },
  {
    label: t('lamp.materials.buyOrder.expectedArrivalTime'),
    field: 'expectedArrivalTime',
    component: 'DatePicker',
    componentProps: {
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      // showTime: { defaultValue: moment('00:00:00', 'HH:mm:ss') },
    },
  },
  // {
  //   label: t('lamp.materials.buyOrder.status'),
  //   field: 'status',
  //   component: 'Input',
  // },
  // {
  //   label: t('lamp.materials.buyOrder.orderIndex'),
  //   field: 'orderIndex',
  //   component: 'Input',
  // },
  {
    label: t('lamp.materials.buyOrder.remark'),
    field: 'remark',
    component: 'Input',
  },
  {
    label: t('lamp.materials.buyOrder.contractInfo'),
    field: 'contractInfo',
    component: 'Input',
  },
  {
    label: t('lamp.materials.buyOrder.supplierInfo'),
    field: 'supplierInfo',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
