import React, { ElementType, FC } from "react";
import { Link, GatsbyLinkProps } from "gatsby";
import clsx from "clsx";

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
    className={clsx(
      "hero-actions flex flex-col flex-nowrap items-start",
      className
    )}
  >
    {buttons &&
      buttons.map((button) => (
        <Link className={clsx("hero-button", button.className)} to={button.to}>
          {button.label}
        </Link>
      ))}
    {render}
  </Box>
);
