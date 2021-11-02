import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.org.org.label'),
    dataIndex: 'label',
    // width: 180,
  },
  {
    title: t('lamp.org.org.type'),
    dataIndex: 'type',
    // width: 180,
  },
  {
    title: t('lamp.org.org.abbreviation'),
    dataIndex: 'abbreviation',
    // width: 180,
  },
  {
    title: t('lamp.org.org.parentId'),
    dataIndex: 'parentId',
    // width: 180,
  },
  {
    title: t('lamp.org.org.treePath'),
    dataIndex: 'treePath',
    // width: 180,
  },
  {
    title: t('lamp.org.org.sortValue'),
    dataIndex: 'sortValue',
    // width: 180,
  },
  {
    title: t('lamp.org.org.state'),
    dataIndex: 'state',
    // width: 180,
  },
  {
    title: t('lamp.org.org.describe'),
    dataIndex: 'describe',
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
    label: t('lamp.org.org.label'),
    field: 'label',
    component: 'Input',
  },
  {
    label: t('lamp.org.org.type'),
    field: 'type',
    component: 'Input',
  },
  {
    label: t('lamp.org.org.abbreviation'),
    field: 'abbreviation',
    component: 'Input',
  },
  {
    label: t('lamp.org.org.parentId'),
    field: 'parentId',
    component: 'Input',
  },
  {
    label: t('lamp.org.org.treePath'),
    field: 'treePath',
    component: 'Input',
  },
  {
    label: t('lamp.org.org.sortValue'),
    field: 'sortValue',
    component: 'Input',
  },
  {
    label: t('lamp.org.org.state'),
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
    label: t('lamp.org.org.describe'),
    field: 'describe',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
