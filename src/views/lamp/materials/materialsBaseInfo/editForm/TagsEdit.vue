<template>
  <Table :columns="columns" :data-source="skuList" bordered :pagination="false">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'skuName'">
        <Input
          ref="inputRef"
          v-model:value="record.k"
          type="text"
          size="large"
          :style="{ width: '198px' }"
        />
      </template>
      <template v-else>
        <template v-for="skuDataValueItem in record.v">
          <Tooltip v-if="skuDataValueItem.name.length > 15" :title="skuDataValueItem.name">
            <Tag @close="handleClose(skuDataValueItem.name,record)" color="blue"
                 style="height: 36px;font-size:16px;padding: 8px 8px;">
              {{ `${skuDataValueItem.name.slice(0, 15)}...` }}123
            </Tag>
          </Tooltip>
          <Tag v-else @close="handleClose(skuDataValueItem.name,record)" color="blue"
               style="height: 36px;font-size:16px;padding: 8px 8px;">
            {{skuDataValueItem.name }}
          </Tag>

        </template>

        <Input
          v-if="record && record.inputVisible"
          :ref="setItemRef(el,record)"
          v-model:value="record.inputValue"
          type="text"
          size="large"
          :style="{ width: '128px' }"
          @blur="handleInputConfirm(record)"
          @keyup.enter="handleInputConfirm(record)"
        />
        <Tag v-if="record && !record.inputVisible" style="height: 36px;font-size:16px;padding: 8px 8px;" color="red"
             @click="showInput(record)">
          <plus-outlined/>
          添加规格值
        </Tag>
      </template>
    </template>
  </Table>
  <Row>
    <Button type="dashed" style="width: 100%;margin-top: 10px;" @click="addSku">
      <PlusOutlined/>
      添加规格分组
    </Button>
  </Row>

</template>
<script lang="ts">
  import {defineComponent, ref, nextTick, PropType} from 'vue';
  import {Input, Tag, Tooltip, Row, Col, Button,Table,message} from 'ant-design-vue';
  import {PlusOutlined} from '@ant-design/icons-vue';
  import {SkuDataItem, SkuDataValueItem, SkuEdit} from "/@/api/lamp/materials/model/skuModel";
  const columns = [
    {
      title: '规格分组',
      key: 'skuName',
      dataIndex: 'skuName',
      width: 240,
    },
    {
      title: '规格',
      key: 'tags',
      dataIndex: 'tags'
    }]

  export default defineComponent({
    name: 'TagsEdit',
    components: {
      Table,Button, Row, Col, Tooltip, Input, Tag, PlusOutlined
    },
    props: {
      state: Object as PropType<SkuEdit[]>,
    },
    emits: ['skuListChange'],
    setup(props, {emit}) {
      // const inputRef = ref();
      const inputRefs = ref<Map<String,HTMLElement>>(new Map())

      //处理for循环渲染的ref
      const setItemRef = (el,record) => {
        if (el) {
          inputRefs.value.set(record.name,el)
        }
      }


      const skuList = ref<SkuDataItem[]>([]);

      const handleClose = (removedTag: string, sku: SkuDataItem) => {
        const skuDataValueItemList = sku.v.filter(skuDataValueItem => skuDataValueItem.name != removedTag);
        sku.v = skuDataValueItemList
      };

      //添加空白sku
      const addSku = () => {
        let item:SkuDataItem = {
          k: '',
          k_s:'s'+skuList.value.length+1,
          k_id:'',
          v:[],
          largeImageMode:false,
          inputVisible: false
        }
        skuList.value.push(item)
        emit('skuListChange',skuList.value)
      }
      const showInput = (sku: SkuDataItem) => {
        sku.inputVisible = true;
        // nextTick(() => {
        //   inputRef.value.focus();
        // });
      };

      const handleInputConfirm = (sku: SkuDataItem) => {
        const inputValue = sku.inputValue;
        let skuDataValueItemList:Array<SkuDataValueItem> = sku.v;
        if (inputValue && skuDataValueItemList.filter(skuDataValueItem => skuDataValueItem.name === inputValue).length === 0) {
          skuDataValueItemList = [...skuDataValueItemList, {id:'',name: inputValue}];
          Object.assign(sku, {
            v:skuDataValueItemList,
            inputVisible: false,
            inputValue: '',
          });
          emit('skuListChange',skuList.value)
        }else if(inputValue){
          message.error('规格：'+inputValue+'重复！');
        }
        console.log(skuList.value)
      };
      return {
        // ...toRefs(props.state),
        skuList,
        handleClose,
        showInput,
        handleInputConfirm,
        addSku,
        columns,
        setItemRef
      };
    },
  });
</script>
