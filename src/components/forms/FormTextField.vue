<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef } from 'vue';
import TextField from '@/components/atoms/TextField.vue';

type UseFieldArgs = Parameters<typeof useField<string>>;

const props = defineProps<{
  name: string;
  rules?: UseFieldArgs[1];
}>();
const nameRef = toRef(props, 'name');
const { value } = useField<string>(nameRef, props.rules);
</script>

<template>
  <TextField v-model="value" />
</template>
