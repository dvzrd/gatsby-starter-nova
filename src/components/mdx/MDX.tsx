import React, { FC } from "react";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import classNames from "classnames";

import {
  AuthorCard,
  AuthorCardProps,
  PostCard,
  PostCardProps,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Card,
  CardProps,
  Element,
  ElementProps,
  Form,
  FormProps,
  FormField,
  FormFieldProps,
  Grid,
  GridProps,
  Hero,
  HeroProps,
  HeroActions,
  HeroActionsProps,
  HeroCaption,
  HeroCaptionProps,
  Icon,
  IconProps,
  Link,
  LinkProps,
  List,
  ListProps,
  ListItem,
  ListItemProps,
  Menu,
  MenuProps,
  PageHero,
  PageHeroProps,
  PostHero,
  PostHeroProps,
  Pattern,
  PatternProps,
  Section,
  SectionProps,
  SplitSection,
  SplitSectionProps,
  Text,
  TextProps,
} from "components";
import {
  Brand,
  BrandProps,
  ContactForm,
  ContactFormProps,
  PostAuthor,
  PostAuthorProps,
  PostsListing,
  PostsListingProps,
  RecommendedPosts,
  RecommendedPostsProps,
  SampleForm,
} from "containers";

import styles from "./MDX.module.css";

export interface MDXProps extends BoxProps {
  body?: string;
  components?: MDXProviderComponents;
}

export const components: MDXProviderComponents = {
  // default components
  a: (props: LinkProps) => <Link {...props} />,
  h1: (props: TextProps) => (
    <Text
      as="h1"
      className="mb-4 mt-8 md:mb-6 md:mt-10 xl:mb-8 xl:mt-12"
      is="hero"
      {...props}
    />
  ),
  h2: (props: TextProps) => (
    <Text
      as="h2"
      className="mb-4 mt-6 md:mb-6 md:mt-8 xl:mb-8 xl:mt-10"
      is="heading"
      {...props}
    />
  ),
  h3: (props: TextProps) => (
    <Text as="h3" className="my-4 md:my-6 xl:my-8" is="title" {...props} />
  ),
  h4: (props: TextProps) => (
    <Text as="h4" className="my-4 md:my-6 xl:my-8" is="subheading" {...props} />
  ),
  h5: (props: TextProps) => (
    <Text as="h5" className="my-4 md:my-6 xl:my-8" is="subtitle" {...props} />
  ),
  h6: (props: TextProps) => (
    <Text
      as="h6"
      className={classNames(styles.h6, "my-4 md:my-6 xl:my-8")}
      is="body"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <ListItem {...props} />,
  ol: (props: ListProps) => (
    <List as="ol" className="mb-4 md:mb-6 xl:mb-8 pl-5" {...props} />
  ),
  p: (props: TextProps) => (
    <Text as="p" className="mb-4 md:mb-6 xl:mb-8" {...props} />
  ),
  ul: (props: ListProps) => (
    <List className="mb-4 md:mb-6 xl:mb-8 pl-5" {...props} />
  ),
};

export const componentShortcodes = {
  AuthorCard: (props: AuthorCardProps) => <AuthorCard {...props} />,
  Box: (props: BoxProps) => <Box {...props} />,
  Button: (props: ButtonProps) => <Button {...props} />,
  Card: (props: CardProps) => <Card {...props} />,
  Element: (props: ElementProps) => <Element {...props} />,
  Form: (props: FormProps) => <Form {...props} />,
  FormField: (props: FormFieldProps) => <FormField {...props} />,
  Grid: (props: GridProps) => <Grid {...props} />,
  Hero: (props: HeroProps) => <Hero {...props} />,
  HeroActions: (props: HeroActionsProps) => <HeroActions {...props} />,
  HeroCaption: (props: HeroCaptionProps) => <HeroCaption {...props} />,
  Icon: (props: IconProps) => <Icon {...props} />,
  Link: (props: LinkProps) => <Link {...props} />,
  Menu: (props: MenuProps) => <Menu {...props} />,
  PageHero: (props: PageHeroProps) => <PageHero {...props} />,
  PostHero: (props: PostHeroProps) => <PostHero {...props} />,
  Pattern: (props: PatternProps) => <Pattern {...props} />,
  PostCard: (props: PostCardProps) => <PostCard {...props} />,
  Section: (props: SectionProps) => <Section {...props} />,
  SplitSection: (props: SplitSectionProps) => <SplitSection {...props} />,
  Text: (props: TextProps) => <Text {...props} />,
};

export const containerShortcodes = {
  Brand: (props: BrandProps) => <Brand {...props} />,
  ContactForm: (props: ContactFormProps) => <ContactForm {...props} />,
  PostAuthor: (props: PostAuthorProps) => <PostAuthor {...props} />,
  PostsListing: (props: PostsListingProps) => <PostsListing {...props} />,
  RecommendedPosts: (props: RecommendedPostsProps) => (
    <RecommendedPosts {...props} />
  ),
  SampleForm: (props: FormProps) => <SampleForm {...props} />,
};

export const shortcodes = {
  ...componentShortcodes,
  ...containerShortcodes,
};

export const mdxComponents = {
  ...components,
  ...shortcodes,
};

export const MDX: FC<MDXProps> = ({
  as = "article",
  body,
  children,
  className,
  components,
  ...rest
}) => (
  <Box
    as={as}
    {...(rest as BoxProps)}
    className={classNames(styles.mdx, className)}
  >
    <MDXProvider components={{ ...mdxComponents, ...components }}>
      {body && <MDXRenderer>{body}</MDXRenderer>}
      {children}
    </MDXProvider>
  </Box>
);
