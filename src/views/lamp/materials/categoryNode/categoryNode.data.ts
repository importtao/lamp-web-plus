import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';
import {page} from "/@/api/lamp/materials/categoryNode";

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.categoryNode.name'),
    dataIndex: 'name',
    width: 380,
  },
  {
    title: t('lamp.materials.categoryNode.orderIndex'),
    dataIndex: 'orderIndex',
    width: 80,
  },
  // {
  //   title: t('lamp.materials.categoryNode.visible'),
  //   dataIndex: 'visible',
  //   // width: 180,
  // },
  {
    title: t('lamp.materials.categoryNode.remark'),
    dataIndex: 'remark',
    // width: 280,
  },
  // {
  //   title: t('lamp.materials.categoryNode.version'),
  //   dataIndex: 'version',
  //   // width: 180,
  // },
  // {
  //   title: t('lamp.materials.categoryNode.isDelete'),
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
  // {
  //   field: 'createTimeRange',
  //   label: t('lamp.common.createTime'),
  //   component: 'RangePicker',
  //   colProps: { span: 6 },
  // },
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
    label: '上级分类',
    field: 'parentId',
    component: 'CategorySelect',
    componentProps: {
      api: page,
      multiple: false,
    },
  },
  {
    label: t('lamp.materials.categoryNode.name'),
    field: 'name',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryNode.orderIndex'),
    field: 'orderIndex',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryNode.visible'),
    field: 'visible',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
  {
    label: t('lamp.materials.categoryNode.remark'),
    field: 'remark',
    component: 'Input',
  },
  {
    label: t('lamp.materials.categoryNode.version'),
    field: 'version',
    component: 'Input',
    show: false
  },
  {
    label: t('lamp.materials.categoryNode.isDelete'),
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
