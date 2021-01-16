import React, { FC } from "react";
import classNames from "classnames";

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
    className={classNames(
      styles.card,
      "text-gray-400 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-75",
      className
    )}
  >
    {image && (
      <Link
        to={`/${slug}`}
        className={classNames(styles.image, styles.effects)}
        is="box"
      >
        <Media image={image} />
      </Link>
    )}
    <Box className={styles.content}>
      {category && date && (
        <Text
          as="small"
          className={classNames(styles.meta, styles.effects)}
          is="meta"
        >
          Posted on {date} in {category}
        </Text>
      )}
      <Link to={`/${slug}`} is="box">
        <Text
          as="h4"
          className={classNames(
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
        <Text as="p" className={classNames(styles.excerpt, styles.effects)}>
          {excerpt}
        </Text>
      )}
    </Box>
  </Card>
);
