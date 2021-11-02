import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { findEnumLists } from '/@/api/lamp/common/general';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.system.application.clientId'),
    dataIndex: 'clientId',
    // width: 180,
  },
  {
    title: t('lamp.system.application.clientSecret'),
    dataIndex: 'clientSecret',
    // width: 180,
  },
  {
    title: t('lamp.system.application.website'),
    dataIndex: 'website',
    // width: 180,
  },
  {
    title: t('lamp.system.application.name'),
    dataIndex: 'name',
    // width: 180,
  },
  {
    title: t('lamp.system.application.icon'),
    dataIndex: 'icon',
    // width: 180,
  },
  {
    title: t('lamp.system.application.appType'),
    dataIndex: 'appType',
    // width: 180,
  },
  {
    title: t('lamp.system.application.describe'),
    dataIndex: 'describe',
    // width: 180,
  },
  {
    title: t('lamp.system.application.state'),
    dataIndex: 'state',
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
    label: t('lamp.system.application.name'),
    field: 'name',
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
    label: t('lamp.system.application.clientId'),
    field: 'clientId',
    component: 'Input',
  },
  {
    label: t('lamp.system.application.clientSecret'),
    field: 'clientSecret',
    component: 'Input',
  },
  {
    label: t('lamp.system.application.website'),
    field: 'website',
    component: 'Input',
  },
  {
    label: t('lamp.system.application.name'),
    field: 'name',
    component: 'Input',
  },
  {
    label: t('lamp.system.application.icon'),
    field: 'icon',
    component: 'Upload',
  },
  {
    label: t('lamp.system.application.appType'),
    field: 'appType',
    component: 'ApiSelect',
    componentProps: {
      api: findEnumLists,
      params: ['ApplicationAppTypeEnum'],
      resultField: 'ApplicationAppTypeEnum',
    },
  },
  {
    label: t('lamp.system.application.describe'),
    field: 'describe',
    component: 'Input',
  },
  {
    label: t('lamp.system.application.state'),
    field: 'state',
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
