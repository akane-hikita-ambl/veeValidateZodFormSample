<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef } from 'vue';
import RadioButton from '@/components/atoms/RadioButton.vue';

type UseFieldArgs = Parameters<typeof useField<string>>;

const props = defineProps<{
  name: string;
  value: string;
  id?: string;
  rules?: UseFieldArgs[1];
  fieldOptions?: UseFieldArgs[2];
}>();

const nameRef = toRef(props, 'name');
const { value } = useField<string>(nameRef, props.rules, props.fieldOptions);
</script>

<template>
  <div class="colmunContainer">
    <RadioButton v-model="value" :value="props.value" :id="props.id" />
    <slot name="radioLabel" />
  </div>
</template>
