# Text

The text component is used to create various types of text patterns.

## API

- pattern:
  - body
  - caption
  - heading
  - hero
  - legend
  - meta
  - subheading
  - subtitle
  - title

## Roadmap

- Add `variant` prop to render additional typography variants that have different style rules.
  - Instead of using utils which is not string, the text variant will be pattern based and allow only text based style rules to be passed.
- Add nesting for directives inside CSS module. Currently nesting `@screen` directives doesn't work - when stylesheet is compiled, it doesn't seem to understand the nested directive. Current workaround is just writing out the media query but that's not scalable because it has hardcoded screen sizes and doesn't account for any updates to screen constants in tailwind config.
