import React, { FC } from "react";
import { PageProps } from "gatsby";

import { Hero, HeroProps, Section } from "components";
import { DefaultLayout, DefaultLayoutProps } from "layouts";
import { useSiteMetadata } from "graphql";

const PageIndex: FC<PageProps> = () => {
  const { description, title, name } = useSiteMetadata();

  const layoutProps: DefaultLayoutProps = {
    on: "page-home",
    switchClassName: "text-primary-500",
  };

  const heroProps: HeroProps = {
    minH: "screen-2/3",
    caption: {
      heading: description,
    },
  };

  return (
    <DefaultLayout {...layoutProps}>
      <Hero {...heroProps} />
      <Section on="page-home" pattern="content">
        <h4 className="leading-tight mt-8 mb-6">
          Tailwind CSS Utility Classes
        </h4>
        <div className="lg:gap-8 grid grid-cols-1 lg:grid-cols-2">
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            rhoncus massa vel risus commodo, bibendum faucibus ligula commodo.
            Sed sollicitudin nec eros sed condimentum. Suspendisse eget viverra
            velit, ac faucibus velit. Nulla eget semper leo. Curabitur tincidunt
            semper erat, eu finibus elit auctor sed. Sed egestas tempor
            interdum. Etiam eu massa euismod purus dictum faucibus.
          </p>
          <p className="mb-12">
            Sed at felis fermentum, rutrum eros quis, sodales leo. Etiam porta,
            ipsum quis sagittis mollis, massa metus vulputate neque, sit amet
            convallis turpis leo ut nulla. Morbi sed gravida lectus.
            Pellentesque sodales tincidunt diam ut tristique. Fusce venenatis
            ligula at erat ultrices, et mattis neque fringilla. Vivamus ligula
            tortor, porttitor a augue non, elementum facilisis odio.
          </p>
        </div>
      </Section>
      <Section pattern="feature" mod="bg-background-primary text-color-primary">
        <h2 className="leading-tight mt-8 mb-4">{name}</h2>
        <p className="mb-8 text-lg">
          Nulla sit amet suscipit diam. Praesent aliquam metus nec diam
          ultricies tincidunt. Donec congue feugiat tempus. Pellentesque mi
          lacus, fermentum sit amet lectus quis, iaculis volutpat massa.
        </p>
      </Section>
      <Section as="footer" on="page-home" pattern="heel">
        <h3 className="leading-tight mt-12 mb-4">{title}</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus
          massa vel risus commodo, bibendum faucibus ligula commodo. Sed
          sollicitudin nec eros sed condimentum.
        </p>
      </Section>
    </DefaultLayout>
  );
};

export default PageIndex;
