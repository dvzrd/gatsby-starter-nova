import React, { FC } from "react";

import { AuthorCard, Section, SectionProps } from "components";
import { MemberName, MemberNode, useMembersQuery } from "graphql";

export interface PostAuthorProps extends SectionProps {
  author?: MemberName;
  caption?: string;
}

export const getAuthorMemberData = (
  author: MemberName | undefined,
  members: MemberNode[]
) =>
  members.filter(
    ({
      node: {
        frontmatter: { name },
      },
    }) => author === name
  );

export const PostAuthor: FC<PostAuthorProps> = ({
  author,
  caption = "Written & edited by",
  children,
  ...rest
}) => {
  const { edges } = useMembersQuery();
  const member = getAuthorMemberData(author, edges)[0]?.node?.frontmatter;

  if (!member) return null;

  const { bio, image, name } = member;

  return (
    <Section {...(rest as SectionProps)}>
      <AuthorCard bio={bio} caption={caption} image={image} name={name} />
      {children}
    </Section>
  );
};
