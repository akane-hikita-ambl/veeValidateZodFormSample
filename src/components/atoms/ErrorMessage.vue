<script setup lang="ts">
import { ref } from 'vue';
// cssクラス
const validteError = ref('validteError');

const props = defineProps<{
  errorMessage?: string;
}>();
</script>

<template>
  <!-- エラーメッセージがある場合に、.warningを適用する。.validteErrorは常に適用 -->
  <div :class="[{ warning: props.errorMessage }, validteError]">
    {{ props.errorMessage }}
  </div>
</template>
