<template>
  <div class="text-h3">{{ ok ? title : 'NO title' }}</div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
const ok = true;
</script>

<style scoped></style>
