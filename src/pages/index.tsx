import React, { FC } from "react";
import { PageProps as GatsbyPageProps } from "gatsby";

import { Section } from "components";
import { DefaultLayout } from "layouts";
import { useSiteMetadata } from "graphql";

interface PageProps extends GatsbyPageProps {}

const PageIndex: FC<PageProps> = () => {
  const { description, title, name } = useSiteMetadata();

  return (
    <DefaultLayout>
      <Section as="header" pattern="hero">
        <h2 className="leading-tight text-copy">{description}</h2>
      </Section>
      <Section className="text-copy" pattern="content">
        <h4 className="leading-tight mt-8 mb-6">
          Tailwind CSS Utility Classes
        </h4>
        <div className="lg:gap-6 grid grid-cols-1 lg:grid-cols-2">
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
      <Section
        className="bg-background-primary text-copy-primary"
        pattern="feature"
      >
        <h2 className="leading-tight mt-8 mb-4">{name}</h2>
        <p className="mb-8 text-lg">
          Nulla sit amet suscipit diam. Praesent aliquam metus nec diam
          ultricies tincidunt. Donec congue feugiat tempus. Pellentesque mi
          lacus, fermentum sit amet lectus quis, iaculis volutpat massa.
        </p>
      </Section>
      <Section as="footer" className="text-copy">
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
