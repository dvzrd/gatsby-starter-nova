import React, { FC } from "react";
import { PageProps as GatsbyPageProps } from "gatsby";

import { Hero, Section } from "components";
import { DefaultLayout } from "layouts";

interface PageProps extends GatsbyPageProps {}

const PageIndex: FC<PageProps> = () => (
  <DefaultLayout>
    <Hero>
      <h1>Build and deploy your site more quickly and easily!</h1>
    </Hero>
    <Section className="bg-background-paper">
      <p className="text-copy-paper">
        Page section with paper background and copy colors.
      </p>
    </Section>
    <Section as="footer" className="bg-background-primary">
      <p className="text-copy-primary">
        Page footer with primary background and copy colors.
      </p>
    </Section>
  </DefaultLayout>
);

export default PageIndex;
