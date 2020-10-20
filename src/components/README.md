# Components

Components are broken up into modules. As the library evolves, so will the organization of these files.

Keep in mind that the order in which the components are exported matters because of style inheritance. Follow these guidelines when ordering your exports:

- Low level components are usually exported first because they're used as building blocks to create more complex components.
- Extensions of existing components should be exported after the component they're extended from so that the inherit component's styles can be overriden properly.
- Component compositions should be exported last since they're usually created using multiple components and will often need to override multiple component styles.

## MDX

- Use this module for all MDX related components.

## UI Components

- These are core UI components meant to be reusable and can be used to create other custom components.
- Can use TailwindCSS and/or scoped CSS modules.
