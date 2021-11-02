<template>
  <BasicModal v-bind="$attrs" @register="register" title="选择用户"  width="600px">
    <Transfer
      v-model:target-keys="targetKeys"
      v-model:selected-keys="selectedKeys"
      :data-source="getAllUserList"
      :titles="['全部用户', '已选用户']"
      :render="item => item.title"
      show-search oneWay
      :list-style="{
      width: '250px',
      height: '600px',
    }"
      @change="handleChange"
      @selectChange="handleSelectChange"
      @scroll="handleScroll"
      @ok="save"
    />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, watchEffect,computed} from 'vue';
  import { Transfer } from 'ant-design-vue';
  import { BasicModal,useModalInner } from '/@/components/Modal';
  import { useRuleFormItem } from '/@/hooks/component/useFormItem';
  import { useAttrs } from '/@/hooks/core/useAttrs';
  import { get } from 'lodash-es';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { propTypes } from '/@/utils/propTypes';
  import { query } from '/@/api/lamp/org/user';
  import {isFunction} from "/@/utils/is";

  type Item = {key: string,title: string,description?: string,disabled ?: boolean}


  export default defineComponent({
    name: 'UserTransfer',
    components: {
      Transfer,BasicModal
    },
    props: {
      value: propTypes.string,
      multiple: propTypes.bool,
      numberToString: propTypes.bool,
      targetKeysApi: {
        type: Function as PropType<(arg?: Recordable) => Promise<string[]>>,
        default: null,
      },
      // api params
      params: {
        type: Object as PropType<Recordable>,
        default: () => {},
      },
      targetKeysParams: {
        type: Object as PropType<Recordable>,
        default: () => {},
      },
      // support xxx.xxx.xx
      resultField: propTypes.string.def(''),
    },
    emits: ['handleSelectChange', 'handleChange','handleScroll'],
    setup(props, { emit }) {
      const modelRef = ref({});
      const selectedKeys = ref<string[]>([]);

      const allUser = ref<Item[]>([]);
      const targetKeys = ref<string[]>([]);
      const attrs = useAttrs();
      const { t } = useI18n();

      const [state] = useRuleFormItem(props);


      const getAllUserList = computed(() => allUser.value)
      watchEffect(() => {
        fetch();
      });

      const handleChange = (nextTargetKeys: string[], direction: string, moveKeys: string[]) => {
        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
        emit('handleSelectChange', null);
      };
      const handleSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        // selectedKeys.value = sourceSelectedKeys
        console.log('targetSelectedKeys: ', targetSelectedKeys);
        emit('handleChange', null);
      };
      const handleScroll = (direction: string, e: Event) => {
        // console.log('direction:', direction);
        // console.log('target:', e.target);
        // targetKeys.value = e.target
        emit('handleScroll', null);
      };
      async function fetch() {
        try {
          // loading.value = true;
          const res = await query(props.params);
          if (Array.isArray(res)) {
            allUser.value = res.map(user =>{
              let item:Item = {
                key: user.id,
                title: user.name,
                description: user.name,
                disabled: false
              }
              return item
            });
            // emit('treeData-change', unref(treeData));
            return;
          }
          if (props.resultField) {
            allUser.value = get(res, props.resultField) || [];
          }
          const targetKeysApi = props.targetKeysApi;
          if (!targetKeysApi || !isFunction(targetKeysApi)) return;
          const targetKeysRes = await targetKeysApi(props.targetKeysParams);
          if (Array.isArray(res)) {
            targetKeys.value = targetKeysRes
          }

          // emit('treeData-change', unref(treeData));
        } catch (error) {
          console.warn(error);
        } finally {
          // loading.value = false;
        }
      }
      function save(){
        console.log()
      }
      const [register] = useModalInner((data) => {
        // 方式1
        // setFieldsValue({
        //   field2: data.data,
        //   field1: data.info,
        // });

        // 方式2
        modelRef.value = { users: data };

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      });
      return {state, attrs, allUser, t ,getAllUserList,handleSelectChange,handleChange,handleScroll,modelRef,targetKeys,selectedKeys,save,register};
    },
  });
</script>
