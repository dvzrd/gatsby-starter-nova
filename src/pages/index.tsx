import React, { FC } from "react";
import { PageProps as GatsbyPageProps } from "gatsby";

import { DefaultLayout } from "@/layouts";

// TODO:
// - create page level components (header, section, footer, divider, etc)
// - define props for any queried data

interface PageProps extends GatsbyPageProps {}

const PageIndex: FC<PageProps> = () => (
  <DefaultLayout>
    <header>
      <h1 className="text-2xl text-primary-500">Page Header</h1>
    </header>
    <section>
      <p className="text-gray-500">Page Section</p>
    </section>
    <footer>
      <h2 className="text-secondary-500">Page Footer</h2>
    </footer>
  </DefaultLayout>
);

export default PageIndex;
