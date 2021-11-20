<template>
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
          :column="8"
          :data="sku"
          :schema="skuSchema"
        />
        <a-divider />

    <BasicTable @register="registerRefundTable">
      <template #toolbar>
        <Button type="primary" @click="updateQuantity">
          手动变更库存
        </Button>
      </template>
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.type === 'sku'">
          <Tag :color="colorList[column.index/colorList.length]">
            {{ record.pathObject[column.dataIndex] && skuItemIdMap.get(record.pathObject[column.dataIndex]).name}}
          </Tag>
        </template>
        <template v-if="column.dataIndex === 'auditType'">
          <Badge :status="record.auditType == '不审批'?'success':record.auditType == '主管审批'?'warning':'error'" :text="record.auditType" />
        </template>
        <template v-if="column.key === 'option'">
          <Button type="primary" :size="size" danger> <template #icon><DeleteOutlined /></template>库存明细</Button>
        </template>
      </template>
    </BasicTable>
    <a-divider>库存变更记录</a-divider>

    <!--    <BasicTable @register="registerTimeTable"/>-->
    <div style="margin: auto;padding: 30px;">
      <warehouseInventory :skuId="params.id"/>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import {computed, defineComponent, onMounted, ref, unref} from 'vue';
  import {DescItem, Description} from '/@/components/Description/index';
  import {BasicColumn, BasicTable, useTable} from '/@/components/Table';
  import {PageWrapper} from '/@/components/Page';
  import {bySkuId} from '/@/api/lamp/materials/sku';
  import {Badge, Divider,Tag,Button} from 'ant-design-vue';

  import {
    skuCommonColumns,
    refundTimeTableSchema,
    refundTimeTableData,
  } from './data';
  import {useRouter} from "vue-router";
  import {Sku, SkuDTO} from "/@/api/lamp/materials/model/skuModel";

  import {MaterialsBaseInfo} from "/@/api/lamp/materials/model/materialsBaseInfoModel";
  import warehouseInventory from './quantityRecord.vue';
  import {WarehouseInventory} from "/@/api/lamp/materials/model/warehouseInventoryModel";

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
  const colorList = ['green','cyan','#2db7f5','purple']
  const columns: BasicColumn[] = [
    {
      title: '库房',
      dataIndex: 'warehouseId',
      // width: 180,
    },

    {
      title: '数量',
      dataIndex: 'quantity',
      // width: 180,
    },
    {
      title: '最终库存变更时间',
      dataIndex: 'updateTime',
      // width: 180,
    },
  ];

  export default defineComponent({
    components: {Description, BasicTable, PageWrapper, [Divider.name]: Divider,Tag,Badge,Button,warehouseInventory},
    setup() {
      const {currentRoute} = useRouter();
      const params = computed(() => {
        return unref(currentRoute).params;
      });
      const materialsBaseInfo = ref<MaterialsBaseInfo>();
      const warehouseInventoryList = ref<WarehouseInventory[]>();
      const sku = ref<Sku>();
      const skuName = ref();
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
        bySkuId(params.value.id).then(res => {
          warehouseMap.value = new Map(Object.entries(res.warehouseMap))

          warehouseInventoryList.value = res.warehouseInventoryList
          skuName.value = res.skuName
          sku.value = res.sku
          materialsBaseInfo.value = res.materialsBaseInfo
          new Map(Object.entries(skuName.value)).forEach((v,k)=>{
            if(sku.value.skuSchema){
              sku.value.skuSchema += ' '+v
            }else{
              sku.value.skuSchema = v
            }
          })
        })
      })
      // const columns = computed(()=>{
      //   let skuColumns = []
      //   skuParentIdMap.value.forEach((skuParent:SkuParent,id:string)=>{
      //     skuColumns.push({
      //       title: skuParent.name,
      //       key: skuParent.keyStr,
      //       dataIndex: skuParent.keyStr,
      //       type: 'sku',
      //       width: 120,
      //       index: skuParent.orderIndex
      //     })
      //   })
      //   return [
      //     ...skuColumns,
      //     ...skuCommonColumns
      //
      //   ]
      // })
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

      function handleSummary(tableData: any[]) {
        let totalT5 = 0;
        let totalT6 = 0;
        tableData.forEach((item) => {
          totalT5 += item.t5;
          totalT6 += item.t6;
        });
        return [
          {
            t1: '总计',
            t5: totalT5,
            t6: totalT6,
          },
        ];
      }
      
      function updateQuantity() {

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
        columns
      };
    },
  });
</script>
<style lang="less" scoped>
  .desc-wrap {
    padding: 16px;
  }
</style>
