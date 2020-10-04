# Components

Components are broken up into modules. As the library evolves, so will the organization of these files.

The order in which the components are exported matters because of style inheritance, the order should be based on the types:

1. primitive
2. typography
3. composition

## MDX

- Use this module for all MDX related components.

## UI Components

- These are core UI components meant to be reusable and can be used to create other custom components.
- Can use TailwindCSS and/or scoped CSS modules.
