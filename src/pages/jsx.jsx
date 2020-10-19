import React from "react";

import { Hero, Text } from "components";
import { DefaultLayout } from "layouts";

const PageJSX = () => {
  const layoutProps = {
    on: "page-jsx",
    switchClassName: "text-primary-500",
  };

  const heroProps = {
    minH: "screen-1/2",
    caption: {
      heading: "This is a regular JSX page",
    },
  };

  return (
    <DefaultLayout {...layoutProps}>
      <Hero {...heroProps}>
        <Text as="h2" is="subtitle" className="font-light leading-snug mt-4">
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
