import React, { FC } from "react";
import classNames from "classnames";

import { Link, Section, SectionProps, Text } from "components";
import { useSiteMetadata } from "graphql";
import { SiteMetadataAuthor, SiteMetadataOrganization } from "types/graphql";

export type LayoutFooterPattern = "over" | "under" | "sticky";

export interface LayoutFooterProps extends SectionProps {
  isHidden?: boolean;
  mod?: LayoutFooterPattern;
  showAuthor?: boolean;
  showOrg?: boolean;
}

export const LayoutFooter: FC<LayoutFooterProps> = ({
  as = "footer",
  children,
  className,
  container,
  is = "navbar",
  isHidden = false,
  mod,
  showAuthor = true,
  showOrg = true,
  ...rest
}) => {
  const {
    author,
    copyright,
    footnote,
    memorial,
    organization,
  } = useSiteMetadata();
  const currentYear = new Date().getFullYear();

  if (isHidden) return null;

  const renderLink = (link?: SiteMetadataAuthor | SiteMetadataOrganization) =>
    link ? (
      <Link size="inherit" to={link?.url}>
        {link?.name}
      </Link>
    ) : null;

  return (
    <Section
      as={as}
      is={is}
      {...(rest as SectionProps)}
      className={classNames(mod, className)}
    >
      {children}
      {copyright && (
        <Text as="p" is="caption">
          © {copyright.year ? copyright.year : currentYear}.
          {copyright.message && ` ${copyright.message}`}
          {showOrg && <>{renderLink(organization)}.</>}
          {copyright.authorMessage && ` ${copyright.authorMessage}`}
          {showAuthor && <>{renderLink(author)}.</>}
        </Text>
      )}
      {footnote && (
        <Text as="p" is="caption">
          {footnote}
        </Text>
      )}
      {memorial && (
        <Text as="p" is="caption">
          {memorial}
        </Text>
      )}
    </Section>
  );
};
