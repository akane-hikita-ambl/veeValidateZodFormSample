<script setup lang="ts">
import { useField } from 'vee-validate';
import { toRef } from 'vue';
import ErrorMessage from '@/components/atoms/ErrorMessage.vue';

const props = defineProps<{
  name: string;
}>();

const nameRef = toRef(props, 'name');
const { errorMessage } = useField<string>(nameRef);
</script>

<template>
  <div class="flexContainer">
    <slot />
  </div>
  <ErrorMessage :errorMessage="errorMessage" />
</template>

<style scoped>
div.flexContainer {
  display: flex;
  flex-wrap: wrap;
}
</style>
