import React, { FC } from "react";
import classNames from "classnames";

import { Icon, Link, List, Box, Section, SectionProps, Text } from "components";
import { renderFooterLink } from "layouts";
import { useSiteMetadataQuery } from "graphql";

import styles from "./FormFooter.module.css";

export interface FormFooterProps extends SectionProps {
  isHidden?: boolean;
  showAuthor?: boolean;
  showOrg?: boolean;
}

export const FormFooter: FC<FormFooterProps> = ({
  as = "footer",
  children,
  className,
  is = "navbar",
  isHidden = false,
  showAuthor = true,
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
      className={classNames(styles.footer, className)}
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
        </Box>
      )}
      {children}
      <Box className="flex flex-col flex-nowrap flex-full md:flex-1 items-center md:items-end">
        <List
          as="nav"
          className="flex flex-row flex-wrap space-x-4 md:space-x-5 xl:md-space-x-6 mt-4"
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
          className="space-x-4 md:space-x-5 xl:space-x-6 my-3 md:mt-4 md:mb-0"
        >
          <Link className={styles.link} to="/about" is="button" text="caption">
            About
          </Link>
          <Link
            className={styles.link}
            to="/portfolio"
            is="button"
            text="caption"
          >
            Portfolio
          </Link>
          <Link className={styles.link} to="/blog" is="button" text="caption">
            Blog
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
        </List>
      </Box>
    </Section>
  );
};
