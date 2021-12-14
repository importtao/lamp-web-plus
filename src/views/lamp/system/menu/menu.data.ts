import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.system.menu.label'),
    dataIndex: 'label',
    // width: 180,
  },
  {
    title: t('lamp.system.menu.describe'),
    dataIndex: 'describe',
    // width: 180,
  },
  {
    title: t('lamp.system.menu.isGeneral'),
    dataIndex: 'isGeneral',
    // width: 180,
  },
  {
    title: t('lamp.system.menu.path'),
    dataIndex: 'path',
    // width: 180,
  },
  {
    title: t('lamp.system.menu.component'),
    dataIndex: 'component',
    // width: 180,
  },
  {
    title: t('lamp.system.menu.state'),
    dataIndex: 'state',
    // width: 180,
  },
  {
    title: t('lamp.system.menu.sortValue'),
    dataIndex: 'sortValue',
    // width: 180,
  },
  {
    title: t('lamp.system.menu.icon'),
    dataIndex: 'icon',
    // width: 180,
  },
  {
    title: t('lamp.system.menu.group'),
    dataIndex: 'group',
    // width: 180,
  },
  {
    title: t('lamp.system.menu.parentId'),
    dataIndex: 'parentId',
    // width: 180,
  },
  {
    title: t('lamp.system.menu.readonly'),
    dataIndex: 'readonly',
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
    label: t('lamp.system.menu.label'),
    field: 'label',
    component: 'Input',
  },
  {
    label: t('lamp.system.menu.describe'),
    field: 'describe',
    component: 'Input',
  },
  {
    label: t('lamp.system.menu.isGeneral'),
    field: 'isGeneral',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
  {
    label: t('lamp.system.menu.path'),
    field: 'path',
    component: 'Input',
  },
  {
    label: t('lamp.system.menu.component'),
    field: 'component',
    component: 'Input',
  },
  {
    label: t('lamp.system.menu.state'),
    field: 'state',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: '启用', value: true },
        { label: '禁用', value: false },
      ],
    },
  },
  {
    label: t('lamp.system.menu.sortValue'),
    field: 'sortValue',
    component: 'Input',
  },
  {
    field: 'icon',
    label: t('lamp.system.menu.icon'),
    component: 'IconPicker',
  },
  {
    label: t('lamp.system.menu.group'),
    field: 'group',
    component: 'Input',
  },

  {
    label: t('lamp.system.menu.readonly'),
    field: 'readonly',
    component: 'RadioButtonGroup',
    defaultValue: false,
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
  // {
  //   label:'时间选择测试',
  //   field:'date',
  //   component: 'DatePicker'
  // }
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [
  //   {
  //   field:'date',
  //   fieldType:'Date',
  //   rules:{
  //     type: "method", validator: (rule, value, callback) =>{

  //       checkDate(value, 'Date', "Past") ? callback() : callback('日期错误')
  //     }, message: '日期错误'
  //   }
  // }
  ];
};
// function checkDate(value, fieldType, isPass) {
//   // value._isAMomentObject ? date?.format('YYYY-MM-DD HH:mm:ss') : date;
//   console.log(value)

//   return false}
