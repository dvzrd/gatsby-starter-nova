import React, { FC } from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import classNames from "classnames";

import { Section, SectionProps } from "components";
import { useSiteMetadata } from "graphql";
import { SiteMetadataAuthor, SiteMetadataOrganization } from "types/graphql";

import styles from "./Footer.module.css";

export interface FooterProps extends SectionProps {
  isHidden?: boolean;
  showAuthor?: boolean;
  showOrg?: boolean;
}

export const Footer: FC<FooterProps> = ({
  as = "footer",
  children,
  className,
  containerClassName,
  isHidden = false,
  showAuthor = true,
  showOrg = true,
}) => {
  const { author, copyright, footnote, organization } = useSiteMetadata();

  if (isHidden) return null;

  const renderLink = (link?: SiteMetadataAuthor | SiteMetadataOrganization) =>
    link ? (
      <OutboundLink href={link?.url} target="_blank">
        {link?.name}
      </OutboundLink>
    ) : null;

  return (
    <Section
      as={as}
      className={classNames(styles.footer, className)}
      containerClassName={containerClassName}
    >
      {children}
      {copyright && (
        <p className="text-sm">
          © {copyright.year! ? copyright.year : `${new Date()}`}.
          {copyright.message && ` ${copyright.message}`}
          {showOrg && <>{renderLink(organization)}.</>}
          {copyright.authorMessage && ` ${copyright.authorMessage}`}
          {showAuthor && <>{renderLink(author)}.</>}
        </p>
      )}
      {footnote && <p className="text-sm">{footnote}</p>}
    </Section>
  );
};
