import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  // {
  //   title: t('lamp.materials.categoryLackApply.materialsId'),
  //   dataIndex: 'materialsId',
  //   // width: 180,
  // },
  {
    title: '物料名称',
    dataIndex: 'materialsName',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryLackApply.name'),
    dataIndex: 'name',
    // width: 180,
  },
  // {
  //   title: t('lamp.materials.categoryLackApply.useScene'),
  //   dataIndex: 'useScene',
  //   // width: 180,
  // },
  {
    title: t('lamp.materials.categoryLackApply.requireType'),
    dataIndex: 'requireType',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryLackApply.emergencyLevel'),
    dataIndex: 'emergencyLevel',
    // width: 180,
  },
  {
    title: t('lamp.materials.categoryLackApply.status'),
    dataIndex: 'status',
    // width: 180,
  },
  // {
  //   title: t('lamp.materials.categoryLackApply.imgUrl'),
  //   dataIndex: 'imgUrl',
  //   // width: 180,
  // },
  // {
  //   title: t('lamp.materials.categoryLackApply.remark'),
  //   dataIndex: 'remark',
  //   // width: 180,
  // },
  {
    title: '发起人',
    dataIndex: 'createUser',
    width: 250,
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
    label: t('lamp.materials.categoryLackApply.materialsId'),
    field: 'materialsId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryLackApply.name'),
    field: 'name',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryLackApply.useScene'),
    field: 'useScene',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryLackApply.requireType'),
    field: 'requireType',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryLackApply.emergencyLevel'),
    field: 'emergencyLevel',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryLackApply.status'),
    field: 'status',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryLackApply.imgUrl'),
    field: 'imgUrl',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryLackApply.remark'),
    field: 'remark',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
