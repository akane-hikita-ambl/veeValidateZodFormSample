<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef } from 'vue';
import CheckBox from '@/components/atoms/CheckBox.vue';

// useFieldの引数で使用される型からタプル型を構築
type UseFieldArgs = Parameters<typeof useField<string | boolean>>;

const props = defineProps<{
  name: string;
  value: string | boolean;
  // バリデーションルール
  rules?: UseFieldArgs[1];
  // フィールドの設定
  // 詳細はhttps://vee-validate.logaretm.com/v4/api/use-field#typescript-definition FieldOptions参照
  fieldOptions?: UseFieldArgs[2];
}>();

// keyにname,valueにオブジェクト（props）をもつリアクティブオブジェクトを作成する
const nameRef = toRef(props, 'name');
// useField:第一引数はフィールド名。返り値はリアクティブなvalue
const { value } = useField<string | boolean>(nameRef, props.rules, {
  ...props.fieldOptions,
  type: 'checkbox',
  checkedValue: props.value,
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="colmunContainer">
    <CheckBox v-model="value" :value="props.value" v-bind="$attrs" />
    <slot name="checkLabel" />
  </div>
</template>
