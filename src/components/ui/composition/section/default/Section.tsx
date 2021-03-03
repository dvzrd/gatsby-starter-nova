import React, { FC } from "react";
import clsx from "clsx";
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
  isContained = true,
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
      className={clsx(
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
          className={clsx(styles.media, media.className)}
        />
      )}
      <Box
        as="figure"
        {...(container as BoxProps)}
        className={clsx(
          "z-10",
          isContained ? "container" : "flex-1 p-0",
          container?.className
        )}
      >
        {children}
      </Box>
    </Box>
  );
};
