<script setup lang="ts">
import { useFieldError } from 'vee-validate';
import { toRef } from 'vue';
import Label from '@/components/atoms/Label.vue';
import ErrorMessage from '@/components/atoms/ErrorMessage.vue';

const props = defineProps<{
  label: string;
  name: string;
}>();

const nameRef = toRef(props, 'name');
const errorMessage = useFieldError(nameRef);
</script>

<template>
  <div class="formRowContainer">
    <!-- フォーム項目見出し -->
    <Label :label="props.label" />
    <div class="flexContainer">
      <!-- フォーム要素 -->
      <slot />
    </div>
    <!-- バリデーションエラーメッセージ -->
    <ErrorMessage :errorMessage="errorMessage" />
  </div>
</template>

<style scoped>
div.flexContainer {
  display: flex;
  flex-wrap: wrap;
}
div.formRowContainer {
  display: grid;
  grid-template-columns: 1fr 20rem;
  grid-column-gap: 1rem;
}
label {
  text-align: left;
}
@media (max-width: 480px) {
  div.formRowContainer {
    grid-template-columns: 140px auto;
  }
}
</style>
