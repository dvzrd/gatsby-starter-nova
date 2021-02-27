import React, { FC } from "react";
import clsx from "clsx";
import { CgCopyright } from "react-icons/cg";
import { GiLoveLetter, GiMeditation } from "react-icons/gi";
import { RiInstagramFill, RiTwitterFill } from "react-icons/ri";

import {
  Box,
  BoxProps,
  Link,
  LinkProps,
  List,
  ListProps,
  Section,
  SectionProps,
  Text,
} from "components";
import { useSiteMetadataQuery } from "graphql";
import {
  GatsbyLocation,
  SiteMetadataAuthor,
  SiteMetadataOrganization,
} from "types";

import styles from "./LayoutFooter.module.css";

export type LayoutFooterPattern = "default" | "over" | "under" | "sticky";

export interface LayoutFooterProps extends Omit<SectionProps, "is"> {
  activeClassName?: string;
  box?: BoxProps;
  isHidden?: boolean;
  is?: LayoutFooterPattern;
  link?: LinkProps;
  location?: GatsbyLocation;
  nav?: ListProps;
  showAuthor?: boolean;
  showFootnote?: boolean;
  showMemorial?: boolean;
  showOrg?: boolean;
}

export const renderFooterLink = (
  link?: SiteMetadataAuthor | SiteMetadataOrganization
) =>
  link ? (
    <Link
      className={"no-underline hover:underline"}
      size="inherit"
      to={link?.url}
    >
      {link?.name}
    </Link>
  ) : null;

export const LayoutFooter: FC<LayoutFooterProps> = ({
  activeClassName,
  as = "footer",
  box,
  children,
  className,
  container,
  is = "default",
  isHidden = false,
  link,
  location,
  nav,
  showAuthor = false,
  showFootnote = false,
  showMemorial = true,
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
      is="navbar"
      {...(rest as SectionProps)}
      container={{
        ...container,
        className: clsx(styles.wrapper, container?.className),
      }}
      className={clsx(styles.footer, is && styles[is], className)}
    >
      {copyright && (
        <Box
          {...(box as BoxProps)}
          className={clsx(styles.box, "order-1 md:order-none", box?.className)}
        >
          <Text as="p" is="caption" className={styles.caption}>
            <CgCopyright className={styles.icon} />{" "}
            {copyright.year ? copyright.year : currentYear},
            {copyright.message && ` ${copyright.message}`}
            {showOrg && <> {renderFooterLink(organization)}.</>}
            {showAuthor &&
              copyright.authorMessage &&
              ` ${copyright.authorMessage}`}
            {showAuthor && <> {renderFooterLink(author)}.</>}
          </Text>
          {showFootnote && footnote && (
            <Text as="p" is="caption" className={styles.caption}>
              {footnote}
            </Text>
          )}
          {showMemorial && memorial && (
            <Text as="p" is="caption" className={styles.caption}>
              <GiMeditation className={styles.icon} /> {memorial}
            </Text>
          )}
        </Box>
      )}
      {children}
      <Box
        {...(box as BoxProps)}
        className={clsx(
          styles.box,
          "items-center md:items-end",
          box?.className
        )}
      >
        <List
          as="nav"
          {...(nav as ListProps)}
          className={clsx(styles.nav, nav?.className)}
        >
          <Link
            className={clsx(styles.link, styles.instagram)}
            is="button"
            isDisabled
            button="icon"
            to={`https://www.instagram.com/${socialMedia?.instagram}`}
          >
            <RiInstagramFill />
          </Link>
          <Link
            className={clsx(styles.link, styles.twitter)}
            is="button"
            isDisabled
            button="icon"
            to={`https://twitter.com/${socialMedia?.twitter}`}
          >
            <RiTwitterFill />
          </Link>
          {subscribeURL && (
            <Link
              className={clsx(styles.link, styles.mailchimp)}
              is="button"
              button="icon"
              to={subscribeURL}
            >
              <GiLoveLetter />
            </Link>
          )}
        </List>
        <List
          as="nav"
          {...(nav as ListProps)}
          className={clsx(styles.nav, nav?.className)}
        >
          <Link
            activeClassName={clsx(styles.active, activeClassName)}
            className={styles.link}
            text="caption"
            to="/about"
          >
            About
          </Link>
          <Link
            activeClassName={clsx(styles.active, activeClassName)}
            className={styles.link}
            text="caption"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            activeClassName={clsx(styles.active, activeClassName)}
            className={styles.link}
            text="caption"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            activeClassName={activeClassName}
            className={styles.link}
            to="/contact"
            text="caption"
          >
            Contact
          </Link>
        </List>
      </Box>
    </Section>
  );
};
