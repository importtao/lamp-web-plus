import {  FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
// import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();

const basicOptions: LabelValueOptions = [
  {
    label: '付晓晓',
    value: '1',
  },
  {
    label: '周毛毛',
    value: '2',
  },
];

const storeTypeOptions: LabelValueOptions = [
  {
    label: '私密',
    value: '1',
  },
  {
    label: '公开',
    value: '2',
  },
];

export const schemas: FormSchema[] = [
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
    colProps:{span:5}
  },
  {
    label: t('lamp.materials.materialsBaseInfo.unit'),
    field: 'unit',
    component: 'Input',
    colProps:{span:4,offset: 1,},
  },
  {
    label: t('lamp.materials.materialsBaseInfo.useScene'),
    field: 'useScene',
    component: 'Input',
    colProps:{span:6,offset: 1,},
  },
  {
    label: '领用次数',
    field: 'claimQuantity',
    component: 'Input',
    colProps:{span:6,offset: 1,},
  },
  {
    label: '搜索关键词',
    field: 'keyword',
    component: 'Input',
    colProps:{span:5},
  },
  {
    label: t('lamp.materials.materialsBaseInfo.remark'),
    field: 'remark',
    component: 'Input',
    colProps:{span:6,offset: 1,},
  },
  // {
  //   label: t('lamp.materials.materialsBaseInfo.imgUrl'),
  //   field: 'imgUrl',
  //   component: 'UploadImg',
  //   colProps:{span:11,offset: 1,},
  // },

  // {
  //   label: t('lamp.materials.materialsBaseInfo.version'),
  //   field: 'version',
  //   component: 'Input',
  //   show: false,
  // },
  // {
  //   label: t('lamp.materials.materialsBaseInfo.isDelete'),
  //   field: 'isDelete',
  //   component: 'RadioButtonGroup',
  //   show: false,
  //   componentProps: {
  //     options: [
  //       { label: t('lamp.common.yes'), value: true },
  //       { label: t('lamp.common.no'), value: false },
  //     ],
  //   },
  // },
];
export const taskSchemas: FormSchema[] = [
  {
    field: 't1',
    component: 'Input',
    label: '任务名',
    required: true,
  },
  {
    field: 't2',
    component: 'Input',
    label: '任务描述',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't3',
    component: 'Select',
    label: '执行人',
    componentProps: {
      options: basicOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't4',
    component: 'Select',
    label: '责任人',
    componentProps: {
      options: basicOptions,
    },
    required: true,
  },
  {
    field: 't5',
    component: 'TimePicker',
    label: '生效日期',
    required: true,
    componentProps: {
      style: { width: '100%' },
    },
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't6',
    component: 'Select',
    label: '任务类型',
    componentProps: {
      options: storeTypeOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
];
