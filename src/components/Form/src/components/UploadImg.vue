<template>
  <div class="clearfix">
    <Upload
      v-bind="attrs"
      v-model:file-list="fileList1"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      @preview="handlePreview"
    >
      <div v-if="fileList1.length < 8">
        <plus-outlined />
        <div class="ant-upload-text">上传图片</div>
      </div>
    </Upload>
    <Modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="" style="width: 100%" :src="previewImage" />
    </Modal>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref} from 'vue';
  import { Upload,Modal } from 'ant-design-vue';
  import {propTypes} from "/@/utils/propTypes";
  import {useAttrs} from "/@/hooks/core/useAttrs";
  import { PlusOutlined } from '@ant-design/icons-vue';



  // type User = { id: string; name: string};
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
    name: 'UploadImg',
    components: {
      Upload,Modal,PlusOutlined
    },
    props: {
      fileList: propTypes.array,
    },
    emits: ['handleSelectChange', 'handleChange','handleScroll'],
    setup(props, { emit }) {
      const attrs = useAttrs();

      const previewVisible = ref<boolean>(false);
      const previewImage = ref<string | undefined>('');
      // props.fileList

      const fileList1 = ref<FileItem[]>([

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
        fileList1.value = newFileList;
      };



      return {
        attrs,
        previewVisible,
        fileList1,
        previewImage,
        handleCancel,
        handlePreview,
        handleChange,};
    },
  });
</script>
<style scoped>
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
