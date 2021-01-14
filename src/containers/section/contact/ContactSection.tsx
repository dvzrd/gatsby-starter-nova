import React, { FC } from "react";

import { Link, Section, SectionProps, Text } from "components";
import { useSiteMetadataQuery } from "graphql";

export interface ContactSectionProps extends SectionProps {
  heading?: string;
}

export const ContactSection: FC<ContactSectionProps> = ({
  heading = "Contact us",
  ...rest
}) => {
  const { organization } = useSiteMetadataQuery();

  return (
    <Section is="heel" bgColor="paper" color="paper" {...rest}>
      <Text
        as="h4"
        className="mt-8 mb-4 md:mt-10 md:mb-5 xl:mt-12 xl:mb-6"
        is="title"
      >
        {heading}
      </Text>
      <Text as="p" className="mb-4 md:mb-5 xl:mb-6">
        Click the button below and tell us about your project.
        {organization?.telephone && (
          <>
            {" "}
            Or give us a call at{" "}
            <Link to={`tel:${organization?.telephone}`}>
              {organization?.telephone}
            </Link>{" "}
            during regular business hours.
          </>
        )}
      </Text>
      <Link
        to="/contact"
        is="button"
        button="default"
        buttonProps={{ color: "primary" }}
      >
        Contact Us
      </Link>
    </Section>
  );
};
