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
      <a-steps :current="categoryLackApply.status == '提交成功'?1:2" progress-dot size="small">
        <a-step title="提交成功">
          <template #description>
            <div></div>
            <p>{{categoryLackApply.createTime}}</p></template>
        </a-step>
        <a-step title="采购部处理">
          <template #description>
            <div></div>
            <p v-if="categoryLackApply.updateTime != categoryLackApply.createTime">{{categoryLackApply.updateTime}}</p></template>
        </a-step>
        <a-step title="完成"/>
      </a-steps>
<!--    </a-card>-->
    <a-descriptions title="详细信息" :column="1" bordered>
      <a-descriptions-item label="关联物料规格">
        <Select size="large" show-search
                ref="select"
                style="width: 280px;"
                :options="skuNameIdList"
                :filter-option="filterOption"
                v-model:value="categoryLackApply.skuId">
<!--          <SelectOption :value="m.id" v-for="m in skuNameIdList">{{m.name}}</SelectOption>-->

        </Select>
      </a-descriptions-item>
      <a-descriptions-item label="所属物料">{{materialsBaseInfo.name}}</a-descriptions-item>
      <a-descriptions-item label="规格名称">{{categoryLackApply.name}}</a-descriptions-item>
      <a-descriptions-item label="用途">{{categoryLackApply.useScene}}</a-descriptions-item>
      <a-descriptions-item label="需求类型">{{categoryLackApply.requireType}}</a-descriptions-item>
      <a-descriptions-item label="紧急程度">{{categoryLackApply.emergencyLevel}}</a-descriptions-item>
      <a-descriptions-item label="状态">{{categoryLackApply.status}}</a-descriptions-item>
      <a-descriptions-item label="图片"><ImagePreviewGroup><Image :width="30" style="margin-left: 10px;" v-if="categoryLackApply.imgUrl" v-for="url in categoryLackApply.imgUrl.split(',')" :src="url" /></ImagePreviewGroup></a-descriptions-item>
      <a-descriptions-item label="备注">{{categoryLackApply.remark}}</a-descriptions-item>
      <a-descriptions-item label="提交人">{{user.name}}-{{user.mobile}}</a-descriptions-item>
    </a-descriptions>
  </BasicDrawer></div>
</template>
<script lang="ts">
  import {defineComponent, onMounted, ref} from 'vue';
  import {BasicDrawer, useDrawerInner} from '/@/components/Drawer';
  import {useI18n} from '/@/hooks/web/useI18n';
  import {detail, handler} from '/@/api/lamp/materials/categoryLackApply';
  import {getShowList} from '/@/api/lamp/materials/sku';

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
      const skuNameIdList = ref<any[]>([]);
      const materialsId = ref<string>();
      const current = ref<number>(0);
      const categoryLackApply = ref<any>({});
      const user = ref<any>({});
      const materialsBaseInfo = ref<any>({});
      const { createMessage } = useMessage();

      onMounted(() => {
        
      })

      const [registerDrawer, {setDrawerProps, closeDrawer}] = useDrawerInner(async (data) => {
        setDrawerProps({confirmLoading: false});
        const record = {...data?.record};
        detail(record.id).then(res => {
          categoryLackApply.value = res.categoryLackApply
          user.value = res.user
          materialsBaseInfo.value = res.materialsBaseInfo
          getShowList(categoryLackApply.value.materialsId).then(res => {
            skuNameIdList.value = res
          })
        })

      });

      const filterOption = (input: string, option: any) => {
        return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
      };

      async function handleSubmit() {
        setDrawerProps({ confirmLoading: true });
        await handler(categoryLackApply.value);
        createMessage.success('提交成功');
        closeDrawer();
        emit('success');
      }

      return {
        t,
        registerDrawer,
        skuNameIdList,
        handleSubmit,
        materialsId,
        current,
        categoryLackApply,
        filterOption,
        user,
        materialsBaseInfo
      };
    },
  });
</script>
