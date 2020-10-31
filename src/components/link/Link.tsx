import React, { forwardRef } from "react";
import { Link as GatsbyLink } from "gatsby";
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
    const link = href ? href : to;
    const internal = /^\/(?!\/)/.test(link);
    const file = /\.[0-9a-z]+$/i.test(link);

    if (internal) {
      if (file) {
        return (
          <Pattern
            as={as}
            is={is}
            href={link}
            target={target}
            innerRef={ref}
            {...rest}
            className={classNames(styles.link, styles[pattern], className)}
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
          innerRef={ref}
          {...rest}
          className={classNames(styles.link, styles[pattern], className)}
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
        innerRef={ref}
        {...rest}
        className={classNames(styles.link, styles[pattern], className)}
      >
        {children}
      </Pattern>
    );
  }
);
