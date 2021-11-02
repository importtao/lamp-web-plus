<template>
  <Transfer
    v-model:target-keys="targetKeys"
    v-model:selected-keys="selectedKeys"
    :data-source="getAllUserList"
    :titles="['全部用户', '已选用户']"
    :render="item => item.name"
    :disabled="disabled"
    @change="handleChange"
    @selectChange="handleSelectChange"
    @scroll="handleScroll"
  />
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, watchEffect,computed } from 'vue';
  import { Transfer } from 'ant-design-vue';

  import { isFunction } from '/@/utils/is';
  import { useRuleFormItem } from '/@/hooks/component/useFormItem';
  import { useAttrs } from '/@/hooks/core/useAttrs';
  import { get } from 'lodash-es';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { propTypes } from '/@/utils/propTypes';
  import { query } from '/@/api/lamp/org/user';
  import {User} from "/@/api/lamp/org/model/userModel";

  // type User = { id: string; name: string};

  export default defineComponent({
    name: 'UserTransfer',
    components: {
      Transfer
    },
    props: {
      selectedKeys: propTypes.array,
      targetKeys: propTypes.array,
      value: propTypes.string,
      multiple: propTypes.bool,
      numberToString: propTypes.bool,
      api: {
        type: Function as PropType<(arg?: Recordable) => Promise<User[]>>,
        default: null,
      },
      // api params
      params: {
        type: Object as PropType<Recordable>,
        default: () => {},
      },
      // support xxx.xxx.xx
      resultField: propTypes.string.def(''),
    },
    emits: ['handleSelectChange', 'handleChange','handleScroll'],
    setup(props, { emit }) {
      const allUser = ref<User[]>([]);
      const attrs = useAttrs();
      const { t } = useI18n();

      const [state] = useRuleFormItem(props);

      const getAllUserList = computed(() => allUser.value)
      watchEffect(() => {
        fetch();
      });

      function handleSelectChange(){
        emit('handleSelectChange', null);
      }
      function handleChange(){
        emit('handleChange', null);
      }
      function handleScroll(){
        emit('handleScroll', null);
      }
      async function fetch() {debugger
        const api = props.api;
        if (!api || !isFunction(api)) return;

        try {
          // loading.value = true;
          const res = await query(props.params);
          if (Array.isArray(res)) {
            allUser.value = res;
            // emit('treeData-change', unref(treeData));
            return;
          }
          if (props.resultField) {
            allUser.value = get(res, props.resultField) || [];
          }
          // emit('treeData-change', unref(treeData));
        } catch (error) {
          console.warn(error);
        } finally {
          // loading.value = false;
        }
      }
      return { state, attrs, allUser, t ,getAllUserList,handleSelectChange,handleChange,handleScroll};
    },
  });
</script>
