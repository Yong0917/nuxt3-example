<template>
  <div
      :class="`container relative w-full max-w-full flex-auto bg-white mo:pb-12 pc:pb-24 ${btnFloating ? ' btn-fixed' : ''}`"
      id="container">
    <slot />
  </div>
</template>

<script setup lang="ts">

const {
  btnFloating
} = defineProps<ContainerProps>()

interface ContainerProps {
  children?: any
  btnFloating?: boolean // 모바일에서 버튼을 하단에 fixed 시킬 때 컨테이너 여백 확보용 (ButtonArea 에 bottom-fixed 클래스 같이 적용해야 함)
}

</script>

<style scoped>

</style>