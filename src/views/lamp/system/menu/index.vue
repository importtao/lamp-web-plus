<template>
  <div
    class="overflow-hidden vben-page-wrapper-content flex"
    style="height: 904px; min-height: 904px"
  >
    <!-- <a-row>
    <a-col :span="6"> -->
    <div class="bg-white m-4 mr-2 overflow-hidden w-1/5">
      <!-- <a-card
          title="菜单树"
          :bordered="false"
          style="width: 100%;height: 100%;padding: 0%;"
        > -->
      <!-- <PageWrapper title="Tree函数操作示例" contentBackground contentClass="p-4"> -->

      <div style="width: 100%; padding: 20px; background-color: white">
        <a-button @click="appendNodeByKey(0)" class="mr-2"> 添加根节点</a-button>
        <!--        <a-button @click="appendNodeByKey('2-2')" class="mr-2"> 添加在parent3内添加节点</a-button>-->
      </div>

      <!-- <div> -->
      <BasicTree
        title="菜单树"
        showLine
        toolbar
        :treeData="treeData"
        :actionList="actionList"
        :renderIcon="createIcon"
        :beforeRightClick="getRightMenuList"
        ref="menuTreeRef"
        @select="selectNode"
      />
      <!-- </PageWrapper> -->
      <!-- </div> -->
      <!-- </a-card> -->
    </div>
    <!-- </a-col> -->
    <!-- <a-col :span="8"> -->
    <div class="bg-white m-4 ml-2 mr-2 overflow-hidden w-1/4">
<!--      <a-spin />-->
      <a-card title="编辑菜单" :bordered="false" style="width: 100%">
        <BasicForm @register="registerForm" @submit="handleSubmit"/>
        <a-button type="primary" block @click="handleSubmit" :loading="submitLoading" >{{isEdit?'保存修改':'提交'}}</a-button>
        <a-button block style="margin-top: 10px;" @click="resetForm">重置</a-button>
      </a-card>
    </div>
    <!-- </a-col> -->
    <!-- <a-col :span="10"> -->
    <div class="bg-white m-4 ml-2 overflow-hidden w-1/2">
      <a-card title="权限资源" :bordered="false" style="width: 100%">
        <resource :dataList="selectedResourceData" :currentMenuId="currentMenuId"/>
      </a-card>
    </div>
    <!-- </a-col> -->
    <!-- </a-row> -->
  </div>
</template>
<script lang="ts">
  import {defineComponent, h, ref, onMounted, provide, watch, unref} from 'vue';
  import {CarryOutOutlined, FormOutlined} from '@ant-design/icons-vue';
  // import { treeData1 } from './data';
  import {PlusOutlined, DeleteOutlined} from '@ant-design/icons-vue';
  // import { PageWrapper } from '/@/components/Page';

  import {BasicTree, ActionItem, TreeItem, ContextMenuItem} from '/@/components/Tree/index';
  import {Row, Col, Card, Button} from 'ant-design-vue';

  import {getMenuTree, getMenuById} from '/@/api/authority/menu';
  import {query as resourceQuery} from '/@/api/lamp/system/resource';
  import {BasicForm, useForm} from '/@/components/Form/index';
  import {editFormSchema} from './menu.data';
  import resource from '/@/views/lamp/system/resource/index.vue';
  import {getValidateRules} from '/@/api/lamp/common/formValidateService';
  import {customFormSchemaRules} from "/@/views/lamp/system/menu/menu.data";
  import {ActionEnum} from "/@/enums/commonEnum";
  import {Api as menuApi,update,save} from '/@/api/lamp/system/menu';
  import {Menu} from "/@/api/lamp/system/model/menuModel";
  import {Resource} from "/@/api/lamp/system/model/resourceModel";
  import {AxiosRequestConfig} from "axios";
  import {resolveConfigFile} from "prettier";

  export default defineComponent({
    components: {
      [Button.name]: Button,
      [Row.name]: Row,
      [Col.name]: Col,
      [Card.name]: Card,
      BasicTree,
      CarryOutOutlined,
      FormOutlined,
      BasicForm,
      resource
      // resource
      // PageWrapper
    },
    setup() {
      const isEdit = ref<boolean>(false);
      const submitLoading = ref<boolean>(false);
      const currentMenuId = ref<number>(null);
      // const editMenuData = ref<Menu>({});
      const treeData = ref<TreeItem[]>([]);
      const selectedMenuData = ref<Nullable<Menu>>(null);
      const selectedResourceData = ref<Nullable<Resource[]>>([]);

      function freshRule() {
        let apiName: AxiosRequestConfig;
        let actionType: ActionEnum;
        if (isEdit.value) {
          apiName = menuApi.Update
          actionType = ActionEnum.EDIT
        } else {
          apiName = menuApi.Save
          actionType = ActionEnum.ADD
        }
        console.log('获取校验规则');
        getValidateRules(apiName, customFormSchemaRules(actionType)).then(async (rules) => {
          console.log(rules)
          rules && rules.length > 0 && (await updateSchema(rules));
        });
      }

      freshRule()
      watch(isEdit, () => {
        freshRule();
      })
      const selectNode = (selectedKeys, {selected}) => {
        if (!selected) return
        const menuId = selectedKeys[0]
        currentMenuId.value = menuId
        getMenuById(menuId).then(menu => {
          selectedMenuData.value = menu
          setFieldsValue(menu)
          isEdit.value = true
        })
        resourceQuery({menuId: menuId}).then(resourceList => {
          selectedResourceData.value = resourceList
          debugger
          console.log(selectedResourceData)
        })
      }
      provide('selectedResourceData', selectedResourceData)
      provide('currentMenuId', currentMenuId)
      const [registerForm, {resetFields, setFieldsValue, appendSchemaByField, updateSchema, validate}] = useForm({
        labelWidth: 100,
        schemas: editFormSchema,
        showActionButtonGroup: false,
        baseColProps: {lg: 24},
      });

      async function fetch() {
        getMenuTree().then(list => {
          treeData.value = list
          //todo list作为TreeSelect数据需要有label字段，不然无法渲染
          appendSchemaByField(
            {
              label: '父级菜单',
              field: 'parentId',
              component: 'TreeSelect',
              componentProps: {
                treeData: [{
                  title: '根节点',
                  value: 0,
                  key: 0,
                  children: list
                }],
                replaceFields: {
                  value: 'key',
                },
                getPopupContainer: () => document.body,
              },
            },
            null, true
          )
        })
      }

      function handlePlus(node: any) {
        console.log(node);
      }

      function appendNodeByKey(parentKey: string | null = null) {
        isEdit.value = false
        resetFields();
        setFieldsValue({parentId: parentKey});
      }

      const actionList: ActionItem[] = [
        {
          // show:()=>boolean;
          render: (node) => {
            return h(PlusOutlined, {
              class: 'ml-2',
              onClick: () => {
                handlePlus(node);
              },
            });
          },
        },
        {
          render: () => {
            return h(DeleteOutlined);
          },
        },
      ];
      onMounted(() => {
        fetch();
      });

      function createIcon({level}) {
        if (level === 1) {
          return 'ion:git-compare-outline';
        }
        if (level === 2) {
          return 'ion:home';
        }
        if (level === 3) {
          return 'ion:airplane';
        }
        return '';
      }

      function resetForm() {
        resetFields()
      }

        async function handleSubmit() {
          try {
            submitLoading.value = true
            const params = await validate()
            if (isEdit.value) {
              await update(params);
            } else {
              await save(params);
            }
            // setDrawerProps({ confirmLoading: true });
            // TODO custom api
            // console.log(values);
            // closeDrawer();
            // emit('success');
          } finally {
            // setDrawerProps({ confirmLoading: false });
            submitLoading.value = false
          }
        }

      function getRightMenuList(node: any): ContextMenuItem[] {
        return [
          {
            label: '新增',
            handler: () => {
              console.log(node)
              appendNodeByKey(node.key)
            },
            icon: 'bi:plus',
          },
          {
            label: '删除',
            handler: () => {
              console.log('点击了删除', node.label);
            },
            icon: 'bx:bxs-folder-open',
          },
        ];
      }

      return {
        treeData, registerForm, handleSubmit, actionList, createIcon, appendNodeByKey,
        selectNode,
        currentMenuId,
        selectedMenuData,
        selectedResourceData,
        getRightMenuList,
        resetForm,
        submitLoading,
        isEdit
      };
    },
  });
</script>
<style scoped>
  .ant-card-body {
    padding: 0%;
  }
</style>
