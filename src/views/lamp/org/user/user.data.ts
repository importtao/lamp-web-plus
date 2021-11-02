import moment from 'moment';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { findEnumLists } from '/@/api/lamp/common/general';
import { findDictList } from '/@/api/lamp/common/general';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.org.user.account'),
    dataIndex: 'account',
    // width: 180,
  },
  {
    title: t('lamp.org.user.name'),
    dataIndex: 'name',
    // width: 180,
  },
  {
    title: t('lamp.org.user.orgId'),
    dataIndex: 'orgId',
    // width: 180,
  },
  {
    title: t('lamp.org.user.stationId'),
    dataIndex: 'stationId',
    // width: 180,
  },
  {
    title: t('lamp.org.user.email'),
    dataIndex: 'email',
    // width: 180,
  },
  {
    title: t('lamp.org.user.mobile'),
    dataIndex: 'mobile',
    // width: 180,
  },
  {
    title: t('lamp.org.user.sex'),
    dataIndex: 'sex',
    // width: 180,
  },
  {
    title: t('lamp.org.user.state'),
    dataIndex: 'state',
    // width: 180,
  },
  {
    title: t('lamp.org.user.avatar'),
    dataIndex: 'avatar',
    // width: 180,
  },
  {
    title: t('lamp.org.user.nation'),
    dataIndex: 'nation',
    // width: 180,
  },
  {
    title: t('lamp.org.user.education'),
    dataIndex: 'education',
    // width: 180,
  },
  {
    title: t('lamp.org.user.positionStatus'),
    dataIndex: 'positionStatus',
    // width: 180,
  },
  {
    title: t('lamp.org.user.workDescribe'),
    dataIndex: 'workDescribe',
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
    label: t('lamp.org.user.account'),
    field: 'account',
    component: 'Input',
    colProps: { span: 5 },
  },
  {
    label: t('lamp.org.user.name'),
    field: 'name',
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
    label: t('lamp.org.user.account'),
    field: 'account',
    component: 'Input',
  },
  {
    label: t('lamp.org.user.name'),
    field: 'name',
    component: 'Input',
  },
  {
    label: t('lamp.org.user.orgId'),
    field: 'orgId',
    component: 'Input',
  },
  {
    label: t('lamp.org.user.stationId'),
    field: 'stationId',
    component: 'Input',
  },
  {
    label: t('lamp.org.user.email'),
    field: 'email',
    component: 'Input',
  },
  {
    label: t('lamp.org.user.mobile'),
    field: 'mobile',
    component: 'Input',
  },
  {
    label: t('lamp.org.user.sex'),
    field: 'sex',
    component: 'ApiSelect',
    componentProps: {
      api: findEnumLists,
      params: ['Sex'],
      resultField: 'Sex',
    },
  },
  {
    label: t('lamp.org.user.state'),
    field: 'state',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
  {
    label: t('lamp.org.user.avatar'),
    field: 'avatar',
    component: 'Input',
  },
  {
    label: t('lamp.org.user.nation'),
    field: 'nation',
    component: 'ApiSelect',
    componentProps: {
      api: findDictList,
      params: ['NATION'],
      resultField: 'NATION',
    },
  },
  {
    label: t('lamp.org.user.education'),
    field: 'education',
    component: 'ApiSelect',
    componentProps: {
      api: findDictList,
      params: ['EDUCATION'],
      resultField: 'EDUCATION',
    },
  },
  {
    label: t('lamp.org.user.positionStatus'),
    field: 'positionStatus',
    component: 'ApiSelect',
    componentProps: {
      api: findDictList,
      params: ['POSITION_STATUS'],
      resultField: 'POSITION_STATUS',
    },
  },
  {
    label: t('lamp.org.user.workDescribe'),
    field: 'workDescribe',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
