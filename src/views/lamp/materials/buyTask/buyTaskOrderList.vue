<template>
  <PageWrapper title="采购任务详情列表页" contentBackground>
    <Row>
      <Col :span="21">
        <Description
          size="middle"
          layout="vertical"
          title="规格信息"
          :bordered="true"
          :column="9"
          :data="sku"
          :schema="skuSchema"
        />
      </Col>
      <Col :span="3">
        <Card style="margin: 40px 10px 0px 0px; ">
          <Statistic
            title="采购中数量"
            :value="sum"
            :precision="1"
            :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px"
          >
          </Statistic>
        </Card>
      </Col>
    </Row>

    <a-divider/>
    <BasicTable @register="registerTable">
<!--      <template #toolbar>-->
<!--        <a-button  danger @click="createBuyOrder" :loading="btnLoading">按任务发起采购订单</a-button>-->
<!--      </template>-->

      <template #bodyCell="{ column, record, index }">
        <template v-if="column.key === 'warehouseId'">
          <span>{{warehouseMap.get(record.warehouseId)}}</span>
        </template>
        <template v-if="column.key === 'createUser'">
          <span>{{record.createUserName}}-{{record.createUserPhone}}</span>
        </template>
      </template>



    </BasicTable>
<!--    <template #rightFooter>-->
<!--      <Button type="primary" danger @click="customCreateBuyOrder" :loading="cusTomBtnLoading">自定义数量发起采购订单</Button>-->
<!--    </template>-->
  </PageWrapper>
  <Modal v-model:visible="visible" title="自定义数量发起采购订单" @ok="commitBuyOrder">
    <Spin :spinning="spinning">
      <div style="padding: 30px;width: 100%;">
        <Form :model="buyOrder" :label-col=" { span: 8 }" :wrapper-col=" { span: 14 }" :rules="rules" ref="formRef">
          <FormItem label="待办任务数量" name="sum">
            <InputNumber v-model:value="sum"  :min="0"  :step="1.000" disabled/>
          </FormItem>
          <FormItem label="采购订单数量" name="quantity">
            <InputNumber v-model:value="buyOrder.quantity"  :min="sum"  :step="1.000"/>
          </FormItem>
          <FormItem label="订单说明" name="remark">
            <Input v-model:value="buyOrder.remark"   />
          </FormItem>
        </Form>
      </div>
    </Spin>
  </Modal>
</template>
<script lang="ts">
  import {computed, defineComponent, onMounted, ref, unref,createVNode} from 'vue';
  import {Description} from '/@/components/Description/index';

  import {bySkuId} from '/@/api/lamp/materials/sku';
  import {simpleList} from '/@/api/lamp/materials/warehouse';
  import {listBySkuId as orderListBySkuId} from '/@/api/lamp/materials/buyOrder';
  import {create,customCreateBuyOrder as customCreateBuyOrderApi} from '/@/api/lamp/materials/buyOrder';
  import {PageWrapper} from '/@/components/Page';


  import {useRouter} from "vue-router";
  import {Sku} from "/@/api/lamp/materials/model/skuModel";
  import {useI18n} from "/@/hooks/web/useI18n";
  import {columns} from './buyOrder.data';
  import {
    Badge,
    Button,
    Card,
    Divider,
    Empty,
    Tag,
    Statistic,
    Row,
    Col,
    Modal,
    Spin,
    Form,
    FormItem,
    Input,
    InputNumber,
    message
  } from "ant-design-vue";
  import {BasicTable, useTable} from '/@/components/Table';
  import {SettingOutlined, ExclamationCircleOutlined} from '@ant-design/icons-vue';
  import {BuyOrderSaveDTO} from "/@/api/lamp/materials/model/buyOrderModel";


  export default defineComponent({
    name: 'taskItemDeList',
    components: {
      BasicTable,
      PageWrapper,
      [Divider.name]: Divider,
      Tag,
      Badge,
      Button,
      SettingOutlined,
      Card,
      Description,
      Statistic,
      Row,Col,
      Empty,
      ExclamationCircleOutlined,
      Spin,Form,FormItem,Input,InputNumber,Modal,message
    },
    setup() {
      const {currentRoute} = useRouter();
      const params = computed(() => {
        return unref(currentRoute).params;
      });
      // const materialsBaseInfo = ref<MaterialsBaseInfo>();
      const sum = ref<number>(0);
      const sku = ref<Sku>();
      const skuName = ref();
      const orderList = ref<any[]>();
      const formRef = ref();
      const btnLoading = ref(false);
      const cusTomBtnLoading = ref(false);
      const visible = ref(false);
      const spinning = ref<boolean>(false);
      const buyOrder = ref<any>({});
      const rules = {
        quantity: [{ required: true, message: '采购数量不能为空' }],
        remark: [{ required: true, message: '备注不能为空' }]
      };

      const warehouseMap = ref<Map<string, string>>(new Map<string, string>());
      onMounted(() => {
        simpleList().then(res => {
          debugger
          return res.forEach(item => warehouseMap.value.set(item.id, item.name));
        })
        getInfo()
        getTaskItemList()
      })
      function getTaskItemList() {
        orderListBySkuId(params.value.id).then(res => {
          orderList.value = res
          sum.value = eval(orderList.value.map(item=>item.quantity).join("+"))
        })
      }

      const {t} = useI18n();
      // const { createMessage, createConfirm } = useMessage();
      // // 编辑页弹窗
      // const [registerDrawer, { openDrawer }] = useDrawer();

      // 表格
      const [registerTable, {reload, getSelectRowKeys}] = useTable({
        title: '进行中订单列表',
        dataSource: orderList,
        pagination: false,
        columns,
        formConfig: {
          labelWidth: 120,
        },
        useSearchForm: false,
        showTableSetting: false,
        bordered: true,
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
        }
      })


      function getInfo() {
        bySkuId(params.value.id).then(res => {
          // warehouseMap.value = new Map(Object.entries(res.warehouseMap))
          // warehouseInventoryList.value = res.warehouseInventoryList
          skuName.value = res.skuName
          sku.value = res.sku
          new Map(Object.entries(skuName.value)).forEach((v, k) => {
            if (sku.value.skuSchema) {
              sku.value.skuSchema += ' ' + v
            } else {
              sku.value.skuSchema = v
            }
          })
          sku.value.materialsSku = res.materialsBaseInfo.name + '-' + sku.value.skuSchema
        })

      }
      function createBuyOrder(){
        Modal.confirm({
          title: '确定发起采购订单?',
          cancelText:'取消',
          okText:'确认',
          icon: createVNode(ExclamationCircleOutlined),
          content: createVNode('div', { style: 'color:red;' }, '采购数量：'+ sum.value),
          onOk() {
            btnLoading.value = true
            create(params.value.id).then(res=>{
              message.success('订单创建成功');
            }).finally(()=>{
              btnLoading.value = false
            })
          },
          onCancel() {
            console.log('Cancel');
          },
          class: 'test',
        });
      }

      function customCreateBuyOrder(){
        buyOrder.value = {
          quantity: sum.value,
          remark: ''
        }
        visible.value = true
      }
      function commitBuyOrder() {
        formRef.value
          .validate()
          .then(() => {
            spinning.value = true
            cusTomBtnLoading.value = true
            let param:BuyOrderSaveDTO = {
              skuId:params.value.id,
              quantity:buyOrder.value.quantity,
              remark:buyOrder.value.remark,
            }
            customCreateBuyOrderApi(param).then(res=>{
              spinning.value = false
              visible.value = false
              getTaskItemList()
              message.success('订单创建成功');

            }).finally(()=>{
              spinning.value = false
              cusTomBtnLoading.value = false

            })
          })
          .catch(error => {
            console.log('error', error);
          });
      }

      const skuSchema = [
        {
          label: '物料-规格',
          field: 'materialsSku'
        },
        {
          label: '单位',
          field: 'unit'
        },
        {
          label: '物料编码',
          field: 'code'
        },
        {
          label: '审批类型',
          field: 'auditType'
        },
        {
          label: '安全库存',
          field: 'minQuantity'
        },
        {
          label: '采购指导单价',
          field: 'price'
        },
        {
          label: '领用单价',
          field: 'claimPrice'
        },
        {
          label: '备注',
          field: 'remark'
        }
      ]
      const colorList = ['green', 'cyan', '#2db7f5', 'purple']


      return {
        t,
        params,
        sku,
        skuName,
        warehouseMap,
        registerTable,
        colorList,
        skuSchema,
        columns,
        getInfo,
        sum,
        createBuyOrder,
        visible,spinning,buyOrder,rules,formRef,
        commitBuyOrder,customCreateBuyOrder,
        getTaskItemList,
        btnLoading,
        cusTomBtnLoading
      }
    }
  })


</script>
<style lang="less" scoped>
  .desc-wrap {
    padding: 16px;
  }
</style>
