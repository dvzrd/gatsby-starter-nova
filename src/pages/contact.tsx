import React, { FC } from "react";
import { PageProps } from "gatsby";

import { ContactForm } from "containers";
import { FormLayout, FormLayoutProps } from "layouts";
import { useContactFormQuery } from "graphql";

const PageContact: FC<PageProps> = ({ location }) => {
  const { description, name, title } = useContactFormQuery();
  const page = `page-${name}`;

  const layoutProps: FormLayoutProps = {
    on: page,
    seo: {
      description,
      title,
      openGraph: {
        title,
        description,
        url: location?.href,
        images: [
          {
            url: `${location?.origin}/logo.png`,
            width: 800,
            height: 800,
            alt: title,
          },
        ],
      },
    },
  };

  return (
    <FormLayout {...layoutProps}>
      <ContactForm on={page} />
    </FormLayout>
  );
};

export default PageContact;
