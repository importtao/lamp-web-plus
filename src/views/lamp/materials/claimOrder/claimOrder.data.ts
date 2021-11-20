import moment from 'moment';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.claimOrder.isProject'),
    dataIndex: 'isProject',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrder.requireTime'),
    dataIndex: 'requireTime',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrder.projectName'),
    dataIndex: 'projectName',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrder.processInstanceId'),
    dataIndex: 'processInstanceId',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrder.status'),
    dataIndex: 'status',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrder.remark'),
    dataIndex: 'remark',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrder.auditRemark'),
    dataIndex: 'auditRemark',
    // width: 180,
  },
  {
    title: t('lamp.materials.claimOrder.useOrgId'),
    dataIndex: 'useOrgId',
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
    label: t('lamp.materials.claimOrder.isProject'),
    field: 'isProject',
    component: 'RadioButtonGroup',
    componentProps: {
      options: [
        { label: t('lamp.common.yes'), value: true },
        { label: t('lamp.common.no'), value: false },
      ],
    },
  },
  {
    label: t('lamp.materials.claimOrder.requireTime'),
    field: 'requireTime',
    component: 'DatePicker',
    componentProps: {
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      showTime: { defaultValue: moment('00:00:00', 'HH:mm:ss') },
    },
  },
  {
    label: t('lamp.materials.claimOrder.projectName'),
    field: 'projectName',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrder.processInstanceId'),
    field: 'processInstanceId',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrder.status'),
    field: 'status',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrder.remark'),
    field: 'remark',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrder.auditRemark'),
    field: 'auditRemark',
    component: 'Input',
  },
  {
    label: t('lamp.materials.claimOrder.useOrgId'),
    field: 'useOrgId',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
