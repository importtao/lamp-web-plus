<template>
  <div>
    <PageWrapper title="物料详情页" contentBackground>
      <Description
        size="middle" title="物料信息"
        :bordered="false"
        :column="4"
        :data="materialsBaseInfo"
        :schema="materialsBaseInfoSchema"
      />
      <a-divider/>
      <Description
        size="middle"
        layout="vertical"
        title="规格信息"
        :bordered="true"
        :column="9"
        :data="sku"
        :schema="skuSchema"
      />
      <a-divider/>

      <BasicTable @register="registerRefundTable">
        <template #bodyCell="{ column, record, index }">
          <!--        </template>-->
          <template v-if="column.key === 'option'">
            <Button danger @click="changeQuantity(record)">
              <template #icon>
                <SettingOutlined/>
              </template>
              变更库存
            </Button>
          </template>
        </template>
      </BasicTable>
      <a-divider>库存变更记录</a-divider>

      <!--    <BasicTable @register="registerTimeTable"/>-->
      <Empty v-if="!recordList || recordList.length < 1"></Empty>
      <div style="margin: auto;padding: 30px;">
        <Timeline mode="alternate" :reverse="reverse">
          <TimelineItem :color="!recordItem.isInFlag?'red':'green'" v-for="recordItem in recordList"
                        :position="!recordItem.isInFlag?'left':'right'">
            <!--      <clock-circle-outlined style="font-size: 16px" />-->
            <template #dot v-if="!recordItem.isInFlag">
              <RightCircleFilled two-tone-color="#52c41a" style="font-size: 24px"/>
            </template>
            <template #dot v-else>
              <LeftCircleFilled two-tone-color="#eb2f96" style="font-size: 24px"/>
            </template>
            <Card size="small" :title="recordItem.createTime">
              <!--        <template #extra><a href="#">more</a></template>-->
              <Descriptions :column="3" bordered layout="vertical">
                <DescriptionsItem label="数量">{{recordItem.quantity}}</DescriptionsItem>
                <DescriptionsItem label="仓库">{{warehouseMap.get(recordItem.warehouseId)}}
                </DescriptionsItem>
                <DescriptionsItem label="操作名称">{{recordItem.optionName}}</DescriptionsItem>
              </Descriptions>
            </Card>
          </TimelineItem>
        </Timeline>
      </div>

      <Modal v-model:visible="visible" title="变更库存" @ok="commitChangeQuantity"
             :confirm-loading="spinning">
        <spin :spinning="spinning">
          <div style="padding: 30px;width: 100%;">
            <Form :model="currentWarehouseInventory" :label-col=" { span: 4 }"
                  :wrapper-col=" { span: 14 }" :rules="rules" ref="formRef">
              <FormItem label="库房" name="warehouseName">
                <Input v-model:value="currentWarehouseInventory.warehouseName" disabled/>
              </FormItem>
              <FormItem label="库存数" name="quantity">
                <InputNumber v-model:value="currentWarehouseInventory.quantity" :min="0"
                             :step="1.000"/>
              </FormItem>
              <FormItem label="安全库存" name="safeQuantity">
                <InputNumber v-model:value="currentWarehouseInventory.safeQuantity" :min="0"
                             :step="1.000"/>
              </FormItem>
              <FormItem label="修改说明" name="remark">
                <Input v-model:value="currentWarehouseInventory.remark"/>
              </FormItem>
            </Form>
          </div>
        </spin>
      </Modal>

    </PageWrapper>
  </div>
</template>
<script lang="ts">
  import {computed, defineComponent, onMounted, ref, unref} from 'vue';
  import {DescItem, Description} from '/@/components/Description/index';
  import {BasicColumn, BasicTable, useTable} from '/@/components/Table';
  import {PageWrapper} from '/@/components/Page';
  import {bySkuId} from '/@/api/lamp/materials/sku';
  import {simpleList} from '/@/api/lamp/materials/warehouse';
  import {
    changeQuantity as changeQuantityApi,
    listBySkuId
  } from '/@/api/lamp/materials/warehouseInventory';
  import {listBySkuId as recordListBySkuId} from '/@/api/lamp/materials/warehouseInventoryRecord';
  import {
    Badge,
    Button,
    Card,
    Descriptions,
    DescriptionsItem,
    Divider,
    Empty,
    Form,
    FormItem,
    Input,
    InputNumber,
    Modal,
    Spin,
    Tag,
    Timeline,
    TimelineItem
  } from 'ant-design-vue';
  import {LeftCircleFilled, RightCircleFilled, SettingOutlined} from '@ant-design/icons-vue';


  import {refundTimeTableData, refundTimeTableSchema, skuCommonColumns,} from './data';
  import {useRouter} from "vue-router";
  import {Sku,} from "/@/api/lamp/materials/model/skuModel";

  import {MaterialsBaseInfo} from "/@/api/lamp/materials/model/materialsBaseInfoModel";

  const materialsBaseInfoSchema: DescItem[] = [
    // imgUrl: '图片',
    {
      field: 'name',
      label: '名称',
    },
    {
      field: 'unit',
      label: '单位',
    },
    {
      field: 'useScene',
      label: '用途',
    }, {
      field: 'remark',
      label: '备注',
    }
  ]
  const colorList = ['green', 'cyan', '#2db7f5', 'purple']
  const columns: BasicColumn[] = [
    {
      title: '库房',
      dataIndex: 'warehouseName',
      // width: 180,
    },

    {
      title: '数量',
      dataIndex: 'quantity',
      // width: 180,
    },
    {
      title: '安全库存',
      dataIndex: 'safeQuantity',
      // width: 180,
    },
    {
      title: '操作',
      dataIndex: 'option',
      // width: 180,
    },
  ];

  export default defineComponent({
    name: 'skuDetails',
    components: {
      Description,
      BasicTable,
      PageWrapper,
      [Divider.name]: Divider,
      Tag,
      Badge,
      Button,
      InputNumber,
      Modal,
      SettingOutlined,
      Form,
      FormItem,
      Input,
      Timeline,
      TimelineItem,
      Card,
      RightCircleFilled,
      LeftCircleFilled,
      Descriptions,
      DescriptionsItem,
      Empty,
      Spin
    },
    setup() {
      const {currentRoute} = useRouter();
      const params = computed(() => {
        return unref(currentRoute).params;
      });
      const materialsBaseInfo = ref<MaterialsBaseInfo>();
      const warehouseInventoryList = ref<WarehouseInventory[]>();
      const sku = ref<Sku>();
      const skuName = ref();
      const recordList = ref<any[]>();
      const visible = ref(false);
      const spinning = ref<boolean>(false);
      const reverse = ref<boolean>(false);
      const currentWarehouseInventory = ref<any>();
      const formRef = ref();

      const skuSchema = [
        {
          label: '规格值',
          field: 'skuSchema'
        },
        {
          label: '单位',
          field: 'unit'
        },
        {
          label: '库存总数',
          field: 'totalQuantity'
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
      const warehouseMap = ref<Map<string, string>>(new Map<string, string>());
      onMounted(() => {
        simpleList().then(res => {
          return res.forEach(item => warehouseMap.value.set(item.id, item.name));
        })
        getInfo()
      })
      const [registerRefundTable] = useTable({
        title: '库存明细',
        dataSource: warehouseInventoryList,
        columns: columns,
        pagination: false,
        showIndexColumn: false,
        // scroll: {y: 300},
        bordered: true
        // showSummary: true,
        // summaryFunc: handleSummary,
      });


      const [registerTimeTable] = useTable({
        title: '库存变更记录',
        columns: refundTimeTableSchema,
        pagination: false,
        dataSource: refundTimeTableData,
        showIndexColumn: false,
        scroll: {y: 300},
      });

      const rules = {
        quantity: [{required: true, message: '库存数不能为空'}],
        safeQuantity: [{required: true, message: '安全库存数不能为空'}],
        remark: [{required: true, message: '备注不能为空'}]
      };

      function changeQuantity(record) {
        currentWarehouseInventory.value = record
        visible.value = true
      }

      function commitChangeQuantity() {
        formRef.value
          .validate()
          .then(() => {
            spinning.value = true
            let param = {
              id: currentWarehouseInventory.value.id,
              quantity: currentWarehouseInventory.value.quantity,
              safeQuantity: currentWarehouseInventory.value.safeQuantity,
              remark: currentWarehouseInventory.value.remark,
            }

            changeQuantityApi(param).then(res => {
              spinning.value = false
              visible.value = false
              getInfo()

            }).finally(() => {
              spinning.value = false
            })
          })
          .catch(error => {
            console.log('error', error);
          });
      }

      function getInfo() {
        bySkuId(params.value.id).then(res => {
          // warehouseMap.value = new Map(Object.entries(res.warehouseMap))

          // warehouseInventoryList.value = res.warehouseInventoryList
          skuName.value = res.skuName
          sku.value = res.sku
          materialsBaseInfo.value = res.materialsBaseInfo
          new Map(Object.entries(skuName.value)).forEach((v, k) => {
            if (sku.value.skuSchema) {
              sku.value.skuSchema += ' ' + v
            } else {
              sku.value.skuSchema = v
            }
          })
        })
        listBySkuId(params.value.id).then(res => {
          warehouseInventoryList.value = res
          sku.value.totalQuantity = eval(warehouseInventoryList.value.map(item => item.quantity).join("+"))

        })
        recordListBySkuId(params.value.id).then(res => {
          recordList.value = res
        })
      }

      return {
        params,
        warehouseInventoryList,
        sku,
        skuName,
        warehouseMap,
        materialsBaseInfo,
        registerRefundTable,
        registerTimeTable,
        materialsBaseInfoSchema,
        skuCommonColumns,
        colorList,
        skuSchema,
        columns,
        visible,
        currentWarehouseInventory,
        changeQuantity,
        rules,
        formRef,
        commitChangeQuantity,
        getInfo,
        recordList,
        spinning,
        reverse
      };
    },
  });
</script>
<style lang="less" scoped>
  .desc-wrap {
    padding: 16px;
  }
</style>
