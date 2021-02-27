import React, { forwardRef } from "react";
import { Link as GatsbyLink } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import clsx from "clsx";

import {
  Button,
  ButtonPattern,
  ButtonProps,
  Text,
  TextProps,
  TextPattern,
} from "components";

import styles from "./Link.module.css";

export type LinkPattern = "box" | "button" | "icon" | "text" | "wrapper";

export type LinkTarget = "_blank" | "_parent" | "_self" | "_top";

export interface LinkProps<Link extends HTMLElement = HTMLAnchorElement>
  extends Omit<TextProps<Link>, "align" | "is" | "ref" | "text" | "to"> {
  activeClassName?: string;
  button?: ButtonPattern;
  buttonProps?: ButtonProps;
  href?: string;
  is?: LinkPattern | string;
  isDisabled?: boolean;
  target?: LinkTarget | string;
  text?: TextPattern;
  to: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps<HTMLAnchorElement>>(
  (
    {
      as = OutboundLink,
      button = "text",
      buttonProps,
      children,
      className,
      href,
      is = "text",
      isDisabled,
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
            as={isDisabled ? "span" : as}
            is={text}
            href={link}
            target={target}
            {...(rest as TextProps)}
            className={clsx(styles.link, styles[is], className)}
            innerRef={ref as any}
          >
            {is === "button" ? (
              <Button
                as="span"
                is={button}
                {...(buttonProps as ButtonProps)}
                className={buttonProps?.className}
              >
                {children}
              </Button>
            ) : (
              children
            )}
          </Text>
        );
      }

      return (
        <Text
          as={isDisabled ? "span" : GatsbyLink}
          is={text}
          to={link}
          {...(rest as TextProps)}
          className={clsx(styles.link, styles[is], className)}
          innerRef={ref as any}
        >
          {is === "button" ? (
            <Button
              as="span"
              is={button}
              {...(buttonProps as ButtonProps)}
              className={buttonProps?.className}
            >
              {children}
            </Button>
          ) : (
            children
          )}
        </Text>
      );
    }

    return (
      <Text
        as={isDisabled ? "span" : as}
        is={text}
        href={link}
        target={target || "_blank"}
        {...(rest as TextProps)}
        className={clsx(styles.link, styles[is], className)}
        innerRef={ref as any}
      >
        {is === "button" ? (
          <Button
            as="span"
            is={button}
            {...(buttonProps as ButtonProps)}
            className={buttonProps?.className}
          >
            {children}
          </Button>
        ) : (
          children
        )}
      </Text>
    );
  }
);
