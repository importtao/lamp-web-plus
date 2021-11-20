import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.warehouseInventory.materialsId'),
    dataIndex: 'materialsId',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventory.warehouseId'),
    dataIndex: 'warehouseId',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventory.skuId'),
    dataIndex: 'skuId',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventory.quantity'),
    dataIndex: 'quantity',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventory.version'),
    dataIndex: 'version',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventory.isDelete'),
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
    label: t('lamp.materials.warehouseInventory.materialsId'),
    field: 'materialsId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.warehouseInventory.warehouseId'),
    field: 'warehouseId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.warehouseInventory.skuId'),
    field: 'skuId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.warehouseInventory.quantity'),
    field: 'quantity',
    component: 'Input',
  },
  {
    label: t('lamp.materials.warehouseInventory.version'),
    field: 'version',
    component: 'Input',
  },
  {
    label: t('lamp.materials.warehouseInventory.isDelete'),
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
