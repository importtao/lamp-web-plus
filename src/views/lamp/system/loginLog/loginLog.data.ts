import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.system.loginLog.requestIp'),
    dataIndex: 'requestIp',
    // width: 180,
  },
  {
    title: t('lamp.system.loginLog.userId'),
    dataIndex: 'userId',
    // width: 180,
  },
  {
    title: t('lamp.system.loginLog.userName'),
    dataIndex: 'userName',
    // width: 180,
  },
  {
    title: t('lamp.system.loginLog.account'),
    dataIndex: 'account',
    // width: 180,
  },
  {
    title: t('lamp.system.loginLog.description'),
    dataIndex: 'description',
    // width: 180,
  },
  {
    title: t('lamp.system.loginLog.loginDate'),
    dataIndex: 'loginDate',
    // width: 180,
  },
  {
    title: t('lamp.system.loginLog.ua'),
    dataIndex: 'ua',
    // width: 180,
  },
  {
    title: t('lamp.system.loginLog.browser'),
    dataIndex: 'browser',
    // width: 180,
  },
  {
    title: t('lamp.system.loginLog.browserVersion'),
    dataIndex: 'browserVersion',
    // width: 180,
  },
  {
    title: t('lamp.system.loginLog.operatingSystem'),
    dataIndex: 'operatingSystem',
    // width: 180,
  },
  {
    title: t('lamp.system.loginLog.location'),
    dataIndex: 'location',
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
    label: t('lamp.system.loginLog.requestIp'),
    field: 'requestIp',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    label: t('lamp.system.loginLog.userName'),
    field: 'userName',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    label: t('lamp.system.loginLog.account'),
    field: 'account',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    label: t('lamp.system.loginLog.description'),
    field: 'description',
    component: 'Input',
    colProps: { span: 5 },
  },
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
    label: t('lamp.system.loginLog.requestIp'),
    field: 'requestIp',
    component: 'Input',
  },
  {
    label: t('lamp.system.loginLog.userId'),
    field: 'userId',
    component: 'Input',
  },
  {
    label: t('lamp.system.loginLog.userName'),
    field: 'userName',
    component: 'Input',
  },
  {
    label: t('lamp.system.loginLog.account'),
    field: 'account',
    component: 'Input',
  },
  {
    label: t('lamp.system.loginLog.description'),
    field: 'description',
    component: 'Input',
  },
  {
    label: t('lamp.system.loginLog.loginDate'),
    field: 'loginDate',
    component: 'Input',
  },
  {
    label: t('lamp.system.loginLog.ua'),
    field: 'ua',
    component: 'Input',
  },
  {
    label: t('lamp.system.loginLog.browser'),
    field: 'browser',
    component: 'Input',
  },
  {
    label: t('lamp.system.loginLog.browserVersion'),
    field: 'browserVersion',
    component: 'Input',
  },
  {
    label: t('lamp.system.loginLog.operatingSystem'),
    field: 'operatingSystem',
    component: 'Input',
  },
  {
    label: t('lamp.system.loginLog.location'),
    field: 'location',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
