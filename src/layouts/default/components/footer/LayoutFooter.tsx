import React, { FC } from "react";
import classNames from "classnames";

import {
  Box,
  BoxProps,
  Icon,
  Link,
  LinkProps,
  List,
  ListProps,
  Section,
  SectionProps,
  Text,
} from "components";
import { useSiteMetadataQuery } from "graphql";
import { SiteMetadataAuthor, SiteMetadataOrganization } from "types/graphql";
import { GatsbyLocation } from "types/gatsby";

import styles from "./LayoutFooter.module.css";

export type LayoutFooterPattern = "default" | "over" | "under" | "sticky";

export interface LayoutFooterProps extends Omit<SectionProps, "is"> {
  box?: BoxProps;
  isHidden?: boolean;
  is?: LayoutFooterPattern;
  link?: LinkProps;
  location?: GatsbyLocation;
  nav?: ListProps;
  showAuthor?: boolean;
  showOrg?: boolean;
}

export const renderFooterLink = (
  link?: SiteMetadataAuthor | SiteMetadataOrganization
) =>
  link ? (
    <Link className={styles.link} size="inherit" to={link?.url}>
      {link?.name}
    </Link>
  ) : null;

export const LayoutFooter: FC<LayoutFooterProps> = ({
  as = "footer",
  bgColor = "paper",
  box,
  color = "paper",
  children,
  className,
  container,
  is = "default",
  isHidden = false,
  link,
  location,
  nav,
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
        <Box
          {...(box as BoxProps)}
          className={classNames(
            styles.box,
            "order-1 lg:order-none",
            box?.className
          )}
        >
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
      <Box
        {...(box as BoxProps)}
        className={classNames(
          styles.box,
          "items-center lg:items-end",
          box?.className
        )}
      >
        <List
          as="nav"
          {...(nav as ListProps)}
          className={classNames(styles.list, "mt-4", nav?.className)}
        >
          <Link
            className={classNames(styles.link, styles.instagram)}
            is="button"
            button="icon"
            to={`https://www.instagram.com/${socialMedia?.instagram}`}
          >
            <Icon name="instagram" size="sm" />
          </Link>
          <Link
            className={classNames(styles.link, styles.twitter)}
            is="button"
            button="icon"
            to={`https://twitter.com/${socialMedia?.twitter}`}
          >
            <Icon name="twitter" size="sm" />
          </Link>
        </List>
        <List
          as="nav"
          {...(nav as ListProps)}
          className={classNames(
            styles.list,
            "my-3 md:mt-4 lg:mb-0",
            nav?.className
          )}
        >
          <Link
            activeClassName="hidden"
            className={styles.link}
            text="caption"
            to="/about"
          >
            About
          </Link>
          <Link
            activeClassName="hidden"
            className={styles.link}
            text="caption"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            activeClassName="hidden"
            className={styles.link}
            text="caption"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            activeClassName="hidden"
            className={styles.link}
            to="/contact"
            text="caption"
          >
            Contact
          </Link>
          {subscribeURL && (
            <Link className={styles.link} text="caption" to={subscribeURL}>
              Subscribe
            </Link>
          )}
        </List>
      </Box>
    </Section>
  );
};
