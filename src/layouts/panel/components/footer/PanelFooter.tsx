import React, { FC } from "react";
import clsx from "clsx";
import { CgCopyright } from "react-icons/cg";
import { GiLoveLetter } from "react-icons/gi";
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
import { renderFooterLink } from "layouts";
import { useSiteMetadataQuery } from "graphql";
import { GatsbyLocation } from "types";

import styles from "../../../default/components/footer/LayoutFooter.module.css";

export interface PanelFooterProps extends SectionProps {
  box?: BoxProps;
  isHidden?: boolean;
  link?: LinkProps;
  location?: GatsbyLocation;
  nav?: ListProps;
  showAuthor?: boolean;
  showOrg?: boolean;
}

export const PanelFooter: FC<PanelFooterProps> = ({
  as = "footer",
  box,
  children,
  className,
  container,
  is = "navbar",
  isHidden = false,
  link,
  location,
  mod = "transparent",
  nav,
  showAuthor = false,
  showOrg = true,
  ...rest
}) => {
  const {
    author,
    copyright,
    organization,
    socialMedia,
    subscribeURL,
  } = useSiteMetadataQuery();
  const currentYear = new Date().getFullYear();

  if (isHidden) return null;

  return (
    <Section
      as={as}
      is={is}
      mod={mod}
      {...(rest as SectionProps)}
      container={{
        ...container,
        className: clsx(styles.wrapper, container?.className),
      }}
      className={clsx(styles.footer, className)}
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
            to={`https://www.instagram.com/${socialMedia?.instagram}`}
            is="button"
            button="icon"
          >
            <RiInstagramFill />
          </Link>
          <Link
            className={clsx(styles.link, styles.twitter)}
            to={`https://twitter.com/${socialMedia?.twitter}`}
            is="button"
            button="icon"
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
            activeClassName="hidden"
            className={styles.link}
            to="/about"
            text="caption"
          >
            About
          </Link>
          <Link
            activeClassName="hidden"
            className={styles.link}
            to="/portfolio"
            text="caption"
          >
            Portfolio
          </Link>
          <Link
            activeClassName="hidden"
            className={styles.link}
            to="/blog"
            text="caption"
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
        </List>
      </Box>
    </Section>
  );
};
