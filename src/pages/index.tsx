import React, { FC } from "react";
import { PageProps as GatsbyPageProps } from "gatsby";

import { Section } from "components";
import { DefaultLayout } from "layouts";
import { useSiteMetadata } from "graphql";

interface PageProps extends GatsbyPageProps {}

const PageIndex: FC<PageProps> = () => {
  const { defaultDescription } = useSiteMetadata();

  return (
    <DefaultLayout>
      <Section as="header" pattern="hero">
        <h2 className="leading-tight my-8 lg:my-16 text-primary-500">
          {defaultDescription}
        </h2>
      </Section>
      <Section className="bg-background-paper" pattern="content">
        <h4 className="leading-tight mt-8 mb-6 text-copy-paper">
          Content with paper colors
        </h4>
        <p className="mb-6 text-copy-paper">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus
          massa vel risus commodo, bibendum faucibus ligula commodo. Sed
          sollicitudin nec eros sed condimentum. Suspendisse eget viverra velit,
          ac faucibus velit. Nulla eget semper leo. Curabitur tincidunt semper
          erat, eu finibus elit auctor sed. Sed egestas tempor interdum. Etiam
          eu massa euismod purus dictum faucibus.
        </p>
        <p className="mb-8 text-copy-paper">
          Sed at felis fermentum, rutrum eros quis, sodales leo. Etiam porta,
          ipsum quis sagittis mollis, massa metus vulputate neque, sit amet
          convallis turpis leo ut nulla. Morbi sed gravida lectus. Pellentesque
          sodales tincidunt diam ut tristique. Fusce venenatis ligula at erat
          ultrices, et mattis neque fringilla. Vivamus ligula tortor, porttitor
          a augue non, elementum facilisis odio.
        </p>
      </Section>
      <Section as="footer" className="bg-background-primary" pattern="feature">
        <h3 className="leading-tight mt-8 mb-4 text-copy-primary">
          Feature with primary colors
        </h3>
        <p className="mb-8 text-lg text-copy-primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus
          massa vel risus commodo, bibendum faucibus ligula commodo. Sed
          sollicitudin nec eros sed condimentum.
        </p>
      </Section>
    </DefaultLayout>
  );
};

export default PageIndex;
