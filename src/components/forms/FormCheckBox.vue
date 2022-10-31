<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef } from 'vue';
import CheckBox from '@/components/atoms/CheckBox.vue';

// useFieldの引数で使用される型からタプル型を構築
type UseFieldArgs = Parameters<typeof useField<string | boolean>>;

const props = defineProps<{
  name: string;
  value: string | boolean;
  id?: string;
  rules?: UseFieldArgs[1];
  fieldOptions?: UseFieldArgs[2];
}>();

const nameRef = toRef(props, 'name');
const { value } = useField<string | boolean>(nameRef, props.rules, {
  ...props.fieldOptions,
  type: 'checkbox',
  checkedValue: props.value,
});
</script>

<template>
  <div class="colmunContainer">
    <CheckBox v-model="value" :value="props.value" :id="props.id" />
    <slot name="checkLabel" />
  </div>
</template>
