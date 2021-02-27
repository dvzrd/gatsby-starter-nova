import React, { FC } from "react";
import clsx from "clsx";

import { Box, Card, CardProps, Link, Media, Text } from "components";
import { GatsbyImage } from "types/gatsby";

import styles from "./PostCard.module.css";

export interface PostCardProps extends CardProps {
  category?: string;
  date?: string;
  excerpt?: string;
  image?: GatsbyImage;
  slug?: string;
  title: string;
}

export const PostCard: FC<PostCardProps> = ({
  category,
  children,
  className,
  date,
  excerpt,
  image,
  slug,
  title,
  ...rest
}) => (
  <Card
    {...(rest as CardProps)}
    className={clsx(
      styles.card,
      "text-gray-400 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-75",
      className
    )}
  >
    {image && (
      <Link to={slug} className={clsx(styles.image, styles.effects)} is="box">
        <Media image={image} />
      </Link>
    )}
    <Box className={styles.content}>
      {category && date && (
        <Text
          as="small"
          className={clsx(styles.meta, styles.effects)}
          is="meta"
        >
          Posted on {date} in {category}
        </Text>
      )}
      <Link to={slug} is="box">
        <Text
          as="h4"
          className={clsx(
            styles.title,
            styles.effects,
            "text-default dark:text-gray-25 hover:text-hover dark:hover:text-bg-primary"
          )}
          is="title"
        >
          {title}
        </Text>
      </Link>
      {excerpt && (
        <Text as="p" className={clsx(styles.excerpt, styles.effects)}>
          {excerpt}
        </Text>
      )}
    </Box>
  </Card>
);
