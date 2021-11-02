import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.system.dictionary.type'),
    dataIndex: 'type',
    // width: 180,
  },
  {
    title: t('lamp.system.dictionary.label'),
    dataIndex: 'label',
    // width: 180,
  },
  {
    title: t('lamp.system.dictionary.code'),
    dataIndex: 'code',
    // width: 180,
  },
  {
    title: t('lamp.system.dictionary.name'),
    dataIndex: 'name',
    // width: 180,
  },
  {
    title: t('lamp.system.dictionary.state'),
    dataIndex: 'state',
    // width: 180,
  },
  {
    title: t('lamp.system.dictionary.describe'),
    dataIndex: 'describe',
    // width: 180,
  },
  {
    title: t('lamp.system.dictionary.sortValue'),
    dataIndex: 'sortValue',
    // width: 180,
  },
  {
    title: t('lamp.system.dictionary.icon'),
    dataIndex: 'icon',
    // width: 180,
  },
  {
    title: t('lamp.system.dictionary.cssStyle'),
    dataIndex: 'cssStyle',
    // width: 180,
  },
  {
    title: t('lamp.system.dictionary.cssClass'),
    dataIndex: 'cssClass',
    // width: 180,
  },
  {
    title: t('lamp.system.dictionary.readonly'),
    dataIndex: 'readonly',
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
    label: t('lamp.system.dictionary.type'),
    field: 'type',
    component: 'Input',
  },
  {
    label: t('lamp.system.dictionary.label'),
    field: 'label',
    component: 'Input',
  },
  {
    label: t('lamp.system.dictionary.code'),
    field: 'code',
    component: 'Input',
  },
  {
    label: t('lamp.system.dictionary.name'),
    field: 'name',
    component: 'Input',
  },
  {
    label: t('lamp.system.dictionary.state'),
    field: 'state',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
  {
    label: t('lamp.system.dictionary.describe'),
    field: 'describe',
    component: 'Input',
  },
  {
    label: t('lamp.system.dictionary.sortValue'),
    field: 'sortValue',
    component: 'Input',
  },
  {
    label: t('lamp.system.dictionary.icon'),
    field: 'icon',
    component: 'Input',
  },
  {
    label: t('lamp.system.dictionary.cssStyle'),
    field: 'cssStyle',
    component: 'Input',
  },
  {
    label: t('lamp.system.dictionary.cssClass'),
    field: 'cssClass',
    component: 'Input',
  },
  {
    label: t('lamp.system.dictionary.readonly'),
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
