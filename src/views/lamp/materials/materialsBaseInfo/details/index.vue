<template>
  <PageWrapper title="物料详情页" >

    <Description
      size="middle" title="物料信息"
      :bordered="false"
      :column="4"
      :data="materialsBaseInfo"
      :schema="materialsBaseInfoSchema"
    >

    </Description>
    <a-divider/>
    <!--    <Description-->
    <!--      size="middle"-->
    <!--      title="用户信息"-->
    <!--      :bordered="false"-->
    <!--      :column="3"-->
    <!--      :data="personData"-->
    <!--      :schema="personSchema"-->
    <!--    />-->
    <!--    <a-divider />-->

    <BasicTable @register="registerRefundTable" style="margin-bottom: 80px;">
      <template #bodyCell="{ column, record, index }">
        <template v-if="column.type === 'sku'">
          <Tag :color="colorList[column.index/colorList.length]">
            {{ record.pathObject[column.dataIndex] && skuItemIdMap.get(record.pathObject[column.dataIndex]) && skuItemIdMap.get(record.pathObject[column.dataIndex]).name}}
          </Tag>
        </template>
        <template v-if="column.dataIndex === 'auditType'">
          <Badge :status="record.auditType == '不审批'?'success':record.auditType == '主管审批'?'warning':'error'" :text="record.auditType" />
        </template>
        <template v-if="column.key === 'option'">
          <Button type="primary"  danger @click="toSkuDetails(record)"> <template #icon><SettingOutlined /></template>库存明细管理</Button>
        </template>
      </template>
<!--      <template #expandedRowRender="{ record }">-->
<!--        <p style="margin: 0">-->
<!--          {{ record.auditType }}-->
<!--        </p>-->
<!--      </template>-->
    </BasicTable>
<!--    <a-divider/>-->
<!--    <BasicTable @register="registerTimeTable"/>-->
        <template #rightFooter>
          <Button type="primary" @click="toMaterialsEdit">编辑物料及规格信息</Button>
        </template>
  </PageWrapper>
</template>
<script lang="ts">
  import {computed, defineComponent, onMounted, ref, unref} from 'vue';
  import {DescItem, Description} from '/@/components/Description/index';
  import {BasicTable, useTable} from '/@/components/Table';
  import {PageWrapper} from '/@/components/Page';
  import {getInfoByMaterialsId} from '/@/api/lamp/materials/materialsBaseInfo';
  import {Badge, Divider,Tag,Button} from 'ant-design-vue';

  import {
    skuCommonColumns,
    refundTimeTableSchema,
    refundTimeTableData,
  } from './data';
  import {useRouter} from "vue-router";
  import {SkuDTO} from "/@/api/lamp/materials/model/skuModel";
  import {SkuItem} from "/@/api/lamp/materials/model/skuItemModel";
  import {SkuParent} from "/@/api/lamp/materials/model/skuParentModel";
  import {MaterialsBaseInfo} from "/@/api/lamp/materials/model/materialsBaseInfoModel";
  import { useGo } from '/@/hooks/web/usePage';


  import {SettingOutlined} from '@ant-design/icons-vue';


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

  export default defineComponent({
    components: {Description, BasicTable, PageWrapper, [Divider.name]: Divider,Tag,Badge,Button,SettingOutlined},
    name:'materialsDetails',
    setup() {
      const go = useGo();

      const {currentRoute} = useRouter();
      const params = computed(() => {
        return unref(currentRoute).params;
      });
      const materialsBaseInfo = ref<MaterialsBaseInfo>();
      const skuList = ref<SkuDTO[]>();
      const skuItemIdMap = ref<Map<string, SkuItem>>(new Map<string, SkuItem>());
      const skuParentIdMap = ref<Map<string, SkuItem>>(new Map<string, SkuParent>());
      onMounted(() => {
        getInfoByMaterialsId(params.value.id).then(res => {
          skuItemIdMap.value = new Map(Object.entries(res.skuItemIdMap))
          skuParentIdMap.value = new Map(Object.entries(res.skuParentIdMap))
          skuList.value = res.skuList
          materialsBaseInfo.value = res.materialsBaseInfo
        })
      })
      const columns = computed(()=>{
        let skuColumns = []
        skuParentIdMap.value.forEach((skuParent:SkuParent,id:string)=>{
          skuColumns.push({
            title: skuParent.name,
            key: skuParent.keyStr,
            dataIndex: skuParent.keyStr,
            type: 'sku',
            width: 120,
            index: skuParent.orderIndex
          })
        })
        return [
          ...skuColumns,
          ...skuCommonColumns

        ]
      })
      const [registerRefundTable] = useTable({
        title: '规格库存',
        dataSource: skuList,
        columns: columns,
        pagination: false,
        showIndexColumn: true,
        scroll: {y: 900},
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
      function toSkuDetails(record) {
        go(`/inner/skuDetails/`+record.id);
      }
      function toMaterialsEdit() {
        go(`/inner/materialsEdit/`+params.value.id);
      }

      return {
        params,
        skuList,
        skuItemIdMap,
        skuParentIdMap,
        materialsBaseInfo,
        registerRefundTable,
        registerTimeTable,
        materialsBaseInfoSchema,
        skuCommonColumns,
        colorList,
        toSkuDetails,
        toMaterialsEdit,
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
