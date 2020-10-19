import React, { FC } from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import { Section, SectionProps, Text } from "components";
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
  container,
  is = "section",
  isHidden = false,
  showAuthor = true,
  showOrg = true,
  pattern = "navbar",
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
      <OutboundLink className="underline" href={link?.url} target="_blank">
        {link?.name}
      </OutboundLink>
    ) : null;

  return (
    <Section as={as} is={is} {...rest}>
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
