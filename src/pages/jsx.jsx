import React from "react";

import { Hero, Text } from "components";
import { useTheme } from "contexts";
import { DefaultLayout } from "layouts";

const PageJSX = () => {
  const { theme } = useTheme();

  const layoutProps = {
    on: "page-jsx",
    footer: {
      bgColor: "primary",
      color: "primary",
      mod: "py-8 md:py-10 xl:py-12",
    },
    logo: {
      logoName: theme === "theme-dark" ? "white" : "black",
    },
    themeSwitch: {
      mod: "text-primary-500",
    },
  };

  const heroProps = {
    caption: {
      heading: "This is a regular JSX page",
    },
    minH: "screen-1/2",
  };

  return (
    <DefaultLayout {...layoutProps}>
      <Hero {...heroProps}>
        <Text
          as="h2"
          pattern="subtitle"
          className="font-light leading-snug mt-4"
        >
          TypeScript is not required (but you can adjust that in the tsconfig
          file) when working with this starter. Feel free to use JSX or JS if
          strict code is not a requirement for you or if you just want to
          prototype something really quickly.
        </Text>
      </Hero>
    </DefaultLayout>
  );
};

export default PageJSX;
