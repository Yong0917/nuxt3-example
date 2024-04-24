<script setup lang="ts">
const { avgScr } = defineProps({
  avgScr: {
    type: Number,
    required: true
  }
})
const ratingModel= ref(avgScr)
</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-rating
          v-model="ratingModel"
          size="3.5em"
          color="green-5"
          icon="star_border"
          icon-selected="star"
      />
    </div>
  </div>
</template>

<style scoped>

</style>