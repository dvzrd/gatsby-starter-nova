import React, { FC } from "react";
import Img from "gatsby-image";
import { Link, StaticQuery, graphql } from "gatsby";
import classNames from "classnames";

import { Section, Topbar } from "components";
import { ThemeSwitch, useThemeContext } from "contexts";

import { DefaultLayoutProps, StaticQueryProps } from "../types";

export const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  className,
}) => {
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
            ...SiteMetadataFragment
          }
        }
      `}
      render={(data: StaticQueryProps) => {
        const {
          logo,
          site: {
            siteMetadata: {
              copyright,
              // defaultDescription,
              // defaultTitle,
              // memorial,
              name,
              // organization,
              // siteUrl,
              // socialMedia,
            },
          },
        } = data;

        return (
          <div
            className={classNames(
              "bg-background flex flex-col min-h-screen",
              theme,
              className
            )}
          >
            <Topbar
              navLeft={
                <>
                  {logo?.childImageSharp && (
                    <Link to="/">
                      <Img
                        className="w-10"
                        alt={name}
                        {...logo.childImageSharp}
                      />
                    </Link>
                  )}
                </>
              }
              navRight={<ThemeSwitch className="text-primary-500" />}
            />
            <main className="flex-1">{children}</main>
            <Section as="footer" className="z-10">
              <p>{copyright}</p>
            </Section>
          </div>
        );
      }}
    />
  );
};
