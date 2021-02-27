import { useStaticQuery, graphql } from "gatsby";

import { GatsbyImage } from "types";

export interface MediaQuery {
  media: {
    nodes: GatsbyImage[];
  };
}

export const mediaFragment = graphql`
  fragment MediaFragment on File {
    childImageSharp {
      fluid(maxWidth: 1280, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    id
    name
  }
`;

export const useMediaQuery = () => {
  const {
    media: { nodes },
  }: MediaQuery = useStaticQuery(
    graphql`
      query MediaQuery {
        media: allFile(filter: { absolutePath: { regex: "/assets/media/" } }) {
          nodes {
            ...MediaFragment
          }
        }
      }
    `
  );

  return nodes;
};
