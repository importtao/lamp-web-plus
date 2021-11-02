import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.categoryPath.ancestor'),
    dataIndex: 'ancestor',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryPath.descendant'),
    dataIndex: 'descendant',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryPath.distance'),
    dataIndex: 'distance',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryPath.version'),
    dataIndex: 'version',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryPath.isDelete'),
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
    label: t('lamp.materials.categoryPath.ancestor'),
    field: 'ancestor',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryPath.descendant'),
    field: 'descendant',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryPath.distance'),
    field: 'distance',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryPath.version'),
    field: 'version',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryPath.isDelete'),
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
