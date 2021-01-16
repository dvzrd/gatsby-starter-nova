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
import { renderFooterLink } from "layouts";
import { useSiteMetadataQuery } from "graphql";
import { GatsbyLocation } from "types/gatsby";

import styles from "./FormFooter.module.css";

export interface FormFooterProps extends SectionProps {
  box?: BoxProps;
  isHidden?: boolean;
  link?: LinkProps;
  location?: GatsbyLocation;
  nav?: ListProps;
  showAuthor?: boolean;
  showOrg?: boolean;
}

export const FormFooter: FC<FormFooterProps> = ({
  as = "footer",
  box,
  children,
  className,
  container,
  is = "navbar",
  isHidden = false,
  link,
  location,
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
      {...(rest as SectionProps)}
      container={{
        ...container,
        className: classNames(styles.wrapper, container?.className),
      }}
      className={classNames(styles.footer, className)}
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
          {subscribeURL && (
            <Link className={styles.link} to={subscribeURL} text="caption">
              Subscribe
            </Link>
          )}
        </List>
      </Box>
    </Section>
  );
};
