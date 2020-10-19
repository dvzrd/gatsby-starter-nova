# Box Component

Box component has props for configuring css box model style rules.

## Box API

### Box Types

- `BoxDimension = number | string` - Reference TailwindCSS docs on `sizing` for details:
  - [Height](https://tailwindcss.com/docs/height)
  - [Min Height](https://tailwindcss.com/docs/min-height)
  - [Width](https://tailwindcss.com/docs/width)
  - [Max Width](https://tailwindcss.com/docs/max-width)
- `BoxColor = string` - Reference TailwindCSS docs on `color` for details:
  - [Background Color](https://tailwindcss.com/docs/background-color)
  - [Text Color](https://tailwindcss.com/docs/text-color)

### Box Props

- `bgColor?: BoxColor` - Short prop for setting [background-color](https://tailwindcss.com/docs/background-color).
- `backgroundColor?: BoxColor` - Long prop for setting [background-color](https://tailwindcss.com/docs/background-color).
- `color?: BoxColor` - Prop for setting [color](https://tailwindcss.com/docs/text-color).
- `minH?: BoxDimension` - Short prop for setting [min-height](https://tailwindcss.com/docs/min-height).
- `minHeight?: BoxDimension` - Long prop for setting [min-height](https://tailwindcss.com/docs/min-height).
- `h?: BoxDimension` - Short prop for setting [height](https://tailwindcss.com/docs/height).
- `height?: BoxDimension` - Long prop for setting [height](https://tailwindcss.com/docs/height).
- `maxW?: BoxDimension` - Short prop for setting [max-width](https://tailwindcss.com/docs/max-width).
- `maxWidth?: BoxDimension` - Long prop for setting [max-width](https://tailwindcss.com/docs/max-width).
- `w?: BoxDimension` - Short prop for setting [width](https://tailwindcss.com/docs/width).
- `width?: BoxDimension` - Long prop for setting [with](https://tailwindcss.com/docs/width).

## Box Dependencies

- `Box` depends on `Element` component. `BoxProps` are an extension of `ElementProps`.
- `Pattern` depends on `Box` component. `PatternProps` are an extension of `BoxProps`.

## Roadmap

- Add additional `BoxDimension` and `BoxColor` prop types to `BoxProps`.
- Add `BoxAlignment` prop types to `BoxProps`. [Reference TailwindCSS docs on `box alignment`](https://tailwindcss.com/docs/justify-content) for details.
- Add `BoxSpace` prop types to `BoxProps`. [Reference TailwindCSS docs on `spacing`](https://tailwindcss.com/docs/padding) for details.
- Add `BoxPosition` prop types to `BoxProps`. [Reference TailwindCSS docs on `position`](https://tailwindcss.com/docs/position) for details.
- Add `BoxBorder` prop types to `BoxProps`. [Reference TailwindCSS docs on `borders`](https://tailwindcss.com/docs/border-radius) for details.
- Add Box css module.
