import React, { FC } from "react";
import { PageProps } from "gatsby";

import {
  Button,
  Card,
  Grid,
  Hero,
  HeroProps,
  Link,
  Section,
  Text,
} from "components";
import { DefaultLayout, DefaultLayoutProps } from "layouts";
import { useSiteMetadata } from "graphql";

const PageIndex: FC<PageProps> = () => {
  const { description, title, name } = useSiteMetadata();

  const layoutProps: DefaultLayoutProps = {
    on: "page-home",
  };

  const heroProps: HeroProps = {
    caption: {
      heading: description,
    },
    is: "page",
    minH: "screen-2/3",
  };

  return (
    <DefaultLayout {...layoutProps}>
      <Hero {...heroProps} />
      <Section on="page-home" is="content">
        <Text
          as="h3"
          is="heading"
          className="mt-8 md:mt-10 xl:mt-12 mb-6 md:mb-8 xl:mb-10"
        >
          Featuring a utility-first design system UI built with TailwindCSS
        </Text>
        <Grid cols="lg:grid-cols-2" gap="gap-6 md:gap-8 xl:gap-10">
          <p>
            Building complex components from a constrained set of primitive
            utilities. Traditionally, whenever you need to style something on
            the web, you write CSS. With Tailwind, you style elements by
            applying pre-existing classes directly in your HTML.
          </p>
          <p>
            Now I know what you're thinking, "this is an atrocity, what a
            horrible mess!" and you're right, it's kind of ugly. In fact it's
            just about impossible to think this is a good idea the first time
            you see it — you have to actually try it.
          </p>
        </Grid>
        <Text as="p" is="subtitle" className="mt-8 md:mt-10 xl:mt-12">
          Once you've actually built something this way, you'll quickly notice
          some really important benefits:
        </Text>
      </Section>
      <Section>
        <Grid
          cols="lg:grid-cols-3"
          gap="gap-4 md:gap-5 xl:gap-6"
          className="mb-12 md:mb-13 xl:mb-14"
        >
          <Card className="border-bg-primary">
            <Text
              as="h4"
              is="subheading"
              className="mb-2 md:mb-3 xl:mb-4 text-primary-500"
            >
              Designing with constraints.
            </Text>
            <Text as="p" is="meta">
              Using inline styles, every value is a magic number. With
              utilities, you're choosing styles from a predefined design system,
              which makes it much easier to build visually consistent UIs.
            </Text>
          </Card>
          <Card className="border-bg-primary">
            <Text
              as="h4"
              is="subheading"
              className="mb-2 md:mb-3 xl:mb-4 text-primary-500"
            >
              Your CSS stops growing.
            </Text>
            <Text as="p" is="meta">
              Using a traditional approach, your CSS files get bigger every time
              you add a new feature. With utilities, everything is reusable so
              you rarely need to write new CSS.
            </Text>
          </Card>
          <Card className="border-bg-primary">
            <Text
              as="h4"
              is="subheading"
              className="mb-2 md:mb-3 xl:mb-4 text-primary-500"
            >
              Making changes feels safer.
            </Text>
            <Text as="p" is="meta">
              CSS is global and you never know what you're breaking when you
              make a change. Classes in your HTML are local, so you can change
              them without worrying about something else breaking.
            </Text>
          </Card>
        </Grid>
      </Section>
      <Section is="feature" className="bg-primary text-primary">
        <Text as="h2" is="hero">
          {name}
        </Text>
        <Text as="h4" is="title">
          {title}
        </Text>
        <Link
          to="/about"
          is="button"
          className="inline-flex border-bg-secondary text-bg-secondary hover:bg-secondary hover:border-bg-secondary hover:text-secondary my-4 md:my-5 xl:my-6"
        >
          <Button as="span" color="inherit" is="outline" size="lg">
            See about page
          </Button>
        </Link>
      </Section>
      <Section as="footer" is="heel" on="page-home">
        <h3 className="leading-tight mt-12 md:mt-13 xl:mt-14 mb-4 md:mb-5 xl:mb-6">
          This gatsby starter uses TailwindCSS
        </h3>
        <p className="mb-4">
          Tailwind CSS is a highly customizable, low-level CSS framework that
          gives you all of the building blocks you need to build bespoke designs
          without any annoying opinionated styles you have to fight to override.
        </p>
        <p>
          Visit <Link to="https://tailwindcss.com/">tailwindcss.com</Link> for
          more details.
        </p>
      </Section>
    </DefaultLayout>
  );
};

export default PageIndex;
