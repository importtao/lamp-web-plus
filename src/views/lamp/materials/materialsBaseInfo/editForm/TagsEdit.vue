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
      <template v-else-if="column.key === 'largeImageMode'">
        <Switch v-model:checked="record.largeImageMode" checked-children="开" un-checked-children="关"/>
      </template>
      <template v-else>
        <template v-for="skuDataValueItem in record.v">
          <DropdownButton @click="handleButtonClick" style="margin-right: 8px;">
            {{skuDataValueItem.name }}
            <template #overlay>
              <Menu @click="handleMenuClick($event,skuDataValueItem,record)">
                <MenuItem key="1">
                  <EditOutlined/>
                  修改
                </MenuItem>
                <MenuItem key="2">
                  <DeleteOutlined/>
                  删除
                </MenuItem>
              </Menu>
            </template>
            <template #icon>
              <SettingOutlined/>
            </template>
          </DropdownButton>

          <!--          <Tooltip v-if="skuDataValueItem.name.length > 15" :title="skuDataValueItem.name">-->
          <!--            <Tag @close="handleClose(skuDataValueItem.name,record)" color="blue"-->
          <!--                 style="height: 36px;font-size:16px;padding: 8px 8px;">-->
          <!--              {{ `${skuDataValueItem.name.slice(0, 15)}...` }}-->
          <!--            </Tag>-->
          <!--          </Tooltip>-->
          <!--          <Tag v-else @close="handleClose(skuDataValueItem.name,record)" color="blue"-->
          <!--               style="height: 36px;font-size:16px;padding: 8px 8px;">-->
          <!--            {{skuDataValueItem.name }}-->
          <!--          </Tag>-->

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
        <!--        <Tag v-if="record && !record.inputVisible" style="height: 36px;font-size:16px;padding: 8px 8px;" color="red"-->
        <!--             @click="showInput(record)">-->
        <!--          <plus-outlined/>-->
        <!--          添加规格值-->
        <!--        </Tag>-->
        <Button danger size="large" v-if="record && !record.inputVisible"
                @click="showInput(record,index)">
          <template #icon>
            <plus-outlined/>
          </template>
          添加规格值
        </Button>
      </template>
    </template>
  </Table>
  <Row>
    <Button type="dashed" style="width: 100%;margin-top: 10px;" @click="addSku">
      <PlusOutlined/>
      添加规格分组
    </Button>
  </Row>
  <Modal
    v-model:visible="visible"
    title="修改规格值"
    @ok="handleOk"
  >
    <Input v-model:value="modalText" size="large"
           :style="{ width: '128px',margin: 'auto' }"></Input>
  </Modal>

</template>
<script lang="ts">
  import {defineComponent, ref, nextTick, unref, PropType} from 'vue';
  import {
    Input,
    Tag,
    Tooltip,
    Row,
    Col,
    Button,
    Table,
    message,
    Switch,
    DropdownButton,
    Menu,
    MenuItem,
    Modal
  } from 'ant-design-vue';
  import {PlusOutlined, SettingOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons-vue';
  import {SkuDataItem, SkuDataValueItem, SkuEdit} from "/@/api/lamp/materials/model/skuModel";

  const columns = [
    {
      title: '规格分组',
      key: 'skuName',
      dataIndex: 'skuName',
      width: 240,
    }, {
      title: '大图模式',
      key: 'largeImageMode',
      dataIndex: 'largeImageMode',
      width: 100,
    },
    {
      title: '规格',
      key: 'tags',
      dataIndex: 'tags'
    }]

  export default defineComponent({
    name: 'TagsEdit',
    components: {
      Table,
      Button,
      Row,
      Col,
      Tooltip,
      Input,
      Tag,
      PlusOutlined,
      Switch,
      DropdownButton,
      Menu,
      MenuItem,
      SettingOutlined,
      EditOutlined,
      DeleteOutlined,
      Modal
    },
    props: {
      state: Object as PropType<SkuEdit[]>,
    },
    emits: ['skuListChange'],
    setup(props, {emit}) {
      const modalText = ref<string>(null);
      const visible = ref<boolean>(false);
      const currentSkuDataValueItem = ref<SkuDataValueItem>(null);
      // const inputRef = ref();
      const inputRefs = ref<Map<String, HTMLElement>>(new Map())

      //处理for循环渲染的ref
      const setItemRef = (el, record) => {
        if (el) {
          inputRefs.value.set(record.name, el)
        }
      }


      const skuList = ref<SkuDataItem[]>([]);

      const handleClose = (removedTag: string, sku: SkuDataItem) => {
        const skuDataValueItemList = sku.v.filter(skuDataValueItem => skuDataValueItem.name != removedTag);
        sku.v = skuDataValueItemList
      };

      //添加空白sku
      const addSku = () => {
        let item: SkuDataItem = {
          k: '',
          k_s: 's' + skuList.value.length + 1,
          k_id: '',
          v: [],
          largeImageMode: false,
          inputVisible: false
        }
        skuList.value.push(item)
        emit('skuListChange', skuList.value)
      }
      const showInput = (sku: SkuDataItem) => {
        sku.inputVisible = true;
        // nextTick(() => {
        //   inputRef.value.focus();
        // });
      };

      const handleButtonClick = (e: Event) => {
        console.log('click left button', e);
      };
      const handleMenuClick = (e: Event, item: SkuDataValueItem, sku: SkuDataItem) => {
        if (e.key && e.key == '1') {
          //编辑
          visible.value = true;
          modalText.value = item.name
          currentSkuDataValueItem.value = item
        } else if (e.key && e.key == '2') {
          //删除
          handleClose(item.name, sku)
        } else {
          //do nothing
        }
      };
      const handleOk = () => {
        currentSkuDataValueItem.value.name = modalText.value
        visible.value = false;
      };

      function switchChange(checked: Boolean, event: Event) {
        // record.largeImageMode = checked
      }

      const handleInputConfirm = (sku: SkuDataItem) => {
        const inputValue = sku.inputValue;
        let skuDataValueItemList: Array<SkuDataValueItem> = sku.v;
        if (inputValue && skuDataValueItemList.filter(skuDataValueItem => skuDataValueItem.name === inputValue).length === 0) {
          skuDataValueItemList = [...skuDataValueItemList, {id: '', name: inputValue}];
          Object.assign(sku, {
            v: skuDataValueItemList,
            inputVisible: false,
            inputValue: '',
          });
          emit('skuListChange', skuList.value)
        } else if (inputValue) {
          message.error('规格：' + inputValue + '重复！');
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
        setItemRef,
        switchChange,
        handleButtonClick,
        handleMenuClick,
        modalText,
        visible,
        currentSkuDataValueItem,
        handleOk
      };
    },
  });
</script>
