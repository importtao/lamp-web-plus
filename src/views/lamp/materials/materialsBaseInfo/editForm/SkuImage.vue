<template>
  <div class="clearfix">
    <Upload
      v-model:file-list="fileList"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      class="sku-uploade"
      @preview="handlePreview"
    >
      <div v-if="fileList.length < max">
        <plus-outlined />
        <div class="ant-upload-text">上传</div>
      </div>
    </Upload>
    <Modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </Modal>
  </div>
</template>
<script lang="ts">
  import { PlusOutlined } from '@ant-design/icons-vue';
  import {defineComponent, ref} from 'vue';
  import { Upload,Modal } from 'ant-design-vue';

  import {propTypes} from "../../../../../utils/propTypes";

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

  interface FileInfo {
    file: FileItem;
    fileList: FileItem[];
  }


  export default defineComponent({
    components: {
      PlusOutlined,Upload,Modal
    },
    name: 'SkuImage',
    props: {
      // fileList: Object as PropType<SkuEdit[]>,
      max: propTypes.number
    },
    setup(props) {
      const previewVisible = ref<boolean>(false);
      const previewImage = ref<string | undefined>('');

      const fileList = ref<FileItem[]>([
      ]);

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
      const handleChange = ({ fileList: newFileList }: FileInfo) => {
        fileList.value = newFileList;
      };

      return {
        previewVisible,
        previewImage,
        fileList,
        handleCancel,
        handlePreview,
        handleChange,
      };
    },
  });
</script>
<style >
  /* you can make up upload button and sample style by using stylesheets */
  /*.ant-upload-select-picture-card i {*/
  /*  font-size: 32px;*/
  /*  color: #999;*/
  /*}*/
  /*.ant-upload{*/
  /*  width: 40px;*/
  /*  height: 40px;*/
  /*}*/

  /*.ant-upload-select-picture-card .ant-upload-text {*/
  /*  !*margin-top: 4px;*!*/

  /*  color: #666;*/
  /*}*/
  .sku-uploade > .ant-upload {
    width: 70px;
    height: 70px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
