import React, { FC } from "react";
import { PageProps } from "gatsby";

import { Hero, HeroProps } from "components";
import { DefaultLayout, DefaultLayoutProps } from "layouts";

const Page404: FC<PageProps> = () => {
  const layoutProps: DefaultLayoutProps = {
    on: "page-404",
    switchClassName: "text-primary-500",
  };

  const heroProps: HeroProps = {
    minH: "screen-1/2",
    caption: {
      heading: "404: Page Not Found",
    },
  };

  return (
    <DefaultLayout {...layoutProps}>
      <Hero {...heroProps} />
    </DefaultLayout>
  );
};

export default Page404;
