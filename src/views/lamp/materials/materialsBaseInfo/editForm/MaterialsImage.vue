<template>
  <div class="clearfix">
    <Upload
      v-model:file-list="fileList"
      :customRequest="customRequest"

      @change="handleChange"
      list-type="picture-card"
      class="sku-uploade"
      @preview="handlePreview"
    >
      <div v-if="fileList.length < max">
        <plus-outlined/>
        <div class="ant-upload-text">上传</div>
      </div>
    </Upload>
    <Modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage"/>
    </Modal>
  </div>
</template>
<script lang="ts">
  import {PlusOutlined} from '@ant-design/icons-vue';
  import {computed, defineComponent, PropType, ref,watch,onMounted} from 'vue';
  import {Modal, Upload} from 'ant-design-vue';
  import {uploadToAliyunOss} from '/@/utils/aliyun/ali-oss'

  import {propTypes} from "../../../../../utils/propTypes";
  import {MaterialsBaseInfo} from "/@/api/lamp/materials/model/materialsBaseInfoModel";

  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  interface FileItem {
    uid: string;
    name?: string;
    status?: string;
    response?: string;
    percent?: number;
    url?: string;
    preview?: string;
    originFileObj?: any;
  }

  export default defineComponent({
    components: {
      PlusOutlined, Upload, Modal
    },
    name: 'MaterialsImage',
    props: {
      // fileList: Object as PropType<SkuEdit[]>,
      max: propTypes.number,
      materialsBaseInfo: Object as PropType<MaterialsBaseInfo>
    },
    emits:['uploadSuccess'],
    setup(props,{ emit }) {
      const previewVisible = ref<boolean>(false);
      const previewImage = ref<string | undefined>('');

      const fileList = ref<FileItem[]>([]);
      watch(props, (nweProps, oldProps) => {
        if(props.materialsBaseInfo){
          let uid = 0
          fileList.value = props.materialsBaseInfo.imgUrl.trim().split(',').map(url=>{
            uid --
            return {
              uid: uid,
              name: uid+'.png',
              status: 'done',
              url: url
            }
          })
        }
      });
      let result = computed(()=>{
        if(fileList.value && fileList.value.length > 0){
          return fileList.value.filter(item => item.url).map(item => item.url).join(',')
        }
      })

      const handleCancel = () => {
        previewVisible.value = false;
      };
      const handlePreview = async (file: FileItem) => {
        if (!file.url && !file.preview) {
          file.preview = (await getBase64(file.originFileObj)) as string;
        }
        previewImage.value = file.url || file.preview;
        previewVisible.value = true;
      };
      // const handleChange = ({ fileList: newFileList }: FileInfo) => {
      //   fileList.value = newFileList;
      // };
      const customRequest = ((action) => {
        const file = action.file
        let name = file.name
        let pos = name.lastIndexOf('.');
        let type = name.substr(pos);
        let fileName = `${Date.parse(new Date())}` + parseInt(Math.random() * 10000) + type
        uploadToAliyunOss(fileName, file).then((res: any) => {
          let url = res.res.requestUrls[0]
          url = url.split('?uploadId=')[0]
          fileList.value[fileList.value.length -1] = {
            uid: '-'+fileList.value.length+1,
            name: fileList.value.length+1+'.png',
            status: 'done',
            url: url
          }
          emit('uploadSuccess',result)
        }).catch((err) => {
          console.log(err)
          file.status = 'failed'
        })
      })
      const handleChange = ((info) => {
        if (info.file.status === 'uploading') {
          // this.loading = true
        }
      })
      const beforeUpload = ((file) => {
        console.log(file)
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
        if (!isJpgOrPng) {
          // this.$message.error('只允许上传图片')
        }
        const isLt10M = file.size / 1024 / 1024 < 10
        if (!isLt10M) {
          // this.$message.error('图片最大10MB!')
        }
        if (isJpgOrPng && isLt10M) {
        }
        return isJpgOrPng && isLt10M
      })
      return {
        previewVisible,
        previewImage,
        fileList,
        handleCancel,
        handlePreview,
        handleChange,
        customRequest,
        beforeUpload,
        result
      };
    },
  });
</script>
<style>
  /*.sku-uploade > .ant-upload {*/
  /*  width: 70px;*/
  /*  height: 70px;*/
  /*}*/

</style>
