import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { findEnumLists } from '/@/api/lamp/common/general';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.system.role.name'),
    dataIndex: 'name',
    // width: 180,
  },
  {
    title: t('lamp.system.role.code'),
    dataIndex: 'code',
    // width: 180,
  },
  {
    title: t('lamp.system.role.describe'),
    dataIndex: 'describe',
    // width: 180,
  },
  {
    title: t('lamp.system.role.state'),
    dataIndex: 'state',
    // width: 180,
  },
  {
    title: t('lamp.system.role.readonly'),
    dataIndex: 'readonly',
    // width: 180,
  },
  {
    title: t('lamp.system.role.dsType'),
    dataIndex: 'dsType',
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
    label: t('lamp.system.role.name'),
    field: 'name',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    label: t('lamp.system.role.code'),
    field: 'code',
    component: 'Input',
    colProps: { span: 5 },
  },
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
    label: t('lamp.system.role.name'),
    field: 'name',
    component: 'Input',
  },
  {
    label: t('lamp.system.role.code'),
    field: 'code',
    component: 'Input',
  },
  {
    label: t('lamp.system.role.describe'),
    field: 'describe',
    component: 'Input',
  },
  {
    label: t('lamp.system.role.state'),
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
    label: t('lamp.system.role.readonly'),
    field: 'readonly',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
  {
    label: t('lamp.system.role.dsType'),
    field: 'dsType',
    component: 'ApiSelect',
    componentProps: {
      api: findEnumLists,
      params: ['DataScopeType'],
      resultField: 'DataScopeType',
    },
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
