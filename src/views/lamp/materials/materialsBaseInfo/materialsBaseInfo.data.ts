import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.materialsBaseInfo.name'),
    dataIndex: 'name',
    // width: 180,
  },
  {
    title: t('lamp.materials.materialsBaseInfo.unit'),
    dataIndex: 'unit',
    // width: 180,
  },
  {
    title: t('lamp.materials.materialsBaseInfo.useScene'),
    dataIndex: 'useScene',
    // width: 180,
  },
  {
    title: t('lamp.materials.materialsBaseInfo.imgUrl'),
    dataIndex: 'imgUrl',
    // width: 180,
  },
  {
    title: '领用次数',
    dataIndex: 'claimQuantity',
    // width: 180,
  },
  {
    title: t('lamp.materials.materialsBaseInfo.remark'),
    dataIndex: 'remark',
    // width: 180,
  },
  // {
  //   title: t('lamp.materials.materialsBaseInfo.version'),
  //   dataIndex: 'version',
  //   // width: 180,
  // },
  // {
  //   title: t('lamp.materials.materialsBaseInfo.isDelete'),
  //   dataIndex: 'isDelete',
  //   // width: 180,
  // },
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
    label: t('lamp.materials.materialsBaseInfo.name'),
    field: 'name',
    component: 'Input',
  },
  {
    label: t('lamp.materials.materialsBaseInfo.unit'),
    field: 'unit',
    component: 'Input',
  },
  {
    label: t('lamp.materials.materialsBaseInfo.useScene'),
    field: 'useScene',
    component: 'Input',
  },
  {
    label: t('lamp.materials.materialsBaseInfo.imgUrl'),
    field: 'imgUrl',
    component: 'Input',
  },
  {
    label: '领用次数',
    field: 'claimQuantity',
    component: 'Input',
  },
  {
    label: '搜索关键词',
    field: 'keyword',
    component: 'Input',
  },
  {
    label: t('lamp.materials.materialsBaseInfo.remark'),
    field: 'remark',
    component: 'Input',
  },
  {
    label: t('lamp.materials.materialsBaseInfo.version'),
    field: 'version',
    component: 'Input',
    show: false,
  },
  {
    label: t('lamp.materials.materialsBaseInfo.isDelete'),
    field: 'isDelete',
    component: 'RadioButtonGroup',
    show: false,
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
