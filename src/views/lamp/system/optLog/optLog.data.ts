import moment from 'moment';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { findEnumLists } from '/@/api/lamp/common/general';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.system.optLog.requestIp'),
    dataIndex: 'requestIp',
    // width: 180,
  },
  {
    title: t('lamp.system.optLog.type'),
    dataIndex: 'type',
    // width: 180,
  },
  {
    title: t('lamp.system.optLog.userName'),
    dataIndex: 'userName',
    // width: 180,
  },
  {
    title: t('lamp.system.optLog.description'),
    dataIndex: 'description',
    // width: 180,
  },
  {
    title: t('lamp.system.optLog.classPath'),
    dataIndex: 'classPath',
    // width: 180,
  },
  {
    title: t('lamp.system.optLog.actionMethod'),
    dataIndex: 'actionMethod',
    // width: 180,
  },
  {
    title: t('lamp.system.optLog.requestUri'),
    dataIndex: 'requestUri',
    // width: 180,
  },
  {
    title: t('lamp.system.optLog.httpMethod'),
    dataIndex: 'httpMethod',
    // width: 180,
  },
  {
    title: t('lamp.system.optLog.startTime'),
    dataIndex: 'startTime',
    // width: 180,
  },
  {
    title: t('lamp.system.optLog.finishTime'),
    dataIndex: 'finishTime',
    // width: 180,
  },
  {
    title: t('lamp.system.optLog.consumingTime'),
    dataIndex: 'consumingTime',
    // width: 180,
  },
  {
    title: t('lamp.system.optLog.ua'),
    dataIndex: 'ua',
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
    label: t('lamp.system.optLog.requestIp'),
    field: 'requestIp',
    component: 'Input',
  },
  {
    label: t('lamp.system.optLog.type'),
    field: 'type',
    component: 'ApiSelect',
    componentProps: {
      api: findEnumLists,
      params: ['LogType'],
      resultField: 'LogType',
    },
  },
  {
    label: t('lamp.system.optLog.userName'),
    field: 'userName',
    component: 'Input',
  },
  {
    label: t('lamp.system.optLog.description'),
    field: 'description',
    component: 'Input',
  },
  {
    label: t('lamp.system.optLog.classPath'),
    field: 'classPath',
    component: 'Input',
  },
  {
    label: t('lamp.system.optLog.actionMethod'),
    field: 'actionMethod',
    component: 'Input',
  },
  {
    label: t('lamp.system.optLog.requestUri'),
    field: 'requestUri',
    component: 'Input',
  },
  {
    label: t('lamp.system.optLog.httpMethod'),
    field: 'httpMethod',
    component: 'ApiSelect',
    componentProps: {
      api: findEnumLists,
      params: ['HttpMethod'],
      resultField: 'HttpMethod',
    },
  },
  {
    label: t('lamp.system.optLog.startTime'),
    field: 'startTime',
    component: 'DatePicker',
    componentProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      showTime: { defaultValue: moment('00:00:00', 'HH:mm:ss') },
    },
  },
  {
    label: t('lamp.system.optLog.finishTime'),
    field: 'finishTime',
    component: 'DatePicker',
    componentProps: {
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      showTime: { defaultValue: moment('00:00:00', 'HH:mm:ss') },
    },
  },
  {
    label: t('lamp.system.optLog.consumingTime'),
    field: 'consumingTime',
    component: 'Input',
  },
  {
    label: t('lamp.system.optLog.ua'),
    field: 'ua',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
