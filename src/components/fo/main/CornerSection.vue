<script setup lang="ts">
import {cva, type VariantProps} from "class-variance-authority";
import {cn} from "~/lib/common/ui/utils";

const CornerSectionVariants = cva('pc:mx-auto', {
  variants: {
    size: {
      default: 'pc:w-large pc:px-10 mo:px-5',
      // medium: 'pc:w-[1140px]',
      // small: 'pc:w-[455px]',
      full: 'w-full !px-0'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

// extends VariantProps<typeof CornerSectionVariants>
interface CornerSectionProps {
  className?: string
  size?: 'default' | 'full'
}

const {className, size} = defineProps<CornerSectionProps>()

// const isClient = useClient()
// if (!isClient) {
//   return <Loading />
// }

</script>


<template>
  <section
      :class="cn('mb-12 pc:mb-20',
      CornerSectionVariants({
        size,
        className
      }))"
  >
    <slot />
  </section>
</template>

<style scoped>

</style>