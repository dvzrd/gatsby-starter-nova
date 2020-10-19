# Pattern Component

Use Pattern to create primitive components that have various design pattern types.

## API

The importance heirarchy determines which styles will take priority - this will allow for greater variety of pattern types to be used together to create even more custom patterns.

- is - type of pattern [less important]
- of - type of utility patterns [important]
- on - type of parent pattern [more important]
- utils - optional utils prop for passing tailwind css and custom css classes (alt to using className)

## Roadmap

- Define various pattern types and map to Pattern props (still figuring these out as I build out more components).
  - is:
    - action
    - container
    - content
    - wrapper
  - of:
    - heel
    - hero
    - layout
    - section
    - topbar
  - on:
    - component
    - container
    - context
    - layout
    - page
    - template
- Create styles heirarchy using is, of, on props.
