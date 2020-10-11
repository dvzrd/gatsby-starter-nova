import React, { FC } from "react";
import { GatsbySeoProps } from "gatsby-plugin-next-seo";
import { PageProps } from "gatsby";

import {
  Hero,
  HeroProps,
  MDX,
  MDXProps,
  Section,
  SectionProps,
} from "components";
import { DefaultLayout, DefaultLayoutProps } from "layouts";
import { useTheme } from "contexts";

export interface DefaultTemplateProps extends PageProps {
  pageContext: {
    frontmatter: {
      container?: SectionProps;
      description: string;
      hero?: HeroProps;
      layout?: DefaultLayoutProps;
      main?: SectionProps;
      mdx?: MDXProps;
      seo?: GatsbySeoProps;
      title: string;
    };
  };
}

const DefaultTemplate: FC<DefaultTemplateProps> = ({
  children,
  pageContext: {
    frontmatter: { description, hero, layout, main, mdx, seo, title },
  },
}) => {
  const { theme } = useTheme();

  const seoProps: GatsbySeoProps = {
    description,
    title,
    ...seo,
  };

  const layoutProps: DefaultLayoutProps = {
    on: "template-default",
    header: {
      bgColor: "primary",
      color: "primary",
    },
    logoColor: theme === "theme-dark" ? "black" : "white",
    ...layout,
  };

  const heroProps: HeroProps = {
    caption: {
      heading: title,
    },
    bgColor: "primary",
    color: "primary",
    minH: "screen-1/2",
    ...hero,
  };

  const mainProps: SectionProps = {
    is: "content",
    ...main,
  };

  return (
    <DefaultLayout seo={seoProps} {...layoutProps}>
      <Hero {...heroProps} />
      <Section {...mainProps}>
        <MDX {...mdx}>{children}</MDX>
      </Section>
    </DefaultLayout>
  );
};

export default DefaultTemplate;
