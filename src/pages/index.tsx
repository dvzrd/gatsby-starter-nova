import React, { FC } from "react";
import { PageProps as GatsbyPageProps } from "gatsby";

import { Hero } from "@/components";
import { DefaultLayout } from "@/layouts";

interface PageProps extends GatsbyPageProps {}

const PageIndex: FC<PageProps> = () => (
  <DefaultLayout>
    <Hero>
      <h1 className="text-copy">This is the home page hero title</h1>
    </Hero>
    <section className="bg-background-paper">
      <p className="text-copy">Page Section</p>
    </section>
    <footer className="bg-background-primary">
      <h2 className="text-copy-primary">Page Footer</h2>
    </footer>
  </DefaultLayout>
);

export default PageIndex;
