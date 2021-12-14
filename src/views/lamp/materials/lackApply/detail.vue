<template><div>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    size="large"
    width="30%"
    :maskClosable="false"
    :title="'新物资申报详情'"
    @ok="handleSubmit"
  >
<!--    <a-card title="申报进度" :bordered="false">-->
      <a-steps :current="lackApply.status == '提交成功'?1:2" progress-dot size="small">
        <a-step title="提交成功">
          <template #description>
            <div></div>
            <p>{{lackApply.createTime}}</p></template>
        </a-step>
        <a-step title="采购部处理">
          <template #description>
            <div></div>
            <p v-if="lackApply.updateTime != lackApply.createTime">{{lackApply.updateTime}}</p></template>
        </a-step>
        <a-step title="完成"/>
      </a-steps>
<!--    </a-card>-->
    <a-descriptions title="详细信息" :column="1" bordered>
      <a-descriptions-item label="关联物料信息">
        <Select size="large" show-search
                ref="select"
                style="width: 280px;"
                :options="materialsNameIdList"
                :filter-option="filterOption"
                v-model:value="lackApply.materialsId">
<!--          <SelectOption :value="m.id" v-for="m in materialsNameIdList">{{m.name}}</SelectOption>-->

        </Select>
      </a-descriptions-item>
      <a-descriptions-item label="名称">{{lackApply.name}}</a-descriptions-item>
      <a-descriptions-item label="规格">{{lackApply.sku}}</a-descriptions-item>
      <a-descriptions-item label="单位">{{lackApply.unit}}</a-descriptions-item>
      <a-descriptions-item label="用途">{{lackApply.useScene}}</a-descriptions-item>
      <a-descriptions-item label="需求类型">{{lackApply.requireType}}</a-descriptions-item>
      <a-descriptions-item label="紧急程度">{{lackApply.emergencyLevel}}</a-descriptions-item>
      <a-descriptions-item label="状态">{{lackApply.status}}</a-descriptions-item>
      <a-descriptions-item label="图片"><ImagePreviewGroup><Image :width="30" style="margin-left: 10px;" v-if="lackApply.imgUrl" v-for="url in lackApply.imgUrl.split(',')" :src="url" /></ImagePreviewGroup></a-descriptions-item>
      <a-descriptions-item label="备注">{{lackApply.remark}}</a-descriptions-item>
      <a-descriptions-item label="提交人">{{user.name}}-{{user.mobile}}</a-descriptions-item>
    </a-descriptions>
  </BasicDrawer></div>
</template>
<script lang="ts">
  import {defineComponent, onMounted, ref, unref} from 'vue';
  import {BasicDrawer, useDrawerInner} from '/@/components/Drawer';
  import {useI18n} from '/@/hooks/web/useI18n';
  import {detail, handler} from '/@/api/lamp/materials/lackApply';
  import {nameIdList} from '/@/api/lamp/materials/materialsBaseInfo';

  import {
    Card,
    Col,
    DatePicker,
    Descriptions,
    Divider,
    Empty,
    Form,
    FormItem,
    Input,
    InputNumber,
    Modal,
    Row,
    Select,
    SelectOption,
    Spin,
    Statistic,
    Steps,
    Tabs,Image,ImagePreviewGroup
  } from 'ant-design-vue';
  import {ActionEnum} from "/@/enums/commonEnum";
  import {useMessage} from "/@/hooks/web/useMessage";

  export default defineComponent({
    name: 'LackApplyEdit',
    components: {
      BasicDrawer, Divider,
      Card,
      Select,
      SelectOption,Image,ImagePreviewGroup,
      Modal, Spin, Form, FormItem, Input, InputNumber, DatePicker,
      Statistic, Row, Col,
      [Divider.name]: Divider,
      [Card.name]: Card,
      AEmpty: Empty,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      [Steps.name]: Steps,
      [Steps.Step.name]: Steps.Step,
      [Tabs.name]: Tabs,
      [Tabs.TabPane.name]: Tabs.TabPane
    },
    emits: ['success', 'register'],
    setup(_, {emit}) {
      const {t} = useI18n();
      const materialsNameIdList = ref<any[]>([]);
      const materialsId = ref<string>();
      const current = ref<number>(0);
      const lackApply = ref<any>({});
      const user = ref<any>({});
      const { createMessage } = useMessage();

      onMounted(() => {
        nameIdList().then(res => {
          materialsNameIdList.value = res
        })
      })

      const [registerDrawer, {setDrawerProps, closeDrawer}] = useDrawerInner(async (data) => {
        setDrawerProps({confirmLoading: false});
        const record = {...data?.record};
        detail(record.id).then(res => {
          lackApply.value = res.lackApply
          user.value = res.user
        })

      });

      const filterOption = (input: string, option: any) => {
        return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      };

      async function handleSubmit() {
        setDrawerProps({ confirmLoading: true });
        await handler(lackApply.value);
        createMessage.success('提交成功');
        closeDrawer();
        emit('success');
      }

      return {
        t,
        registerDrawer,
        materialsNameIdList,
        handleSubmit,
        materialsId,
        current,
        lackApply,
        filterOption,
        user
      };
    },
  });
</script>
