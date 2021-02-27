import React, { FC } from "react";
import clsx from "clsx";

import { Box, Card, CardProps, Link, Media, Text } from "components";
import { GatsbyImage } from "types/gatsby";

import styles from "./ProjectCard.module.css";

export interface ProjectCardProps extends CardProps {
  date?: string;
  image?: GatsbyImage;
  slug?: string;
  subtitle?: string;
  title: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  children,
  className,
  image,
  slug,
  subtitle,
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
      {subtitle && (
        <Text as="p" className={clsx(styles.subtitle, styles.effects)}>
          {subtitle}
        </Text>
      )}
    </Box>
  </Card>
);
