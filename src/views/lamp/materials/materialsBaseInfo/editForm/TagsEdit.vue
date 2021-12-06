<template>
  <Table :columns="columns" :data-source="skuList" bordered :pagination="false" rowKey="name">
    <template #bodyCell="{ column, record,index }">
      <template v-if="column.key === 'skuName'">
        <Input
          v-model:value="record.name"
          type="text"
          size="large"
          :style="{ width: '198px' }"
        />
      </template>
      <template v-else-if="column.key === 'largeImageMode'">
        <Switch v-model:checked="record.largeImageMode" checked-children="开"
                un-checked-children="关"/>
      </template>
      <template v-else-if="column.key === 'option'">
        <Button type="primary" :size="size" danger @click="de"> <template #icon><DeleteOutlined /></template>删除</Button>
      </template>
      <template v-else>
        <template v-for="skuItemSaveDTO in record.itemSaveDTOList">
          <Tooltip v-if="skuItemSaveDTO.name.length > 15" :title="skuItemSaveDTO.name">
            <DropdownButton @click="handleButtonClick" style="margin-right: 8px;">
              {{ `${skuItemSaveDTO.name.slice(0, 15)}...` }}
              <template #overlay>
                <Menu @click="handleMenuClick($event,skuItemSaveDTO,record)">
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
          </Tooltip>
          <DropdownButton v-else @click="handleButtonClick" style="margin-right: 8px;">
            {{skuItemSaveDTO.name }}
            <template #overlay>
              <Menu @click="handleMenuClick($event,skuItemSaveDTO,record)">
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

        </template>

        <Input
          v-if="record && record.inputVisible"
          :ref="setItemRef"
          v-model:value="record.inputValue"
          type="text"
          size="large"
          :style="{ width: '128px' }"
          @blur="handleInputConfirm(record)"
          @keyup.enter="handleInputConfirm(record)"
        />
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
<script lang="ts" >
  import {defineComponent, ref, nextTick, onMounted, PropType} from 'vue';
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
  import {SkuDataItem, SkuDataValueItem} from "/@/api/lamp/materials/model/skuModel";
  import {getListByMaterialsId} from '/@/api/lamp/materials/skuParent';
  import {propTypes} from "/@/utils/propTypes";
  import {SkuParent, SkuViewSaveDTO} from "/@/api/lamp/materials/model/skuParentModel";
  import {SkuItemSaveDTO} from "/@/api/lamp/materials/model/skuItemModel";

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
    },
    {
      title: '操作',
      key: 'option',
      dataIndex: 'option',
      width: 80,
    }
  ]

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
      materialsId: propTypes.string,
    },
    emits: ['skuListChange'],
    setup(props, {emit}) {
      const modalText = ref<string>(null);
      const visible = ref<boolean>(false);
      const currentSkuDataValueItem = ref<SkuDataValueItem>(null);
      const inputRefs = ref<Array<HTMLElement>>([])
      const skuList = ref<SkuViewSaveDTO[]>([]);

      //处理for循环渲染的ref
      const setItemRef = (el) => {
        if (el) {
          inputRefs.value.push(el)
        }
      }
      const handleClose = (removedTag: string, sku: SkuViewSaveDTO) => {
        const skuDataValueItemList = sku.itemSaveDTOList.filter(skuItemSaveDTO => skuItemSaveDTO.name != removedTag);
        sku.itemSaveDTOList = skuDataValueItemList
      };

      onMounted(() => {
        syncSku()
      })

      function getData(){
        return skuList.value
      }
      function syncSku(){
        getListByMaterialsId(props.materialsId).then(res => {
          res.forEach(item => {
            item.inputVisible = false
            item.inputValue = ''
            if(!item.itemSaveDTOList){
              item.itemSaveDTOList = []
            }
          })
          skuList.value = res
        })
      }

      //添加空白sku
      const addSku = () => {
        let orderIndex:number = skuList.value.length + 1
        let item: SkuViewSaveDTO = {
          materialsId: props.materialsId,
          name: '',
          keyStr: 's' + orderIndex,
          orderIndex: orderIndex,
          itemSaveDTOList: [],
          largeImageMode: false,
          inputVisible: false
        }
        skuList.value.push(item)
        emit('skuListChange', skuList.value)
      }
      const showInput = (sku: SkuViewSaveDTO, index) => {
        console.log(index)
        sku.inputVisible = true;
        nextTick(() => {
          inputRefs.value[inputRefs.value.length - 1].focus();
        });
      };

      const handleButtonClick = (e: Event) => {
        console.log('click left button', e);
      };
      const handleMenuClick = (e: Event, item: SkuDataValueItem, sku: SkuViewSaveDTO) => {
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

      const handleInputConfirm = (sku: SkuViewSaveDTO) => {
        const inputValue = sku.inputValue;
        let skuItemSaveDTOList: Array<SkuItemSaveDTO> = sku.itemSaveDTOList;
        if (inputValue && skuItemSaveDTOList.filter(skuDataValueItem => skuDataValueItem.name === inputValue).length === 0) {
          let newItem:SkuItemSaveDTO = {
            materialsId: props.materialsId,
            parentId: sku.id,
            name: inputValue,
            orderIndex: skuItemSaveDTOList.length + 1
          }
          skuItemSaveDTOList = [...skuItemSaveDTOList, newItem];
          Object.assign(sku, {
            itemSaveDTOList: skuItemSaveDTOList,
            inputVisible: false,
            inputValue: '',
          });
          emit('skuListChange', skuList.value)
        } else if (inputValue) {
          message.error('规格：' + inputValue + '重复！');
        }
        console.log(skuList.value)
        Object.assign(sku, {
          inputVisible: false,
          inputValue: '',
        });
      };
      return {
        skuList,
        handleClose,
        showInput,
        handleInputConfirm,
        addSku,
        columns,
        setItemRef,
        syncSku,
        getData,
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
