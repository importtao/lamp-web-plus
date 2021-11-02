import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.system.area.code'),
    dataIndex: 'code',
    // width: 180,
  },
  {
    title: t('lamp.system.area.label'),
    dataIndex: 'label',
    // width: 180,
  },
  {
    title: t('lamp.system.area.fullName'),
    dataIndex: 'fullName',
    // width: 180,
  },
  {
    title: t('lamp.system.area.sortValue'),
    dataIndex: 'sortValue',
    // width: 180,
  },
  {
    title: t('lamp.system.area.longitude'),
    dataIndex: 'longitude',
    // width: 180,
  },
  {
    title: t('lamp.system.area.latitude'),
    dataIndex: 'latitude',
    // width: 180,
  },
  {
    title: t('lamp.system.area.level'),
    dataIndex: 'level',
    // width: 180,
  },
  {
    title: t('lamp.system.area.source'),
    dataIndex: 'source',
    // width: 180,
  },
  {
    title: t('lamp.system.area.state'),
    dataIndex: 'state',
    // width: 180,
  },
  {
    title: t('lamp.system.area.parentId'),
    dataIndex: 'parentId',
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
    label: t('lamp.system.area.code'),
    field: 'code',
    component: 'Input',
  },
  {
    label: t('lamp.system.area.label'),
    field: 'label',
    component: 'Input',
  },
  {
    label: t('lamp.system.area.fullName'),
    field: 'fullName',
    component: 'Input',
  },
  {
    label: t('lamp.system.area.sortValue'),
    field: 'sortValue',
    component: 'Input',
  },
  {
    label: t('lamp.system.area.longitude'),
    field: 'longitude',
    component: 'Input',
  },
  {
    label: t('lamp.system.area.latitude'),
    field: 'latitude',
    component: 'Input',
  },
  {
    label: t('lamp.system.area.level'),
    field: 'level',
    component: 'Input',
  },
  {
    label: t('lamp.system.area.source'),
    field: 'source',
    component: 'Input',
  },
  {
    label: t('lamp.system.area.state'),
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
    label: t('lamp.system.area.parentId'),
    field: 'parentId',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
