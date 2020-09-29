import React, { FC, HTMLAttributes } from "react";
import Img from "gatsby-image";
import { Link, StaticQuery, graphql } from "gatsby";
import classNames from "classnames";

import { Section, Topbar } from "components";
import { ThemeSwitch, useThemeContext } from "contexts";

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const DefaultLayout: FC<LayoutProps> = ({ children, className }) => {
  const { theme } = useThemeContext();

  return (
    <StaticQuery
      query={graphql`
        query SiteMetadataQuery {
          logo: file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              fluid(maxHeight: 200, maxWidth: 200, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          site {
            siteMetadata {
              copyright
              defaultDescription
              defaultTitle
              memorial
              name
              organization {
                name
                url
              }
              siteUrl
            }
          }
        }
      `}
      render={({
        logo,
        site: {
          siteMetadata: {
            // copyright,
            // defaultDescription,
            // defaultTitle,
            // memorial,
            name,
            // organization,
            // siteUrl,
          },
        },
      }) => (
        <div
          className={classNames(
            "bg-background flex flex-col min-h-screen",
            theme,
            className
          )}
        >
          <Topbar
            navLeft={
              <Link to="/">
                <Img className="w-10" alt={name} {...logo?.childImageSharp} />
              </Link>
            }
            navRight={<ThemeSwitch className="text-primary-500" />}
          />
          <main className="flex-1">{children}</main>
          <Section as="footer" className="z-10">
            <p>Layout footer</p>
          </Section>
        </div>
      )}
    />
  );
};
