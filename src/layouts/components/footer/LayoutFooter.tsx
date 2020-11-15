import React, { FC } from "react";
import classNames from "classnames";

import { Link, Section, SectionProps, Text } from "components";
import { useSiteMetadata } from "graphql";
import { SiteMetadataAuthor, SiteMetadataOrganization } from "types/graphql";

export type LayoutFooterPattern = "over" | "under" | "sticky";

export interface LayoutFooterProps extends SectionProps {
  isHidden?: boolean;
  showAuthor?: boolean;
  showOrg?: boolean;
  variant?: LayoutFooterPattern;
}

export const LayoutFooter: FC<LayoutFooterProps> = ({
  as = "footer",
  children,
  className,
  container,
  is = "footer",
  isHidden = false,
  showAuthor = true,
  showOrg = true,
  pattern = "navbar",
  variant,
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
      pattern={pattern}
      {...rest}
      className={classNames(variant, className)}
    >
      {children}
      {copyright && (
        <Text as="p" pattern="caption">
          © {copyright.year ? copyright.year : currentYear}.
          {copyright.message && ` ${copyright.message}`}
          {showOrg && <>{renderLink(organization)}.</>}
          {copyright.authorMessage && ` ${copyright.authorMessage}`}
          {showAuthor && <>{renderLink(author)}.</>}
        </Text>
      )}
      {footnote && (
        <Text as="p" pattern="caption">
          {footnote}
        </Text>
      )}
      {memorial && (
        <Text as="p" pattern="caption">
          {memorial}
        </Text>
      )}
    </Section>
  );
};
