<template>
  <PageWrapper
    class="high-form"
    title="编辑物料"
    content=""
  >
    <a-card title="物料基础信息" :bordered="false">
      <template #extra><Button type="primary">保存</Button></template>
      <BasicForm @register="register" />
    </a-card>
    <a-card title="物料规格SKU管理" :bordered="false" class="!mt-5">
<!--      <BasicForm @register="registerTask" />-->
      <template #extra><Button type="primary" @click="saveSku">保存</Button></template>
      <TagsEdit  :state="tagsList" @skuListChange="skuListChange"/>
    </a-card>
    <a-card title="物料规格及库存管理" :bordered="false" style="margin-bottom: 30px;" class="!mt-5 !mb-25">
      <template #extra><Button type="primary">保存</Button></template>
      <SkuEditTable ref="tableRef"  :state="tagsList"/>
    </a-card>

    <template #rightFooter>
      <Button type="primary" @click="submitAll"> 提交{{params.id}} </Button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { defineComponent, ref,computed,unref,provide, onMounted } from 'vue';
  import SkuEditTable from './SkuEditTable.vue';
  import TagsEdit from './TagsEdit.vue';
  import { PageWrapper } from '/@/components/Page';
  import { schemas, taskSchemas } from './data';
  import { Card,Button,message } from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  import {SkuDataItem, SkuEdit, transferFromFront} from "/@/api/lamp/materials/model/skuModel";
  import {SkuParent, SkuViewSaveDTO} from "/@/api/lamp/materials/model/skuParentModel";
  import { Api as materialsBaseInfoApi,query as  materialsBaseInfoQuery} from '/@/api/lamp/materials/materialsBaseInfo';
  import {saveList } from '/@/api/lamp/materials/skuParent';


  export default defineComponent({
    name: 'FormHightPage',
    components: { BasicForm, SkuEditTable, PageWrapper, [Card.name]: Card ,TagsEdit,Button ,message},
    setup() {
      const { currentRoute } = useRouter();
      const tableRef = ref<{ getDataSource: () => any } | null>(null);
      const tagsList = ref<SkuEdit[]>([]);
      const skuList = ref<SkuDataItem[]>([]);
      const params = computed(() => {
        return unref(currentRoute).params;
      });

      const [register, { validate ,setFieldsValue}] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: schemas,
        showActionButtonGroup: false,
      });

      const [registerTask, { validate: validateTaskForm }] = useForm({
        // baseColProps: {
        //   span: 6,
        // },
        schemas: taskSchemas,
        showActionButtonGroup: false,
      });

      onMounted(()=>{
        materialsBaseInfoQuery({id: params.value.id}).then(res=>{
          let  materialsBaseInfoList:SkuParent[] = res
          if(materialsBaseInfoList && materialsBaseInfoList.length < 1) {
            message.error('sku不能为空！');
            return
          }
          let  materialsBaseInfo:SkuParent = materialsBaseInfoList[0]
          setFieldsValue(materialsBaseInfo)
        })

      })

      function skuListChange(list){
        skuList.value = list
      }
      provide('',skuList)

      function saveSku(){
        let skuViewSaveDTOS:SkuViewSaveDTO[] = transferFromFront(skuList.value,params.value.id)
        console.log(skuViewSaveDTOS)
        // tagsList.value = skuViewSaveDTOS
       saveList(skuViewSaveDTOS)

      }

      async function submitAll() {
        try {
          if (tableRef.value) {
            console.log('table data:', tableRef.value.getDataSource());
          }

          const [values, taskValues] = await Promise.all([validate(), validateTaskForm()]);
          console.log('form data:', values, taskValues);
        } catch (error) {}
      }


      return { register, registerTask, submitAll, tableRef ,params,tagsList,skuListChange,saveSku
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
