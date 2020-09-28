import React, { FC } from "react";
import { PageProps as GatsbyPageProps } from "gatsby";

import { Hero, Section } from "@/components";
import { DefaultLayout } from "@/layouts";

interface PageProps extends GatsbyPageProps {}

const PageIndex: FC<PageProps> = () => (
  <DefaultLayout>
    <Hero>
      <h1 className="text-copy">This is the home page hero title</h1>
    </Hero>
    <Section className="bg-background-paper">
      <p className="text-copy">Page section with paper background</p>
    </Section>
    <Section as="footer" className="bg-background-primary">
      <p className="text-copy-primary">Page footer with primary background</p>
    </Section>
  </DefaultLayout>
);

export default PageIndex;
