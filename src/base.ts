export type Orientation = "horizontal" | "vertical"

export type Transform = Record<"tx" | "ty" | "xx" | "xy" | "yx" | "yy", number>

export type Wrap = {
  warpPerspective: number
  warpPerspectiveOther: number
  warpRotate: string
  warpStyle: string
  warpValue: number
}

/**
 * |             |          |
 * | :---------- | :------- |
 * | screen      | 滤色     |
 * | overlay     | 叠加     |
 * | softLight   | 柔光     |
 * | passThrough | 穿透     |
 * | hardLight   | 强光     |
 * | dissolve    | 溶解     |
 * | darken      | 变暗     |
 * | multiply    | 正片叠底 |
 * | colorBurn   | 颜色加深 |
 *
 * TODO
 */
export type BlendMode =
  | "screen"
  | "overlay"
  | "softLight"
  | "passThrough"
  | "hardLight"
  | "dissolve"
  | "darken"
  | "multiply"
  | "colorBurn"
