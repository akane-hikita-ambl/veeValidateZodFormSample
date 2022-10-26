<script setup lang="ts">
const props = defineProps<{ label: string }>();
</script>

<template>
  <label>{{ props.label }}</label>
</template>
