import React, { FC, forwardRef } from "react";
import { Link as GatsbyLink } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import classNames from "classnames";

import { Pattern, PatternProps } from "components";

import styles from "./Link.module.css";

export type LinkPattern = "button" | "icon" | "text" | "wrapper";

export type LinkTarget = "_blank" | "_parent" | "_self" | "_top";

export interface LinkProps extends PatternProps {
  href?: string;
  pattern?: LinkPattern | string;
  target?: LinkTarget | string;
  to?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      as = OutboundLink,
      children,
      className,
      href,
      is = "link",
      pattern = "text",
      target = "_self",
      to,
      ...rest
    },
    ref
  ) => {
    if (href) {
      return (
        <Pattern
          as={as}
          is={is}
          className={classNames(styles.link, styles[pattern], className)}
          href={href}
          innerRef={ref}
          target={target}
          {...rest}
        >
          {children}
        </Pattern>
      );
    } else if (to) {
      return (
        <Pattern
          as={GatsbyLink}
          is={is}
          className={classNames(styles.link, styles[pattern], className)}
          innerRef={ref}
          to={to}
          {...rest}
        >
          {children}
        </Pattern>
      );
    }

    return null;
  }
);
