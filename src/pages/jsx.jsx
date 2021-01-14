import React from "react";

import { PageHero } from "components";
import { useTheme } from "contexts";
import { DefaultLayout } from "layouts";

const PageJSX = () => {
  const { theme } = useTheme();

  const layoutProps = {
    on: "page-jsx",
    footer: {
      bgColor: "primary",
      color: "primary",
      className: "py-8 md:py-10 xl:py-12",
    },
    logo: {
      logoName: theme === "dark" ? "white" : "black",
    },
    themeSwitch: {
      className: "text-primary-500",
    },
  };

  const heroProps = {
    caption: {
      heading: "This is a regular JSX page",
      subheading:
        "TypeScript is not required (but you can adjust that in the tsconfig file) when working with this starter. Feel free to use JSX or JS if strict code is not a requirement for you or if you just want to prototype something really quickly.",
    },
    on: "page-jsx",
  };

  return (
    <DefaultLayout {...layoutProps}>
      <PageHero {...heroProps} />
    </DefaultLayout>
  );
};

export default PageJSX;
