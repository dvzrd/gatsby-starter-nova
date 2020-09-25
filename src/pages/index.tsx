import React from "react";
import { PageProps as GatsbyPageProps } from "gatsby";

import { DefaultLayout } from "@/layouts";

// TODO:
// - create page level components (header, section, footer, divider, etc)
// - define props for any queried data

export interface PageProps extends GatsbyPageProps {}

const PageIndex: React.FC<PageProps> = () => (
  <DefaultLayout>
    <header>
      <h1 className="text-2xl text-gray-700">Page Header</h1>
    </header>
    <section>
      <p className="text-base text-gray-500">Page Section</p>
    </section>
    <footer>
      <h2 className="text-xl text-gray-600">Page Footer</h2>
    </footer>
  </DefaultLayout>
);

export default PageIndex;
