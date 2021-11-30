<template>
  <Table :columns="columns" :data-source="skuList" bordered :pagination="false">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'imgUrl'">
        <span>
          <smile-outlined />
          {{column.title}}
        </span>
      </template>
    </template>
    <template #bodyCell="{ column, record, index }">
      <template v-if="column.type === 'sku'">
        <Tag :color="colorList[column.index/colorList.length]">
          {{ record.pathObject[column.dataIndex] && skuItemIdMap.get(record.pathObject[column.dataIndex]).name}}
        </Tag>
      </template>
      <template v-else-if="column.type === 'input'">
        <Input v-model:value="record[column.dataIndex]" :placeholder="column.title" />
      </template>
      <template v-else-if="column.type === 'inputNumber'">
        <InputNumber  v-model:value="record[column.dataIndex]" :placeholder="column.title" />
      </template>
      <template v-else-if="column.type === 'radio'">
<!--        <RadioGroup v-model:value="record[column.dataIndex]">-->
<!--          <RadioButton v-for="radioItem in column.options" :value="radioItem.value" :checked="radioItem.checked">{{radioItem.label}}</RadioButton>-->
<!--        </RadioGroup>-->
        <Select  v-model:value="record[column.dataIndex]">
          <SelectOption v-for="radioItem in column.options" :value="radioItem.value" :checked="radioItem.checked">{{radioItem.label}}</SelectOption>
        </Select>
      </template>
      <template v-else-if="column.type === 'rmb'">
        <Input v-model:value="record[column.dataIndex]" :placeholder="column.title" prefix="￥" suffix="元"/>
      </template>
       <template v-else-if="column.type === 'img'">
         <SkuImage max="1"></SkuImage>
      </template>
      <template v-else>
          {{ record[column.dataIndex] }}
      </template>
    </template>
  </Table>
</template>
<script lang="ts">
  import { Table,Tag,Input,InputNumber,Image,Select,SelectOption } from 'ant-design-vue';
  import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
  import {defineComponent, PropType, ref, computed, inject, onMounted} from 'vue';
  import {SkuDTO} from "/@/api/lamp/materials/model/skuModel";
  import SkuImage from "./SkuImage.vue";
  import {propTypes} from "/@/utils/propTypes";
  import {getSkuList} from "/@/api/lamp/materials/sku";
  import {SkuItem} from "/@/api/lamp/materials/model/skuItemModel";
  import {SkuParent} from "/@/api/lamp/materials/model/skuParentModel";

  const colorList = ['green','cyan','#2db7f5','purple']
  const commonColumns = [
    // {
    //   title: '预览图',
    //   key: 'imgUrl',
    //   dataIndex: 'imgUrl',
    //   type:'img',
    //   width: 80,
    // },
    {
      title: '单位',
      key: 'unit',
      dataIndex: 'unit',
      width: 120,
      type: 'input'
    },
    {
      title: '物料编码',
      key: 'code',
      dataIndex: 'code',
      width: 120,
      type: 'input'
    },
    {
      title: '审批类型',
      key: 'auditType',
      dataIndex: 'auditType',
      width: 290,
      type: 'radio',
      options:[
        {label:'不审批',value:'不审批',checked:true},
        {label:'主管审批',value:'主管审批',checked:false},
        {label:'副总审批',value:'副总审批',checked:false}
      ]
    },
    {
      title: '安全库存',
      key: 'minQuantity',
      dataIndex: 'minQuantity',
      width: 120,
      type: 'inputNumber'
    },
    {
      title: '采购指导单价',
      key: 'price',
      dataIndex: 'price',
      width: 180,
      type: 'rmb'
    },{
      title: '领用单价',
      key: 'claimPrice',
      dataIndex: 'claimPrice',
      width: 180,
      type: 'rmb'
    },
    {
      title: '备注',
      key: 'remark',
      dataIndex: 'remark',
      type: 'input'
    },
  ]
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      颜色: '白色',
      存储: '128G',
      imgUrl: '123'
    }
  ];

  export default defineComponent({
    components: {
      SmileOutlined,
      DownOutlined,
      Table,
      Tag,
      Input,
      InputNumber,
      Image,
      Select,
      SelectOption,
      SkuImage,
    },
    name:"SkuEditTable",
    props: {
      materialsId: propTypes.string
    },
    setup(props) {
      const skuList = ref<SkuDTO[]>();
      const skuItemIdMap = ref<Map<string,SkuItem>>(new Map<string, SkuItem>());
      const skuParentIdMap = ref<Map<string,SkuItem>>(new Map<string, SkuParent>());
      inject('skuList',skuList)
      // skuList.value = props.state
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
          ...commonColumns

        ]
      })

      onMounted(() => {
        syncSkuProperty()
      })
      function getData(){
        return skuList.value
      }
      function syncSkuProperty(){
        getSkuList(props.materialsId).then(res => {
          skuItemIdMap.value =  new Map(Object.entries(res.skuItemIdMap))
          skuParentIdMap.value = new Map(Object.entries(res.skuParentIdMap))
          skuList.value = res.resultList
        })
      }

      return {
        skuList,
        skuItemIdMap,
        skuParentIdMap,
        data,
        getData,
        columns,
        colorList
      };
    },
  });
</script>
<style scoped>
  .ant-upload.ant-upload-select-picture-card {
    width: 50px;
  }
</style>
