<template>
  <q-card class="my-card">
    <NuxtImg :src="`https://img-stg.x2bee.com/${thumbnail}`" alt="/test"/>
    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
interface Props {
  thumbnail: string | undefined;
  title: string;
  subtitle: string;
  mkdpNo: string;
}
defineProps<Props>();
</script>
