<template>
  <PageWrapper
    class="high-form"
    title="编辑物料"
    content=""
  >
    <a-card title="物料基础信息" :bordered="false">
      <template #extra>
        <Button type="primary" size="large" :loading="baseInfoLoading" @click="saveBaseInfo">保存
        </Button>
      </template>
      <BasicForm @register="register"/>
    </a-card>
    <a-card title="物料图片" :bordered="false">
      <template #extra>
        <Button type="primary" size="large" :loading="baseInfoLoading" @click="saveBaseInfo">保存
        </Button>
      </template>
      <MaterialsImage max="8" :materialsBaseInfo="materialsBaseInfo" @uploadSuccess="(url)=>{materialsBaseInfo.imgUrl = url}"></MaterialsImage>
    </a-card>
    <a-card title="物料规格SKU管理" :bordered="false" class="!mt-5">
      <!--      <BasicForm @register="registerTask" />-->
      <template #extra>
        <Button type="primary" @click="saveSku" size="large" :loading="skuLoading">保存</Button>
      </template>
      <TagsEdit ref="skuEdit" :materialsId="params.id" @skuListChange="skuListChange"/>
    </a-card>
    <a-card title="物料规格及库存管理" :bordered="false" style="margin-bottom: 30px;" class="!mt-5 !mb-25">
      <template #extra>
        <Button type="primary" size="large" :loading="skuPropertyLoading" @click="saveSkuProperty">
          保存
        </Button>
      </template>
      <SkuEditTable ref="skuProperty" :materialsId="params.id"/>
    </a-card>

    <!--    <template #rightFooter>-->
    <!--      <Button type="primary" @click="submitAll"> 提交{{params.id}}</Button>-->
    <!--    </template>-->
  </PageWrapper>
</template>
<script lang="ts">
  import {BasicForm, useForm} from '/@/components/Form';
  import {computed, defineComponent, onMounted, ref, unref} from 'vue';
  import SkuEditTable from './SkuEditTable.vue';
  import TagsEdit from './TagsEdit.vue';
  import {PageWrapper} from '/@/components/Page';
  import {schemas, taskSchemas} from './data';
  import {Button, Card, message} from 'ant-design-vue';
  import MaterialsImage from "./MaterialsImage.vue";

  import {useRouter} from 'vue-router';
  import {SkuDataItem, SkuEdit} from "/@/api/lamp/materials/model/skuModel";
  import {
    query as materialsBaseInfoQuery,
    update as materialsBaseInfoUpdate
  } from '/@/api/lamp/materials/materialsBaseInfo';
  import {saveList} from '/@/api/lamp/materials/skuParent';
  import {saveList as saveSkuPropertyList} from '/@/api/lamp/materials/sku';
  import {MaterialsBaseInfo} from "/@/api/lamp/materials/model/materialsBaseInfoModel";


  export default defineComponent({
    name: 'FormHightPage',
    components: {
      BasicForm,
      SkuEditTable,
      MaterialsImage,
      PageWrapper,
      [Card.name]: Card,
      TagsEdit,
      Button,
      message
    },
    setup() {
      const {currentRoute} = useRouter();
      const params = computed(() => {
        return unref(currentRoute).params;
      });
      const baseInfoLoading = ref(false);
      const materialsBaseInfo = ref<MaterialsBaseInfo>();

      const skuLoading = ref(false);
      const skuPropertyLoading = ref(false);
      const skuEdit = ref();
      const skuProperty = ref<{ getDataSource: () => any } | null>(null);
      const tagsList = ref<SkuEdit[]>([]);
      const skuList = ref<SkuDataItem[]>([]);


      const [register, {validate, setFieldsValue}] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: schemas,
        showActionButtonGroup: false,
      });

      const [registerTask, {validate: validateTaskForm}] = useForm({
        // baseColProps: {
        //   span: 6,
        // },
        schemas: taskSchemas,
        showActionButtonGroup: false,
      });

      onMounted(() => {
        materialsBaseInfoQuery({id: params.value.id}).then(res => {
          let materialsBaseInfoList: MaterialsBaseInfo[] = res
          if (materialsBaseInfoList && materialsBaseInfoList.length < 1) {
            message.error('sku不能为空！');
            return
          }
          materialsBaseInfo.value = materialsBaseInfoList[0]
          setFieldsValue(materialsBaseInfo.value)
        })
      })

      function skuListChange(list) {
        // skuList.value = list
      }

      // provide('', skuList)

      function saveBaseInfo() {
        materialsBaseInfoUpdate(materialsBaseInfo.value).then(res => {
          message.success("修改成功")
        })
      }

      function saveSku() {
        skuLoading.value = true
        // let skuViewSaveDTOS:SkuViewSaveDTO[] = transferFromFront(skuList.value,params.value.id)
        skuList.value = skuEdit.value.getData().filter(item => item.name && item.name.trim().length > 0)
        saveList(skuList.value).then(res => {
            skuEdit.value.syncSku()
            skuProperty.value.syncSkuProperty()
            message.success("修改成功")
          }
        ).finally(() => skuLoading.value = false)

      }

      function saveSkuProperty() {
        skuPropertyLoading.value = true
        // let skuViewSaveDTOS:SkuViewSaveDTO[] = transferFromFront(skuList.value,params.value.id)
        let paramData = skuProperty.value.getData()
        saveSkuPropertyList(paramData).then(res => {
            skuProperty.value.syncSkuProperty()
          message.success("修改成功")
          }
        ).finally(() => skuPropertyLoading.value = false)

      }

      async function submitAll() {
        try {
          if (skuProperty.value) {
            console.log('table data:', skuProperty.value.getDataSource());
          }

          const [values, taskValues] = await Promise.all([validate(), validateTaskForm()]);
          console.log('form data:', values, taskValues);
        } catch (error) {
        }
      }


      return {
        skuPropertyLoading,
        baseInfoLoading,
        skuLoading,
        schemas,
        taskSchemas,
        register,
        registerTask,
        submitAll,
        skuProperty,
        params,
        tagsList,
        skuListChange,
        saveSkuProperty,
        saveSku,
        skuEdit,
        saveBaseInfo,
        materialsBaseInfo

      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
