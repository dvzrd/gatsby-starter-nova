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
import { LogoColor } from "containers";
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
    slug: string;
  };
}

const DefaultTemplate: FC<DefaultTemplateProps> = ({
  children,
  pageContext: {
    frontmatter: { description, hero, layout, main, mdx, seo, title },
  },
}) => {
  const { theme } = useTheme();

  const setLogoColor = (dark: LogoColor, light: LogoColor) =>
    theme === "theme-dark" ? dark : light;

  const seoProps: GatsbySeoProps = {
    description,
    title,
    ...seo,
  };

  const layoutProps: DefaultLayoutProps = {
    header: {
      bgColor: "primary",
      color: "primary",
    },
    ...layout,
    logoColor: setLogoColor(
      layout?.logoDark || "black",
      layout?.logoLight || "white"
    ),
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
    pattern: "content",
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
