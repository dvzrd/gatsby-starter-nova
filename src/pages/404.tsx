import React, { FC } from "react";
import { PageProps } from "gatsby";

import { Section } from "components";
import { DefaultLayout } from "layouts";

const Page404: FC<PageProps> = () => (
  <DefaultLayout>
    <Section as="header" patterns={["hero"]}>
      <h1 className="text-copy">404: Not Found</h1>
    </Section>
  </DefaultLayout>
);

export default Page404;
