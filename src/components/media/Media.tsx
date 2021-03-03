import React, { FC } from "react";
import Img from "gatsby-image";
import clsx from "clsx";
import { animated, config, useSpring } from "react-spring";
import { camelCase } from "lodash";

import { Box, BoxProps } from "components";
import { GatsbyImage, Spring } from "types";

import styles from "./Media.module.css";

export type MediaPattern = "image" | "pattern" | "video";

export type MediaModifier =
  | "background"
  | "blurry"
  | "gradient"
  | "graph"
  | string;

export interface MediaImageProps extends GatsbyImage {
  className?: string;
}

// TODO:
// - remove gatsby-image and react-spring dependencies to keep component pure.
// - create another media component outside of ui dir by extending from this

export interface MediaProps<Media extends HTMLElement = HTMLDivElement>
  extends Omit<BoxProps<Media>, "image"> {
  image?: MediaImageProps;
  is?: MediaPattern;
  mod?: MediaModifier;
  spring?: Spring;
}

export const getMediaModifiers = (mod: MediaModifier) => [
  mod?.split(" ").map((mod) => styles[camelCase(mod)]),
];

export const Media: FC<MediaProps> = ({
  children,
  className,
  image,
  is = "image",
  mod,
  spring,
  ...rest
}) => (
  <Box
    as={animated.div}
    {...(rest as BoxProps)}
    className={clsx(
      styles.media,
      mod && getMediaModifiers(mod),
      styles[is],
      className
    )}
    style={useSpring({
      config: config.gentle,
      delay: 250,
      ...spring,
    })}
  >
    {image?.childImageSharp && (
      <Img
        alt={image.name || `media-${is}${mod ? `-${mod}` : ""}`}
        className={image.className}
        {...image.childImageSharp}
      />
    )}
    {children}
  </Box>
);
