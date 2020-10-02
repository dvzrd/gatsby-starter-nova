import React, { FC } from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import classNames from "classnames";

import { Section, SectionProps } from "components";
import { useSiteMetadata } from "graphql";
import { SiteMetadataAuthor, SiteMetadataOrganization } from "types/graphql";

export interface FooterProps extends SectionProps {
  isHidden?: boolean;
  showAuthor?: boolean;
  showOrg?: boolean;
}

export const footerDefaultProps: FooterProps = {
  as: "footer",
  className: "text-copy z-10",
};

export const Footer: FC<FooterProps> = ({
  as,
  children,
  className,
  container,
  isHidden = false,
  showAuthor = true,
  showOrg = true,
}) => {
  const { author, copyright, footnote, organization } = useSiteMetadata();
  const currentYear = new Date().getFullYear();

  if (isHidden) return null;

  const renderLink = (link?: SiteMetadataAuthor | SiteMetadataOrganization) =>
    link ? (
      <OutboundLink href={link?.url} target="_blank">
        {link?.name}
      </OutboundLink>
    ) : null;

  return (
    <Section
      as={as || footerDefaultProps.as}
      className={classNames(footerDefaultProps.className, className)}
      container={container}
    >
      {children}
      {copyright && (
        <p className="text-sm">
          © {copyright.year ? copyright.year : currentYear}.
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
