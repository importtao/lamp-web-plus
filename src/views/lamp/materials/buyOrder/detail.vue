<template>
  <PageWrapper :title="'订单号：'+buyOrder.id" contentBackground>
    <template #extra>
      <a-button type="primary" @click="openContractAck"> 合同确认 </a-button>
      <a-button type="primary" danger @click="openArrivalAck"> 到货确认 </a-button>
    </template>
<!--    <template #footer>-->
<!--      <a-tabs default-active-key="1">-->
<!--        <a-tab-pane key="1" tab="详情" />-->
<!--        <a-tab-pane key="2" tab="规则" />-->
<!--      </a-tabs>-->
<!--    </template>-->

    <div class="pt-4 m-4 desc-wrap">
<!--      <a-descriptions size="small" :column="2">-->
<!--        <a-descriptions-item label="创建人"> 曲丽丽 </a-descriptions-item>-->
<!--        <a-descriptions-item label="订购产品"> XX 服务 </a-descriptions-item>-->
<!--        <a-descriptions-item label="创建时间"> 2017-01-10 </a-descriptions-item>-->
<!--        <a-descriptions-item label="关联单据">-->
<!--          <a>12421</a>-->
<!--        </a-descriptions-item>-->
<!--        <a-descriptions-item label="生效日期"> 2017-07-07 ~ 2017-08-08 </a-descriptions-item>-->
<!--        <a-descriptions-item label="备注"> 请于两个工作日内确认 </a-descriptions-item>-->
<!--      </a-descriptions>-->
      <a-card title="订单进度" :bordered="false">
        <a-steps :current="current" progress-dot size="small">
          <a-step title="创建订单">
            <template #description> <div></div> <p>{{buyOrder.createTime}}</p> </template>
          </a-step>
          <a-step title="确认采购合同">
            <template #description> <div></div> <p>{{buyOrder.contractTime}}</p> </template>
          </a-step>
          <a-step title="到货确认" >
            <template #description> <div></div> <p>{{buyOrder.arrivalTime}}</p> </template>
          </a-step>
          <a-step title="完成" />
        </a-steps>
      </a-card>

        <a-card title="订单信息">
          <a-descriptions title="物料信息" :column="3">
            <a-descriptions-item label="物料名称"> {{materialsBaseInfo.name}} </a-descriptions-item>
            <a-descriptions-item label="规格"> {{skuName}} </a-descriptions-item>
            <a-descriptions-item label="数量"> {{buyOrder.quantity}} </a-descriptions-item>
            <a-descriptions-item label="需求时间"> {{buyOrder.minRequireTime}}</a-descriptions-item>
            <a-descriptions-item label="备注" :span="2">
              {{buyOrder.remark}}
            </a-descriptions-item>
          </a-descriptions>
          <a-divider />
          <a-descriptions title="合同签订信息" :column="2">
            <a-descriptions-item label="合同信息">{{buyOrder.contractInfo}}</a-descriptions-item>
            <a-descriptions-item label="供应商">{{buyOrder.supplierInfo}}</a-descriptions-item>
            <a-descriptions-item label="预计到达时间">{{buyOrder.expectedArrivalTime}}</a-descriptions-item>
            <a-descriptions-item label="合同确认时间">{{buyOrder.contractTime}}</a-descriptions-item>
          </a-descriptions>
          <a-divider />
          <a-descriptions title="交货信息" :column="1">
            <a-descriptions-item label="实际到货数量">{{buyOrder.actualQuantity}}</a-descriptions-item>
            <a-descriptions-item label="到货时间">{{buyOrder.arrivalTime}}</a-descriptions-item>
          </a-descriptions>
<!--          <a-divider orientation="left">到货调拨信息</a-divider>-->

        </a-card>
      <a-card title=调拨信息 class="my-5">
        <Row>
          <Col :span="6">
            <a-card style="margin: 10px 10px 0px 0px; ">
              <Statistic
                title="直接领用出库（来自领用工单）"
                :value="sum"
                :precision="1"
                :value-style="{ color: '#3f8600' }"
                style="margin-right: 50px"
              >
              </Statistic>
            </a-card>
          </Col>
          <Col :span="6">
            <a-card style="margin: 10px 10px 0px 0px; ">
              <Statistic
                title="剩余待调拨数"
                :value="(buyOrder.quantity - sum)"
                :precision="1"
                :value-style="{ color: '#cf1322' }"
                style="margin-right: 50px"
              >
              </Statistic>
            </a-card>
          </col>
          <Col :span="6">
            <a-button type="primary" danger @click="openArrivalAck"> 手动调拨 </a-button>

          </Col>
        </Row>
        <BasicTable @register="registerTable1">
          <template #bodyCell="{ column, record, index }">
            <template v-if="column.key === 'warehouseId'">
              <span>{{warehouseMap.get(record.warehouseId)}}</span>
            </template>
            <template v-if="column.key === 'createUser'">
              <span>{{record.createUserName}}-{{record.createUserPhone}}</span>
            </template>
          </template>
        </BasicTable>
        <BasicTable @register="registerTable">
          <template #bodyCell="{ column, record, index }">
            <template v-if="column.key === 'warehouseId'">
              <span>{{warehouseMap.get(record.warehouseId)}}</span>
            </template>
            <template v-if="column.key === 'createUser'">
              <span>{{record.createUserName}}-{{record.createUserPhone}}</span>
            </template>
          </template>
        </BasicTable>
      </a-card>
    </div>
  </PageWrapper>
  <Modal v-model:visible="visible" title="合同确认" @ok="contractAck">
    <Spin :spinning="spinning">
      <div style="padding: 30px;width: 100%;">
        <Form :model="buyOrder" :label-col=" { span: 8 }" :wrapper-col=" { span: 14 }" :rules="rules" ref="formRef">
          <FormItem label="预计送达时间" name="expectedArrivalTime">
            <DatePicker v-model:value="buyOrder.expectedArrivalTime"  valueFormat="YYYY-MM-DD"/>
          </FormItem>
          <FormItem label="合同信息" name="contractInfo">
            <Input v-model:value="buyOrder.contractInfo"   />
          </FormItem>
          <FormItem label="供应商" name="supplierInfo">
            <Input v-model:value="buyOrder.supplierInfo"   />
          </FormItem>
        </Form>
      </div>
    </Spin>
  </Modal>
  <Modal v-model:visible="visible1" title="到货确认" @ok="arrivalAck">
    <Spin :spinning="spinning1">
      <div style="padding: 30px;width: 100%;">
        <Form :model="buyOrder" :label-col=" { span: 8 }" :wrapper-col=" { span: 14 }" :rules="rules" ref="formRef">
          <FormItem label="实际到货数量" name="actualQuantity">
            <InputNumber v-model:value="buyOrder.actualQuantity" />
          </FormItem>
        </Form>
      </div>
    </Spin>
  </Modal>
</template>
<script lang="ts">
  import {computed, defineComponent, onMounted, ref, unref} from 'vue';
  import {BasicColumn, BasicTable, useTable} from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import {
    Divider,
    Card,
    Empty,
    Descriptions,
    Steps,
    Tabs,
    Statistic,
    Row,
    Col,
    Modal,
    Spin,
    Form,
    FormItem,
    Input,
    InputNumber,
    DatePicker,
    message
  } from 'ant-design-vue';

  import {simpleList} from '/@/api/lamp/materials/warehouse';
  import {listByOrderId as taskItemListByOrderId} from '/@/api/lamp/materials/buyTaskItem';
  import {listByOrderId as warehouseInventoryRecordListByOrderId} from '/@/api/lamp/materials/warehouseInventoryRecord';
  import {detail,contractAck as contractAckApi,arrivalAck as arrivalAckApi} from '/@/api/lamp/materials/buyOrder';
  import {useRouter} from "vue-router";
  export default defineComponent({
    components: {
      BasicTable,
      PageWrapper,
      Modal,Spin,Form,FormItem,Input,InputNumber,DatePicker ,
      Statistic,Row,Col,
      [Divider.name]: Divider,
      [Card.name]: Card,
      AEmpty: Empty,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      [Steps.name]: Steps,
      [Steps.Step.name]: Steps.Step,
      [Tabs.name]: Tabs,
      [Tabs.TabPane.name]: Tabs.TabPane,
    },
    setup() {
      const {currentRoute} = useRouter();
      const params = computed(() => {
        return unref(currentRoute).params;
      });
      const warehouseMap = ref<Map<string, string>>(new Map<string, string>());
      const buyTaskItemList = ref<any[]>();
      const warehouseInventoryRecordList = ref<any[]>();
      const sum = ref<number>(0);
      const spinning = ref<boolean>(false);
      const visible = ref<boolean>(false);

      const spinning1 = ref<boolean>(false);
      const visible1 = ref<boolean>(false);

      const current = ref<number>(0);

      const buyOrder = ref<any>({});
      const materialsBaseInfo = ref<any>({});
      const skuName = ref<string>('');
      const userMap = ref<any>({});

      onMounted(() => {
        simpleList().then(res => {
          return res.forEach(item => warehouseMap.value.set(item.id, item.name));
        })
        getInfo()
      })

      function getInfo(){
        detail(params.value.id).then(res=>{
          buyOrder.value = res.buyOrder
          materialsBaseInfo.value  = res.materialsBaseInfo
          skuName.value = res.skuName
          userMap.value = res.userMap
          if(buyOrder.value.status == '创建成功'){
            current.value = 0
          }else if(buyOrder.value.status == '合同确认'){
            current.value = 1
          }else if(buyOrder.value.status == '到货确认'){
            current.value = 2
          }else if(buyOrder.value.status == '完成'){
            current.value = 3
          }
        })
        getTaskItemList()

      }
      function getTaskItemList() {
        taskItemListByOrderId(params.value.id).then(res => {
          buyTaskItemList.value = res
          sum.value = eval(buyTaskItemList.value.map(item=>item.quantity).join("+"))
        })
        warehouseInventoryRecordListByOrderId(params.value.id).then(res => {
          warehouseInventoryRecordList.value = res
        })
      }

      const rules = {
        expectedArrivalTime: [{ required: true, message: '预计送达时间不能为空' }],
        actualQuantity: [{ required: true, message: '实际到货数量不能为空' }]
      };

      function openContractAck() {
        visible.value = true
      }
      function contractAck() {
        spinning.value = true
        contractAckApi(buyOrder.value).then(res=>{
          message.success('提交成功')
          getInfo()
        }).finally(()=>{
          spinning.value = false
          visible.value = false
        })
      }
      function openArrivalAck() {
        visible1.value = true
      }
      function arrivalAck() {
        spinning1.value = true
        arrivalAckApi(buyOrder.value).then(res=>{
          message.success('提交成功')
          getInfo()
        }).finally(()=>{
          spinning1.value = false
          visible1.value = false
        })
      }

      const columns: BasicColumn[] = [
        {
          title: '库房',
          dataIndex: 'warehouseId',
          // width: 180,
        },
        {
          title: '状态',
          dataIndex: 'status',
          // width: 180,
        },

        {
          title: '发起人',
          dataIndex: 'createUser',
          // sorter: true,
          width: 200,
        },
        {
          title: '需求时间',
          dataIndex: 'requireTime',
          // width: 180,
        },
        {
          title: '数量',
          dataIndex: 'quantity',
          // width: 180,
        },
        {
          title: '说明',
          dataIndex: 'optionName',
          // width: 180,
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          // sorter: true,
          width: 180,
        },
      ];
      const columns1: BasicColumn[] = [
        {
          title: '库房',
          dataIndex: 'warehouseId',
          // width: 180,
        },

        {
          title: '状态',
          dataIndex: 'status',
          // width: 180,
        },
        {
          title: '数量',
          dataIndex: 'quantity',
          // width: 180,
        },
        {
          title: '说明',
          dataIndex: 'optionName',
          // width: 180,
        },
        {
          title: '操作人',
          dataIndex: 'createUser',
          // sorter: true,
          width: 200,
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          width: 180,
        },
      ];
      // 表格
      const [registerTable, {reload, getSelectRowKeys}] = useTable({
        title: '采购任务列表',
        dataSource: buyTaskItemList,
        pagination: false,
        columns,
        formConfig: {
          labelWidth: 120,
        },
        useSearchForm: false,
        showTableSetting: false,
        bordered: true,
        rowKey: 'id'
      })

      // 表格
      const [registerTable1, {reload1, getSelectRowKeys1}] = useTable({
        title: '调拨列表',
        dataSource: warehouseInventoryRecordList,
        pagination: false,
        columns:columns1,
        formConfig: {
          labelWidth: 120,
        },
        useSearchForm: false,
        showTableSetting: false,
        bordered: true,
        rowKey: 'id',
      })




      return {
        params,
        currentRoute,
        buyTaskItemList,
        warehouseInventoryRecordList,
        registerTable,
        registerTable1,
        columns,
        columns1,
        spinning,
        spinning1,
        visible,
        visible1,
        current,
        sum,buyOrder,materialsBaseInfo,skuName,userMap,
        warehouseMap,
        rules,
        openContractAck,
        contractAck,
        openArrivalAck,
        arrivalAck
      };
    },
  });
</script>
