import React, { ElementType, FC } from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import classNames from "classnames";

import { ElementProps, Box, BoxProps } from "components";

export interface HeroButton extends GatsbyLinkProps<ElementProps> {
  label?: string;
}

export interface HeroActionsProps extends BoxProps {
  render?: ElementType;
  buttons?: HeroButton[];
}

export const HeroActions: FC<HeroActionsProps> = ({
  render,
  buttons,
  className,
  ...rest
}) => (
  <Box
    {...(rest as BoxProps)}
    className={classNames("hero-actions", className)}
  >
    {buttons &&
      buttons.map((button) => (
        <Link
          className={classNames("hero-button", button.className)}
          to={button.to}
        >
          {button.label}
        </Link>
      ))}
    {render}
  </Box>
);
