import { ColorType } from "./ColorType"

export type PillType = {
    label: string
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
    color?: ColorType | 'default' | 'orange' | 'green' | 'pink'
}