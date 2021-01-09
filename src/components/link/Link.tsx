import React, { forwardRef } from "react";
import { Link as GatsbyLink } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import classNames from "classnames";

import { Text, TextProps, TextPattern } from "components";

import styles from "./Link.module.css";

export type LinkPattern = "button" | "icon" | "text" | "wrapper";

export type LinkTarget = "_blank" | "_parent" | "_self" | "_top";

export interface LinkProps<Link extends HTMLElement = HTMLAnchorElement>
  extends Omit<TextProps<Link>, "is" | "text" | "to"> {
  href?: string;
  is?: LinkPattern | string;
  target?: LinkTarget | string;
  text?: TextPattern;
  to: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps<HTMLAnchorElement>>(
  (
    {
      as = OutboundLink,
      children,
      className,
      href,
      is = "text",
      target,
      text,
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
          <Text
            as={as}
            is={text}
            href={link}
            target={target}
            {...(rest as TextProps)}
            className={classNames(styles.link, styles[is], className)}
            innerRef={ref as any}
          >
            {children}
          </Text>
        );
      }

      return (
        <Text
          as={GatsbyLink}
          is={text}
          to={link}
          {...(rest as TextProps)}
          className={classNames(styles.link, styles[is], className)}
          innerRef={ref as any}
        >
          {children}
        </Text>
      );
    }

    return (
      <Text
        as={as}
        is={text}
        href={link}
        target={target || "_blank"}
        {...(rest as TextProps)}
        className={classNames(styles.link, styles[is], className)}
        innerRef={ref as any}
      >
        {children}
      </Text>
    );
  }
);
