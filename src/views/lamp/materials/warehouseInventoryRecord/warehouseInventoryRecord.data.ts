import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.warehouseInventoryRecord.objectId'),
    dataIndex: 'objectId',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventoryRecord.isInFlag'),
    dataIndex: 'isInFlag',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventoryRecord.status'),
    dataIndex: 'status',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventoryRecord.skuId'),
    dataIndex: 'skuId',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventoryRecord.quantity'),
    dataIndex: 'quantity',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventoryRecord.optionName'),
    dataIndex: 'optionName',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventoryRecord.version'),
    dataIndex: 'version',
    // width: 180,
  },
  {
    title: t('lamp.materials.warehouseInventoryRecord.isDelete'),
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
    label: t('lamp.materials.warehouseInventoryRecord.objectId'),
    field: 'objectId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.warehouseInventoryRecord.isInFlag'),
    field: 'isInFlag',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
  {
    label: t('lamp.materials.warehouseInventoryRecord.status'),
    field: 'status',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
  {
    label: t('lamp.materials.warehouseInventoryRecord.skuId'),
    field: 'skuId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.warehouseInventoryRecord.quantity'),
    field: 'quantity',
    component: 'Input',
  },
  {
    label: t('lamp.materials.warehouseInventoryRecord.optionName'),
    field: 'optionName',
    component: 'Input',
  },
  {
    label: t('lamp.materials.warehouseInventoryRecord.version'),
    field: 'version',
    component: 'Input',
  },
  {
    label: t('lamp.materials.warehouseInventoryRecord.isDelete'),
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
