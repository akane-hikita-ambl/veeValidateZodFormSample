<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: string;
  modelValue: string;
  errorMessage?: string;
}>();

const isChecked = computed(() => props.modelValue === props.value);

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
  <input type="radio" :value="props.value" :checked="isChecked" @change="handleChange" v-bind="$attrs" />
</template>
