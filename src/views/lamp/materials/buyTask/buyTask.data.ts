import moment from 'moment';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.buyTask.materialsId'),
    dataIndex: 'materialsId',
    // width: 180,
  },
  {
    title: t('lamp.materials.buyTask.skuId'),
    dataIndex: 'skuId',
    // width: 180,
  },
  {
    title: t('lamp.materials.buyTask.minRequireTime'),
    dataIndex: 'minRequireTime',
    // width: 180,
  },
  {
    title: t('lamp.materials.buyTask.quantity'),
    dataIndex: 'quantity',
    // width: 180,
  },
  {
    title: t('lamp.materials.buyTask.todoQuantity'),
    dataIndex: 'todoQuantity',
    // width: 180,
  },
  {
    title: t('lamp.materials.buyTask.status'),
    dataIndex: 'status',
    // width: 180,
  },
  {
    title: t('lamp.materials.buyTask.optionName'),
    dataIndex: 'optionName',
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
    label: t('lamp.materials.buyTask.materialsId'),
    field: 'materialsId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.buyTask.skuId'),
    field: 'skuId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.buyTask.minRequireTime'),
    field: 'minRequireTime',
    component: 'DatePicker',
    componentProps: {
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      showTime: { defaultValue: moment('00:00:00', 'HH:mm:ss') },
    },
  },
  {
    label: t('lamp.materials.buyTask.quantity'),
    field: 'quantity',
    component: 'Input',
  },
  {
    label: t('lamp.materials.buyTask.todoQuantity'),
    field: 'todoQuantity',
    component: 'Input',
  },
  {
    label: t('lamp.materials.buyTask.status'),
    field: 'status',
    component: 'Input',
  },
  {
    label: t('lamp.materials.buyTask.optionName'),
    field: 'optionName',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
