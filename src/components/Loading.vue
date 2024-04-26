
<script setup lang="ts">

interface LoadingProps {
  width?: string
  height?: string
}

const { width = '100%', height = '300px'} = defineProps<LoadingProps>()

</script>

<template>
<div
    :class="`flex items-center justify-center w-[${width}] ${height === '100%' ? 'fixed inset-0' : ''}`"
    :style="{ height: `${height}` }">
  <PulseLoader color="#CCC" />
</div>
</template>

<style scoped>

</style>