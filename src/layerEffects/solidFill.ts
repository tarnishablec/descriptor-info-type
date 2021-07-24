import { RGBColor } from "../color"

/** 颜色叠加 */
export type SolidFill = {
  color: RGBColor
  enabled: boolean
  mode: string
  opacity: number
  present: boolean
  showInDialog: boolean
}
