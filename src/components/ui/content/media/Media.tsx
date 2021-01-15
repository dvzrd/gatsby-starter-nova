import React, { FC } from "react";
import Img from "gatsby-image";
import classNames from "classnames";
import { camelCase } from "lodash";

import { Box, BoxProps } from "components";
import { GatsbyImage } from "types/gatsby";

import styles from "./Media.module.css";

export type MediaPattern = "image" | "pattern" | "video";

export type MediaModifier =
  | "background"
  | "blurry"
  | "gradient"
  | "graph"
  | string;

export interface MediaProps<Media extends HTMLElement = HTMLDivElement>
  extends BoxProps<Media> {
  image?: GatsbyImage;
  is?: MediaPattern;
  mod?: MediaModifier;
}

export const Media: FC<MediaProps> = ({
  children,
  className,
  image,
  is = "image",
  mod,
  ...rest
}) => {
  const getModifiers = () => [
    mod?.split(" ").map((mod) => styles[camelCase(mod)]),
  ];

  return (
    <Box
      {...(rest as MediaProps)}
      className={classNames(
        styles.media,
        getModifiers(),
        styles[is],
        className
      )}
    >
      {image && (
        <Img
          alt={image.name || `media-${is}${mod ? `-${mod}` : ""}`}
          {...image.childImageSharp}
        />
      )}
      {children}
    </Box>
  );
};
