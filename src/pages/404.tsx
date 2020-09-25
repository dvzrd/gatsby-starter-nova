import React from "react";
import { PageProps } from "gatsby";

import { DefaultLayout } from "@/layouts";

const Page404: React.FC<PageProps> = () => (
  <DefaultLayout>
    <header>
      <h1 className="text-4xl text-gray-900">404: Not Found</h1>
    </header>
  </DefaultLayout>
);

export default Page404;
