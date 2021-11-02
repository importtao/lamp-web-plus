import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.categoryField.categoryId'),
    dataIndex: 'categoryId',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryField.name'),
    dataIndex: 'name',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryField.type'),
    dataIndex: 'type',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryField.required'),
    dataIndex: 'required',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryField.orderIndex'),
    dataIndex: 'orderIndex',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryField.remark'),
    dataIndex: 'remark',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryField.version'),
    dataIndex: 'version',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryField.isDelete'),
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
    label: t('lamp.materials.categoryField.categoryId'),
    field: 'categoryId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryField.name'),
    field: 'name',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryField.type'),
    field: 'type',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryField.required'),
    field: 'required',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
  {
    label: t('lamp.materials.categoryField.orderIndex'),
    field: 'orderIndex',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryField.remark'),
    field: 'remark',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryField.version'),
    field: 'version',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryField.isDelete'),
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
