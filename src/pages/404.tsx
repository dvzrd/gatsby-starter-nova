import React, { FC } from "react";
import { PageProps } from "gatsby";

import { Hero, HeroProps } from "components";
import { DefaultLayout, DefaultLayoutProps } from "layouts";

const Page404: FC<PageProps> = ({ location }) => {
  const layoutProps: DefaultLayoutProps = {
    on: "page-404",
    location,
  };

  const heroProps: HeroProps = {
    caption: {
      heading: "404: Page Not Found",
    },
    vh: "2/3",
  };

  return (
    <DefaultLayout {...layoutProps}>
      <Hero {...heroProps} />
    </DefaultLayout>
  );
};

export default Page404;
