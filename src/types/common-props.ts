import React, { ReactNode } from 'react'
import { HEADER_TYPE, INFLOW_DISPLAY_CATEGORY_TYPE } from '@/constants/commonConstants'

interface CommonProps {
    className?: string
    children?: ReactNode
    handleClick?: (event?: React.MouseEvent) => void
}

interface InflowProps {
    infDispCtgNoGb?: keyof typeof INFLOW_DISPLAY_CATEGORY_TYPE
    infDispCtgNo?: string
}

interface NextImageProps {
    src?: string
    alt?: string
    width?: number
    priority?: boolean
}

interface HeaderContentsProps extends CommonProps {
    type?: keyof typeof HEADER_TYPE
    title?: string
}

export type { CommonProps, InflowProps, NextImageProps, HeaderContentsProps }
