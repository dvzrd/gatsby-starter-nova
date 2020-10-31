import React, { forwardRef } from "react";
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
  to: string;
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
      target,
      to,
      ...rest
    },
    ref
  ) => {
    const internal = /^\/(?!\/)/.test(to);
    const file = /\.[0-9a-z]+$/i.test(to);

    if (internal) {
      if (file) {
        return (
          <Pattern
            as={as}
            is={is}
            href={to}
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
          to={to}
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
        href={to}
        target={target}
        innerRef={ref}
        {...rest}
        className={classNames(styles.link, styles[pattern], className)}
      >
        {children}
      </Pattern>
    );
  }
);
