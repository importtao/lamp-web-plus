import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.lackApply.name'),
    dataIndex: 'name',
    // width: 180,
  },
  {
    title: t('lamp.materials.lackApply.sku'),
    dataIndex: 'sku',
    // width: 180,
  },
  // {
  //   title: t('lamp.materials.lackApply.unit'),
  //   dataIndex: 'unit',
  //   // width: 180,
  // },
  // {
  //   title: t('lamp.materials.lackApply.useScene'),
  //   dataIndex: 'useScene',
  //   // width: 180,
  // },
  {
    title: t('lamp.materials.lackApply.requireType'),
    dataIndex: 'requireType',
    // width: 180,
  },
  {
    title: t('lamp.materials.lackApply.emergencyLevel'),
    dataIndex: 'emergencyLevel',
    // width: 180,
  },
  {
    title: t('lamp.materials.lackApply.status'),
    dataIndex: 'status',
    // width: 180,
  },
  // {
  //   title: t('lamp.materials.lackApply.imgUrl'),
  //   dataIndex: 'imgUrl',
  //   // width: 180,
  // },
  // {
  //   title: t('lamp.materials.lackApply.remark'),
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
    label: t('lamp.materials.lackApply.name'),
    field: 'name',
    component: 'Input',
  },
  {
    label: t('lamp.materials.lackApply.sku'),
    field: 'sku',
    component: 'Input',
  },
  {
    label: t('lamp.materials.lackApply.unit'),
    field: 'unit',
    component: 'Input',
  },
  {
    label: t('lamp.materials.lackApply.useScene'),
    field: 'useScene',
    component: 'Input',
  },
  {
    label: t('lamp.materials.lackApply.requireType'),
    field: 'requireType',
    component: 'Input',
  },
  {
    label: t('lamp.materials.lackApply.emergencyLevel'),
    field: 'emergencyLevel',
    component: 'Input',
  },
  {
    label: t('lamp.materials.lackApply.status'),
    field: 'status',
    component: 'Input',
  },
  {
    label: t('lamp.materials.lackApply.imgUrl'),
    field: 'imgUrl',
    component: 'Input',
  },
  {
    label: t('lamp.materials.lackApply.remark'),
    field: 'remark',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
