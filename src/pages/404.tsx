import React from "react";
import { PageProps } from "gatsby";

import { Layout } from "@/layouts";

const Page404: React.FC<PageProps> = () => (
  <Layout>
    <header>
      <h1 className="text-4xl text-gray-900">404: Not Found</h1>
    </header>
  </Layout>
);

export default Page404;
