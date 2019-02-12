import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = args => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`qantas`, `application`, `react`]} />
      <Link to="/agile/">Go to playbook</Link>
    </Layout>
  );
};

export default IndexPage;
