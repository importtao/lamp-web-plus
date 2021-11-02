import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.system.resource.code'),
    dataIndex: 'code',
    // width: 180,
  },
  {
    title: t('lamp.system.resource.name'),
    dataIndex: 'name',
    // width: 180,
  },
  {
    title: t('lamp.system.resource.menuId'),
    dataIndex: 'menuId',
    // width: 180,
    defaultHidden:true,
  },
  {
    title: t('lamp.system.resource.describe'),
    dataIndex: 'describe',
    defaultHidden:true,
    // width: 180,
  },
  {
    title: t('lamp.system.resource.readonly'),
    dataIndex: 'readonly',
    defaultHidden:true,
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
    label: t('lamp.system.resource.code'),
    field: 'code',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    label: t('lamp.system.resource.name'),
    field: 'name',
    component: 'Input',
    colProps: { span: 12 },
  },
  {
    field: 'createTimeRange',
    label: t('lamp.common.createTime'),
    component: 'RangePicker',
    colProps: { span: 12 },
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
    label: t('lamp.system.resource.code'),
    field: 'code',
    component: 'Input',
  },
  {
    label: t('lamp.system.resource.name'),
    field: 'name',
    component: 'Input',
  },
  {
    label: t('lamp.system.resource.menuId'),
    field: 'menuId',
    component: 'Input',
    componentProps: { disabled: true }
  },
  {
    label: t('lamp.system.resource.describe'),
    field: 'describe',
    component: 'Input',
  },
  {
    label: t('lamp.system.resource.readonly'),
    field: 'readonly',
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
