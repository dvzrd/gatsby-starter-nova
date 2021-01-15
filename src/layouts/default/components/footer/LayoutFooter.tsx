import React, { FC } from "react";
import classNames from "classnames";

import { Box, Icon, Link, List, Section, SectionProps, Text } from "components";
import { useSiteMetadataQuery } from "graphql";
import { SiteMetadataAuthor, SiteMetadataOrganization } from "types/graphql";
import { GatsbyLocation } from "types/gatsby";

import styles from "./LayoutFooter.module.css";

export type LayoutFooterPattern = "default" | "over" | "under" | "sticky";

export interface LayoutFooterProps extends Omit<SectionProps, "is"> {
  isHidden?: boolean;
  is?: LayoutFooterPattern;
  location?: GatsbyLocation;
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
  is = "default",
  isHidden = false,
  location,
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
      is="navbar"
      {...(rest as SectionProps)}
      container={{
        ...container,
        className: classNames(styles.wrapper, container?.className),
      }}
      className={classNames(styles.footer, is && styles[is], className)}
    >
      {copyright && (
        <Box className={classNames(styles.box, "order-1 lg:order-none")}>
          <Text as="p" is="caption">
            © {copyright.year ? copyright.year : currentYear},
            {copyright.message && ` ${copyright.message}`}
            {showOrg && <> {renderFooterLink(organization)}.</>}
            {copyright.authorMessage && ` ${copyright.authorMessage}`}
            {showAuthor && <> {renderFooterLink(author)}.</>}
          </Text>
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
        </Box>
      )}
      {children}
      <Box className={classNames(styles.box, "items-center lg:items-end")}>
        <List as="nav" className={classNames(styles.list, "mt-4")}>
          <Link
            className={classNames(styles.link, styles.instagram)}
            to={`https://www.instagram.com/${socialMedia?.instagram}`}
            is="button"
            button="icon"
          >
            <Icon name="instagram" size="sm" />
          </Link>
          <Link
            className={classNames(styles.link, styles.twitter)}
            to={`https://twitter.com/${socialMedia?.twitter}`}
            is="button"
            button="icon"
          >
            <Icon name="twitter" size="sm" />
          </Link>
        </List>
        <List
          as="nav"
          className={classNames(styles.list, "my-3 md:mt-4 lg:mb-0")}
        >
          <Link className={styles.link} to="/about" is="button" text="caption">
            About
          </Link>
          <Link className={styles.link} to="/blog" is="button" text="caption">
            Blog
          </Link>
          <Link
            className={styles.link}
            to="/portfolio"
            is="button"
            text="caption"
          >
            Portfolio
          </Link>
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
          <Link
            className={styles.link}
            to="/contact"
            is="button"
            text="caption"
          >
            Contact
          </Link>
        </List>
      </Box>
    </Section>
  );
};
