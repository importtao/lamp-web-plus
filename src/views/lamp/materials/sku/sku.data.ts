import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.sku.materialsId'),
    dataIndex: 'materialsId',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.code'),
    dataIndex: 'code',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.path'),
    dataIndex: 'path',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.price'),
    dataIndex: 'price',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.claimPrice'),
    dataIndex: 'claimPrice',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.quantity'),
    dataIndex: 'quantity',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.minQuantity'),
    dataIndex: 'minQuantity',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.unit'),
    dataIndex: 'unit',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.auditType'),
    dataIndex: 'auditType',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.disabled'),
    dataIndex: 'disabled',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.orderIndex'),
    dataIndex: 'orderIndex',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.remark'),
    dataIndex: 'remark',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.version'),
    dataIndex: 'version',
    // width: 180,
  },
  {
    title: t('lamp.materials.sku.isDelete'),
    dataIndex: 'isDelete',
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
    label: t('lamp.materials.sku.materialsId'),
    field: 'materialsId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.code'),
    field: 'code',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.path'),
    field: 'path',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.price'),
    field: 'price',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.claimPrice'),
    field: 'claimPrice',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.quantity'),
    field: 'quantity',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.minQuantity'),
    field: 'minQuantity',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.unit'),
    field: 'unit',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.auditType'),
    field: 'auditType',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.disabled'),
    field: 'disabled',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
  {
    label: t('lamp.materials.sku.orderIndex'),
    field: 'orderIndex',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.remark'),
    field: 'remark',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.version'),
    field: 'version',
    component: 'Input',
  },
  {
    label: t('lamp.materials.sku.isDelete'),
    field: 'isDelete',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
