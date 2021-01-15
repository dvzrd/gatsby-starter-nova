import React, { FC } from "react";
import classNames from "classnames";
import { camelCase } from "lodash";

import { Box, BoxProps, Media, MediaProps } from "components";

import styles from "./Section.module.css";
import { SectionMod, SectionPattern, SectionVerticalHeight } from "./types";

export interface SectionProps extends Omit<BoxProps, "media"> {
  container?: BoxProps;
  isContained?: boolean;
  is?: SectionPattern;
  media?: MediaProps;
  mod?: SectionMod;
  vh?: SectionVerticalHeight;
}

export const Section: FC<SectionProps> = ({
  as = "section",
  children,
  className,
  container,
  is = "content",
  isContained,
  media,
  mod,
  vh,
  ...rest
}) => {
  const getModifiers = () => [mod?.split(" ").map((mod) => styles[mod])];

  return (
    <Box
      as={as}
      {...(rest as BoxProps)}
      className={classNames(
        styles.default,
        styles[is],
        vh && styles[`vh${camelCase(vh)}`],
        getModifiers(),
        className
      )}
    >
      {media && (
        <Media
          {...(media as MediaProps)}
          className={classNames(styles.media, media.className)}
        />
      )}
      <Box
        as="figure"
        {...(container as BoxProps)}
        className={classNames(
          "z-10",
          isContained ? undefined : "container",
          container?.className
        )}
      >
        {children}
      </Box>
    </Box>
  );
};
