<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: string | boolean;
  modelValue: string | boolean | string[];
}>();

// Arrayかどうか
const isModelArray = computed(() => Array.isArray(props.modelValue));

const isChecked = computed(() =>
  // 配列の場合、
  isModelArray.value ? (props.modelValue as string[]).includes(props.value as string) : props.modelValue === props.value
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | boolean | string[]): void;
}>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;

  // 配列の場合
  if (isModelArray.value) {
    const modelValue = props.modelValue as string[];
    // その項目がチェックされていたら追加し、外されていたら除外する
    const value = target.checked ? [...modelValue, target.checked] : modelValue.filter((v) => v !== target.value);
    emit('update:modelValue', value);
    return;
  }

  const falsy = typeof props.value === 'boolean' ? false : '';
  const value = target.checked ? props.value : falsy;

  emit('update:modelValue', value);
};
</script>

<template>
  <input type="checkbox" @change="handleChange" :value="props.value" :checked="isChecked" />
</template>
