<script setup lang="ts">
import { ref } from 'vue';
import UserForm from '@/components/pages/UserForm.vue';
import type { UserFormValues } from '@/components/pages/UserForm.vue';

const submitResult = ref<UserFormValues | null>(null);
const handleSubmit = (formValues: UserFormValues) => {
  // 子コンポーネントから入力値を受け取る（emit）
  submitResult.value = formValues;
};
</script>

<template>
  <div>
    <UserForm @submit="handleSubmit" />
    <pre>{{ submitResult }}</pre>
  </div>
</template>

<style scoped>
div {
  max-width: max-content;
}
pre {
  text-align: left;
}
</style>
