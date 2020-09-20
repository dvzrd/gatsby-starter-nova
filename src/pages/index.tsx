import React from "react";
import { PageProps as GatsbyPageProps } from "gatsby";

import "../styles/main.css";

// define data props
interface PageProps {}

const PageIndex: React.FC<GatsbyPageProps & PageProps> = ({}) => (
  <main className="container">
    <h1 className="text-2xl text-gray-800">Home Page</h1>
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
    </ul>
  </main>
);

export default PageIndex;
