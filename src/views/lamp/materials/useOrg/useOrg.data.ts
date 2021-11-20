import { BasicColumn, FormSchema } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { FormSchemaExt } from '/@/api/lamp/common/formValidateService';

const { t } = useI18n();
// 列表页字段
export const columns: BasicColumn[] = [
  {
    title: t('lamp.materials.useOrg.name'),
    dataIndex: 'name',
    // width: 180,
  },
  {
    title: t('lamp.materials.useOrg.auditFirst'),
    dataIndex: 'auditFirst',
    // width: 180,
  },
  {
    title: t('lamp.materials.useOrg.auditSecond'),
    dataIndex: 'auditSecond',
    // width: 180,
  },
  {
    title: t('lamp.materials.useOrg.auditThird'),
    dataIndex: 'auditThird',
    // width: 180,
  },
  {
    title: t('lamp.materials.useOrg.warehouseIndex'),
    dataIndex: 'warehouseIndex',
    // width: 180,
  },
  {
    title: t('lamp.materials.useOrg.remark'),
    dataIndex: 'remark',
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
    label: t('lamp.materials.useOrg.name'),
    field: 'name',
    component: 'Input',
  },
  {
    label: t('lamp.materials.useOrg.auditFirst'),
    field: 'auditFirst',
    component: 'Input',
  },
  {
    label: t('lamp.materials.useOrg.auditSecond'),
    field: 'auditSecond',
    component: 'Input',
  },
  {
    label: t('lamp.materials.useOrg.auditThird'),
    field: 'auditThird',
    component: 'Input',
  },
  {
    label: t('lamp.materials.useOrg.warehouseIndex'),
    field: 'warehouseIndex',
    component: 'Input',
  },
  {
    label: t('lamp.materials.useOrg.remark'),
    field: 'remark',
    component: 'Input',
  },
];

// 前端自定义表单验证规则
export const customFormSchemaRules = (_): Partial<FormSchemaExt>[] => {
  return [];
};
