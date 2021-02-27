import React, { FC } from "react";
import { PageProps } from "gatsby";

import { Hero, HeroProps, Link, Section, SectionProps, Text } from "components";
import { DefaultLayout, DefaultLayoutProps } from "layouts";

const PageTSX: FC<PageProps> = ({ location }) => {
  const layoutProps: DefaultLayoutProps = {
    on: "page-tsx",
    location,
  };

  const heroProps: HeroProps = {
    caption: {
      heading: "TSX Page",
    },
    vh: "2/3",
  };

  const sectionProps: SectionProps = {
    mod: "transparent",
  };

  return (
    <DefaultLayout {...layoutProps}>
      <Hero {...heroProps} />
      <Section {...sectionProps}>
        <Text as="h1" is="title">
          This is a typical page written in with JSX using TypeScript.
        </Text>
        <Text as="h2" is="subtitle" className="my-4">
          This is why they called it TSX, after JSX which is the language most
          commonly used to write React components.
        </Text>
        <Link
          to="/"
          is="button"
          button="default"
          buttonProps={{ color: "primary" }}
        >
          Take me home!
        </Link>
      </Section>
    </DefaultLayout>
  );
};

export default PageTSX;
