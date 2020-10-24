# Pattern Component

Use Pattern to create primitive components that have various design pattern types.

## API

The importance heirarchy determines which styles will take priority - this will allow for greater variety of pattern types to be used together to create even more custom patterns.

```md
- is - a type of pattern used to identify the primary purpose of a component using well known design patterns or well documented namespace.
  - box
  - container
  - divider
  - main
  - nav
  - section
  - wrapper
- of - a type of utility pattern used to add utility styles to any component extension of the pattern component.
  - compact
  - fluid
  - full
  - row
- on - a type of parent pattern used to override styles for specific pages, containers, compositions, layouts, or templates.
- mod - optional modifer prop for passing tailwind css and custom css classes. A shorter alternative to using className, which className should still override.
```

Thinking about patterns, it helps to name them in this order because it's easier to understand it. For example, here's a hero pattern:

```tsx
<Pattern
  as="header"
  is="section"
  of="compact full row"
  on="home-page"
  mod="background-primary-500 text-color-white"
  className="home-hero"
>
  <h1 className="home-hero__heading">Home Page Hero Pattern</h1>
  <h2 className="home-hero__subheading">This is a subheading.</h2>
</Pattern>
```

Which could be reads as - this pattern is a header section of a compact full row, on the home page, modified with a primary background of 500 and a text color of white, called by the name of home hero.

## Roadmap

- Create CSS module
- Move 'contained' util to section component css modile.
- Create utils for getPattern and getUtils (can be reused for other components).
- Define various pattern types and map to Pattern props (more patterns will be added as more components are created).
- Write tests for various patterns by making use of data-pattern attributes.
- Write stories for various patterns with react-storybook.
