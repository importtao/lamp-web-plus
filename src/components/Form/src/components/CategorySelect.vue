<template>
<!--  <Select v-bind="attrs" :treeData="getOptions" v-model:value="state">-->
<!--    <template #[item]="data" v-for="item in Object.keys($slots)">-->
<!--      <slot :name="item" v-bind="data"></slot>-->
<!--    </template>-->
<!--    <template #suffixIcon v-if="loading">-->
<!--      <LoadingOutlined spin />-->
<!--    </template>-->
<!--    <template #notFoundContent v-if="loading">-->
<!--      <span>-->
<!--        <LoadingOutlined spin class="mr-1" />-->
<!--        {{ t('component.form.apiSelectNotFound') }}-->
<!--      </span>-->
<!--    </template>-->
<!--  </Select>-->
  <TreeSelect
    v-model:value="state"
    v-bind="attrs"
    :tree-data="getOptions"
    :multiple="multiple"
    tree-default-expand-all
    :fieldNames="{children:'children', label:'label', key:'id', value: 'value' }"
    allow-clear
  />
  <!--    tree-checkable-->
<!--  :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"-->
<!--    placeholder="Please select"-->
<!--    :load-data="onLoadData"-->

</template>
<script lang="ts">
  import { defineComponent, PropType, ref, watchEffect, unref,computed } from 'vue';
  // import { Select } from 'ant-design-vue';
  import { TreeSelect } from 'ant-design-vue';

  import { isFunction } from '/@/utils/is';
  import { useRuleFormItem } from '/@/hooks/component/useFormItem';
  import { useAttrs } from '/@/hooks/core/useAttrs';
  import { get } from 'lodash-es';

  // import { LoadingOutlined } from '@ant-design/icons-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { propTypes } from '/@/utils/propTypes';

  type TreeNode = { label: string; value: string; disabled?: boolean,selectable?: boolean,children:Array<TreeNode>,disableCheckbox?: boolean };

  export default defineComponent({
    name: 'CategorySelect',
    components: {
      TreeSelect
    },
    props: {
      value: propTypes.string,
      multiple: propTypes.bool,
      numberToString: propTypes.bool,
      api: {
        type: Function as PropType<(arg?: Recordable) => Promise<TreeNode[]>>,
        default: null,
      },
      // api params
      params: {
        type: Object as PropType<Recordable>,
        default: () => {},
      },
      // support xxx.xxx.xx
      resultField: propTypes.string.def(''),
      // labelField: propTypes.string.def('label'),
      // valueField: propTypes.string.def('value'),
    },
    emits: ['treeData-change', 'change'],
    setup(props, { emit }) {
      const treeData = ref<TreeNode[]>([]);
      // const loading = ref(false);
      const attrs = useAttrs();
      const { t } = useI18n();

      // Embedded in the form, just use the hook binding to perform form verification
      const [state] = useRuleFormItem(props);

      // const getOptions = computed(() => {
      //   const { labelField, valueField, numberToString } = props;
      //
      //   return unref(treeData).reduce((prev, next: Recordable) => {
      //     if (next) {
      //       const value = next[valueField];
      //       prev.push({
      //         label: next[labelField],
      //         value: numberToString ? `${value}` : value,
      //         children:[]
      //       });
      //     }
      //     return prev;
      //   }, [] as TreeNode[]);
      // });

      const getOptions = computed(() => treeData.value)
      watchEffect(() => {
        fetch();
      });

      async function fetch() {
        const api = props.api;
        if (!api || !isFunction(api)) return;

        try {
          // loading.value = true;
          const res = await api(props.params);
          if (Array.isArray(res)) {
            treeData.value = res;
            emit('treeData-change', unref(treeData));
            return;
          }
          if (props.resultField) {
            treeData.value = get(res, props.resultField) || [];
          }
          emit('treeData-change', unref(treeData));
        } catch (error) {
          console.warn(error);
        } finally {
          // loading.value = false;
        }
      }
      return { state, attrs, treeData, t ,getOptions};
    },
  });
</script>
