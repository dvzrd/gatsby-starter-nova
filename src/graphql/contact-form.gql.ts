import { useStaticQuery, graphql } from "gatsby";

export type ContactFormFrontmatter = {
  action: string;
  button?: string;
  description?: string;
  fields: {
    allowed?: string;
    label?: string;
    name: string;
    options?: {
      label: string;
      value: string;
    };
    order?: number;
    placeholder?: string;
    required?: string;
    type: string;
  }[];
  heading?: string;
  method?: string;
  name: string;
  subheading?: string;
  title?: string;
};

export interface ContactFormData {
  form: {
    frontmatter: ContactFormFrontmatter;
  };
}

export const useContactFormQuery = () => {
  const {
    form: { frontmatter },
  }: ContactFormData = useStaticQuery(
    graphql`
      query ContactFormQuery {
        form: mdx(frontmatter: { name: { eq: "contact" } }) {
          frontmatter {
            action
            button
            description
            fields {
              label
              name
              order
              placeholder
              required
              type
            }
            heading
            method
            name
            subheading
            title
          }
        }
      }
    `
  );

  return frontmatter;
};
