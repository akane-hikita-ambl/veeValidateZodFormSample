<script setup lang="ts">
import ErrorMessage from '@/components/atoms/ErrorMessage.vue';

const props = defineProps<{
  modelValue: string; // v-modelプロパティ
  errorMessage?: string;
}>();

// v-modelに変更があったことを伝えるイベントの定義
const emit = defineEmits<{
  (
    e: 'update:modelValue', // v-modelイベント
    value: string
  ): void;
}>();
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <input
    type="text"
    v-bind="$attrs"
    :value="props.modelValue"
    @input="handleChange"
    :class="{ inputError: props.errorMessage }"
  />
  <ErrorMessage :errorMessage="props.errorMessage" />
</template>
