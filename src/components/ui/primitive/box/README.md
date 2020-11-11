# Box Component

Box component has props for configuring css box model and flex box style rules.

## Box API

### Box Types

- `BoxColor = string` - Reference TailwindCSS docs on `color` for details:
  - [Background Color](https://tailwindcss.com/docs/background-color)
  - [Text Color](https://tailwindcss.com/docs/text-color)
- `BoxDimension = number | string` - Reference TailwindCSS docs on `sizing` for details:
  - [Height](https://tailwindcss.com/docs/height)
  - [Min Height](https://tailwindcss.com/docs/min-height)
  - [Width](https://tailwindcss.com/docs/width)
  - [Max Width](https://tailwindcss.com/docs/max-width)
- `BoxDisplay = "block" | "inline-block" | "inline" | "flex" | "inline-flex" | string` - Reference [TailwindCSS docs on `display`](https://tailwindcss.com/docs/display) for details.
- `BoxInset = "0" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "auto" | "full" | "x-0" | "x-1/4" | "x-1/3" | "x-1/2" | "x-2/3" | "x-3/4" | "x-auto" | "y-0" | "y-1/4" | "y-1/3" | "y-1/2" | "y-2/3" | "y-3/4"| "y-auto"` - Reference [TailwindCSS docs on `top-right-bottom-left`](https://tailwindcss.com/docs/top-right-bottom-left) for details.
- `BoxPosition = "absolute" | "fixed" | "relative" | "static" | "sticky"` - Reference [TailwindCSS docs on `position`](https://tailwindcss.com/docs/position) for details.
- `BoxSizing = "border" | "content"` - Reference [TailwindCSS docs on `box-sizing`](https://tailwindcss.com/docs/box-sizing) for details.

### Box Props

- `bgColor?: BoxColor` - Short prop for setting [background-color](https://tailwindcss.com/docs/background-color).
- `backgroundColor?: BoxColor` - Long prop for setting [background-color](https://tailwindcss.com/docs/background-color).
- `color?: BoxColor` - Prop for setting [color](https://tailwindcss.com/docs/text-color).
- `display?: BoxDisplay` - Prop for setting [display](https://tailwindcss.com/docs/display).
- `h?: BoxDimension` - Short prop for setting [height](https://tailwindcss.com/docs/height).
- `height?: BoxDimension` - Long prop for setting [height](https://tailwindcss.com/docs/height).
- `inset?: BoxInset` - Prop for setting [top-right-bottom-left](https://tailwindcss.com/docs/top-right-bottom-left).
- `maxW?: BoxDimension` - Short prop for setting [max-width](https://tailwindcss.com/docs/max-width).
- `maxWidth?: BoxDimension` - Long prop for setting [max-width](https://tailwindcss.com/docs/max-width).
- `minH?: BoxDimension` - Short prop for setting [min-height](https://tailwindcss.com/docs/min-height).
- `minHeight?: BoxDimension` - Long prop for setting [min-height](https://tailwindcss.com/docs/min-height).
- `position?: BoxPosition` - Prop for setting [position](https://tailwindcss.com/docs/position).
- `sizing?: BoxSizing` - Prop for setting [box-sizing](https://tailwindcss.com/docs/box-sizing).
- `w?: BoxDimension` - Short prop for setting [width](https://tailwindcss.com/docs/width).
- `width?: BoxDimension` - Long prop for setting [width](https://tailwindcss.com/docs/width).

## Box Dependencies

- `Box` depends on `Element` component. `BoxProps` are an extension of `ElementProps`.
- `Pattern` depends on `Box` component. `PatternProps` are an extension of `BoxProps`.

## Roadmap

- Add additional `BoxDimension` and `BoxColor` prop types to `BoxProps`.
- Add `BoxSpacing` prop types to `BoxProps`. [Reference TailwindCSS docs on `spacing`](https://tailwindcss.com/docs/padding) for details.
  - Props for spacing: `m, mx, my, p, px, py` - Make these pattern based props, meaning the utils will have different responsive space definitions based on sizes: `xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl`.
  - I don't plan on going more lower level than this because you can just use the `mod` or `className` prop to define more customized margins and paddings.
- Add `BoxBorder` prop types to `BoxProps`. [Reference TailwindCSS docs on `borders`](https://tailwindcss.com/docs/border-radius) for details.
