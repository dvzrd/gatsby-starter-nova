import React from "react";
import { PageProps as GatsbyPageProps } from "gatsby";

import { Layout } from "@/layouts";

// define data props
interface PageProps {}

const PageIndex: React.FC<GatsbyPageProps & PageProps> = () => (
  <Layout>
    <header>
      <h1 className="text-2xl text-gray-700">Page Header</h1>
    </header>
    <section>
      <p className="text-base text-gray-500">Page Section</p>
    </section>
    <footer>
      <h2 className="text-xl text-gray-600">Page Footer</h2>
    </footer>
  </Layout>
);

export default PageIndex;
