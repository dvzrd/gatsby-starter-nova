import React, { FC } from "react";
import classNames from "classnames";

import { Box, Icon, Link, List, Section, SectionProps, Text } from "components";
import { useSiteMetadataQuery } from "graphql";
import { SiteMetadataAuthor, SiteMetadataOrganization } from "types/graphql";

import styles from "./LayoutFooter.module.css";

export type LayoutFooterModifier = "over" | "under" | "sticky";

export interface LayoutFooterProps extends SectionProps {
  isHidden?: boolean;
  mod?: LayoutFooterModifier;
  showAuthor?: boolean;
  showOrg?: boolean;
}

export const renderFooterLink = (
  link?: SiteMetadataAuthor | SiteMetadataOrganization
) =>
  link ? (
    <Link size="inherit" to={link?.url}>
      {link?.name}
    </Link>
  ) : null;

export const LayoutFooter: FC<LayoutFooterProps> = ({
  as = "footer",
  bgColor = "paper",
  color = "paper",
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
    organization,
    socialMedia,
    subscribeURL,
  } = useSiteMetadataQuery();
  const currentYear = new Date().getFullYear();

  if (isHidden) return null;

  return (
    <Section
      as={as}
      bgColor={bgColor}
      color={color}
      is={is}
      {...(rest as SectionProps)}
      className={classNames(styles.footer, mod && styles[mod], className)}
    >
      {copyright && (
        <Box className="flex flex-col flex-nowrap flex-full md:flex-1 justify-end order-1 md:order-none">
          <Text as="p" is="caption">
            © {copyright.year ? copyright.year : currentYear},
            {copyright.message && ` ${copyright.message}`}
            {showOrg && <> {renderFooterLink(organization)}.</>}
            {copyright.authorMessage && ` ${copyright.authorMessage}`}
            {showAuthor && <> {renderFooterLink(author)}.</>}
          </Text>
          <Text as="p" is="caption">
            See our{" "}
            <Link size="inherit" to="/disclaimer">
              legal disclaimer
            </Link>{" "}
            for copyright details.
          </Text>
          {footnote && (
            <Text as="p" is="caption">
              {footnote}
            </Text>
          )}
        </Box>
      )}
      {children}
      <Box className="lex flex-col flex-nowrap flex-full md:flex-1 items-center md:items-end">
        <List
          as="nav"
          className="flex flex-row flex-wrap space-x-4 md:space-x-5 xl:md-space-x-6 mt-4"
        >
          <Link
            className={classNames(styles.link, styles.facebook)}
            to={`https://www.facebook.com/${socialMedia?.facebook}`}
            is="button"
            button="icon"
          >
            <Icon name="facebook" size="sm" />
          </Link>
          <Link
            className={classNames(styles.link, styles.instagram)}
            to={`https://www.instagram.com/${socialMedia?.instagram}`}
            is="button"
            button="icon"
          >
            <Icon name="instagram" size="sm" />
          </Link>
          <Link
            className={classNames(styles.link, styles.linkedin)}
            to={`https://www.linkedin.com/company/${socialMedia?.linkedin}`}
            is="button"
            button="icon"
          >
            <Icon name="linkedin" size="sm" />
          </Link>
          <Link
            className={classNames(styles.link, styles.yelp)}
            to={`https://www.yelp.com/biz/${socialMedia?.yelp}`}
            is="button"
            button="icon"
          >
            <Icon name="yelp" size="sm" />
          </Link>
        </List>
        <List
          as="nav"
          className="flex flex-row flex-wrap space-x-4 md:space-x-5 xl:space-x-6 my-3 md:mt-4 md:mb-0"
        >
          {subscribeURL && (
            <Link
              className={styles.link}
              to={subscribeURL}
              is="button"
              text="caption"
            >
              Subscribe
            </Link>
          )}
          <Link className={styles.link} to="/links" is="button" text="caption">
            Links
          </Link>
          <Link
            className={styles.link}
            to="/about#jobs"
            is="button"
            text="caption"
          >
            Work with us
          </Link>
          <Link
            className={styles.link}
            to="/contact"
            is="button"
            text="caption"
          >
            Contact us
          </Link>
        </List>
      </Box>
    </Section>
  );
};
