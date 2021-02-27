import React, { FC } from "react";
import clsx from "clsx";
import { GiClick } from "react-icons/gi";
import { HiCursorClick } from "react-icons/hi";
import { animated } from "react-spring";
import { useMedia } from "react-use";

import { Link, Section, SectionProps, Text, TextProps } from "components";
import { useSiteMetadataQuery } from "graphql";

export interface ContactProps extends SectionProps {
  heading?: string;
  headingProps?: TextProps;
  subheading?: string;
  subheadingProps?: TextProps;
}

export const Contact: FC<ContactProps> = ({
  children,
  className,
  container,
  heading = "With enough time an idea is transformed into a product.",
  headingProps,
  subheading = "If you have an idea and need to consult a software creator - click on the button below.",
  subheadingProps,
  observer,
  spring,
  ...rest
}) => {
  const { author } = useSiteMetadataQuery();
  const isWide = useMedia("(min-width: 1024px)");

  const sectionProps: SectionProps = {
    as: animated.footer,
    container,
    is: "heel",
    ...rest,
  };

  return (
    <Section
      {...sectionProps}
      className={clsx("bg-contrast text-contrast", className)}
    >
      {heading && (
        <Text
          as="h4"
          is="title"
          {...headingProps}
          className={clsx(
            "mt-8 mb-4 md:mt-10 md:mb-5 xl:mt-12 xl:mb-6",
            headingProps?.className
          )}
        >
          {heading}
        </Text>
      )}
      {subheading && (
        <Text
          as="h3"
          is="subtitle"
          {...subheadingProps}
          className={clsx("mb-4 md:mb-5 xl:mb-6", subheadingProps?.className)}
        >
          {subheading}
        </Text>
      )}
      {children}
      <Link
        to="/contact"
        is="button"
        button="default"
        buttonProps={{
          className: "flex items-center",
          color: "secondary",
          size: "lg",
        }}
      >
        {isWide ? "Click" : "Tap"} to Connect{" "}
        {isWide ? (
          <HiCursorClick className="ml-2" />
        ) : (
          <GiClick className="ml-2" />
        )}
      </Link>
      {author?.email && (
        <Text as="small" className="block mt-2" is="caption">
          or{" "}
          <Link to={`mailto:${author.email}`} size="inherit">
            send me an email
          </Link>
          .
        </Text>
      )}
    </Section>
  );
};
