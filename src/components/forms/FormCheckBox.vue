<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef } from 'vue';
import CheckBox from '@/components/atoms/CheckBox.vue';

type UseFieldArgs = Parameters<typeof useField<string | boolean>>;

const props = defineProps<{
  name: string;
  value: string | boolean;
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
    <CheckBox v-model="value" :value="props.value" />
    <slot name="checkLabel" />
  </div>
</template>
