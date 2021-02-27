import React, { FC } from "react";

import {
  DefaultPageProps,
  PageContext,
  PageTemplate,
  PanelTemplate,
  PanelTemplateProps,
} from "templates";

const safelyGetFrontMatter = (pageContext: PageContext) =>
  pageContext && pageContext.frontmatter ? pageContext.frontmatter : {};

const DefaultTemplate: FC<DefaultPageProps> = (props) => {
  const { template } = safelyGetFrontMatter(props.pageContext);

  switch (template) {
    case "panel":
      return <PanelTemplate {...(props as PanelTemplateProps)} isMDX />;
    default:
      return <PageTemplate {...(props as DefaultPageProps)} isMDX />;
  }
};

export default DefaultTemplate;
