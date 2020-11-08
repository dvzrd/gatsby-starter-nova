import React, { forwardRef } from "react";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

import styles from "./Link.module.css";

export type LinkPattern = "button" | "icon" | "text" | "wrapper";

export type LinkTarget = "_blank" | "_parent" | "_self" | "_top";

export interface LinkProps<Link extends HTMLElement = HTMLAnchorElement>
  extends PatternProps<Link> {
  href?: string;
  pattern?: LinkPattern | string;
  target?: LinkTarget | string;
  to: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps<HTMLAnchorElement>>(
  (
    {
      as = OutboundLink,
      children,
      className,
      href,
      is = "link",
      pattern = "text",
      target,
      to,
      ...rest
    },
    ref
  ) => {
    const link: string = href ? href : to;
    const internal: boolean = /^\/(?!\/)/.test(link);
    const file: boolean = /\.[0-9a-z]+$/i.test(link);

    if (internal) {
      if (file) {
        return (
          <Pattern
            as={as}
            is={is}
            href={link}
            target={target}
            {...(rest as PatternProps)}
            className={classNames(styles.link, styles[pattern], className)}
            innerRef={ref as any}
          >
            {children}
          </Pattern>
        );
      }

      return (
        <Pattern
          as={GatsbyLink}
          is={is}
          to={link}
          {...(rest as PatternProps)}
          className={classNames(styles.link, styles[pattern], className)}
          innerRef={ref as any}
        >
          {children}
        </Pattern>
      );
    }

    return (
      <Pattern
        as={as}
        is={is}
        href={link}
        target={target || "_blank"}
        {...(rest as PatternProps)}
        className={classNames(styles.link, styles[pattern], className)}
        innerRef={ref as any}
      >
        {children}
      </Pattern>
    );
  }
);
