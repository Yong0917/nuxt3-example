<template>
  <div :class="`${cn(
      'contents-wrap',
      ContentsWrapVariants({
            size,
            bg,
            spacing,
            className
      }))}${className ? ' ' + className : ''}${checkMypage() || sidebar ? ' has-sidebar' : ''}`"
  >
    <div class="body-wrap w-full">
      <slot />
    </div>
  </div>


</template>

<script setup lang="ts">
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from "~/lib/common/ui/utils";

const {
  children,
  className,
  size,
  bg,
  spacing,
  sidebar,
  sidebarTitle
} = defineProps<ContentsProps>()

const checkMypage = () => {
  return false
}

const ContentsWrapVariants = cva('size-full ', {
  variants: {
    size: {
      default: 'pc:w-large px-5 pc:px-10 pc:mx-auto',
      medium: 'pc:w-medium px-5 pc:px-10 pc:mx-auto',
      small: 'pc:w-[455px] px-5 pc:px-10 pc:mx-auto',
      full: 'w-full px-0 pc:mx-auto pc:min-w-[1280px]'
    },
    bg: {
      default: 'bg-white'
    },
    spacing: {
      default: 'pt-5 pc:pt-10',
      large: 'pt-10 pc:pt-10',
      zero: 'pt-0 pc:pt-0'
    }
  },
  defaultVariants: {
    size: 'default',
    bg: 'default',
    spacing: 'default'
  }
})

// interface ContainerProps {
//   children: ReactNode
//   btnFloating?: boolean // 모바일에서 버튼을 하단에 fixed 시킬 때 컨테이너 여백 확보용 (ButtonArea 에 bottom-fixed 클래스 같이 적용해야 함)
// }

interface ContentsProps{
  spacing?: 'default' | 'large' | 'zero'
  size?: 'default' | 'medium' | 'small' | 'full'
  className?: string
  children?: any
  sidebar?: 'mypage' | 'customer' // 다른 타입이 있을 경우 추가 하세요.
  sidebarTitle?: string // PC화면에서 sidebar(메뉴)가 있을 때 bar 상단의 타이틀
  bg?: any
}

</script>

<style scoped>

</style>