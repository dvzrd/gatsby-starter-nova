import React, { FC } from "react";
import { PageProps } from "gatsby";

import { Hero } from "components";
import { DefaultLayout } from "layouts";

const Page404: FC<PageProps> = () => (
  <DefaultLayout>
    <Hero>
      <h1 className="text-copy">404: Not Found</h1>
    </Hero>
  </DefaultLayout>
);

export default Page404;
