<template>
  <Table :columns="columns" :data-source="data" bordered :pagination="false">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'imgUrl'">
        <span>
          <smile-outlined />
          {{column.title}}
        </span>
      </template>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.type === 'sku'">
        <Tag :color="colorList[column.index/colorList.length]">
          {{ record[column.dataIndex] }}
        </Tag>
      </template>
      <template v-else-if="column.type === 'input'">
        <Input v-model:value="record[column.dataIndex]" :placeholder="column.title" />
      </template>
      <template v-else-if="column.type === 'inputNumber'">
<!--        <Input v-model:value="record[column.dataIndex]" :placeholder="column.title" />-->
        <InputNumber  v-model:value="record[column.dataIndex]" :placeholder="column.title" />

      </template>
      <template v-else-if="column.type === 'rmb'">
        <Input v-model:value="record[column.dataIndex]" :placeholder="column.title" prefix="￥" suffix="元"/>
      </template>
       <template v-else-if="column.type === 'img'">
         <SkuImage max="1"></SkuImage>
<!--         <Image-->
<!--           :width="60"-->
<!--           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"-->
<!--         />-->
      </template>
      <template v-else>
          {{ record[column.dataIndex] }}
      </template>
    </template>
  </Table>
</template>
<script lang="ts">
  import { Table,Tag,Input,InputNumber,Image } from 'ant-design-vue';
  import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
  import {defineComponent, PropType, ref,computed,inject} from 'vue';
  import {SkuEdit} from "/@/api/lamp/materials/model/skuModel";
  import SkuImage from "./SkuImage.vue";

  const colorList = ['green','cyan','#2db7f5','purple']
  const commonColumns = [
    {
      title: '预览图',
      key: 'imgUrl',
      dataIndex: 'imgUrl',
      type:'img',
      width: 120,
    },
    {
      title: '单位',
      key: 'skuUnit',
      dataIndex: 'skuUnit',
      width: 120,
      type: 'input'
    },
    {
      title: '物料编码',
      key: 'skuCode',
      dataIndex: 'skuCode',
      width: 120,
      type: 'input'
    },
    {
      title: '库存总数',
      key: 'totalQuantity',
      dataIndex: 'totalQuantity',
      width: 120,
      type: 'inputNumber'
    },
    {
      title: '指导单价',
      key: 'price',
      dataIndex: 'price',
      width: 180,
      type: 'rmb'
    }, {
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
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
      颜色: '黑色',
      存储: '128G',
      imgUrl: '456'
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
      SkuImage
    },
    name:"SkuEditTable",
    props: {
      state: Object as PropType<SkuEdit[]>,
    },
    setup(props) {
      const skuList = ref<SkuEdit[]>([{tags:['白色','黑色'],name:'颜色'},{tags:['128G','256G'],name:'存储'}]);
      inject('skuList',skuList)
      // skuList.value = props.state
      const columns = computed(()=>{
        let index = 0
        let skuColumns = skuList.value.map(sku=>{

          return {
            title: sku.name,
            key: sku.name,
            dataIndex: sku.name,
            type: 'sku',
            width: 120,
            index: ++index
          }
        })
        return [
          ...skuColumns,
          ...commonColumns

        ]
      })

      return {
        skuList,
        data,
        columns,
        colorList
      };
    },
  });
</script>
