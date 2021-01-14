import React, { FC } from "react";
import classNames from "classnames";

import { Box, Card, CardProps, Media, Text } from "components";
import { MemberName } from "graphql";
import { GatsbyImage } from "types/gatsby";

import styles from "./AuthorCard.module.css";

export interface AuthorCardProps extends CardProps {
  bio?: string;
  caption?: string;
  image?: GatsbyImage;
  name: MemberName;
}

export const AuthorCard: FC<AuthorCardProps> = ({
  bio,
  caption,
  children,
  className,
  image,
  name,
  ...rest
}) => (
  <Card {...(rest as CardProps)} className={classNames(styles.card, className)}>
    {image && <Media className={styles.image} image={image} />}
    {children}
    <Box className={styles.info}>
      {caption && (
        <Text
          as="small"
          className="text-gray-400 dark:text-gray-300"
          is="caption"
        >
          {caption}
        </Text>
      )}
      <Text as="h4" className={styles.name} is="subheading">
        {name}
      </Text>
      {bio && (
        <Text
          as="p"
          className={classNames(styles.bio, "text-gray-400 dark:text-gray-100")}
        >
          {bio}
        </Text>
      )}
    </Box>
  </Card>
);
