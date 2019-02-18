import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { /* MQ_SMALL, */ MQ_MEDIUM /*MQ_LARGE*/ } from "../constants/styles";
import { css } from "@emotion/core";

import "./playbook.css";
export default function Template({ data }) {
  const { html } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const docsNav = data.allNavYaml.edges;

  const markDown = css({
    width: "100%",
    [MQ_MEDIUM]: {
      width: "1284px"
    }
  });

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="playbook_container">
        <Navigation currentPath={frontmatter.path} navigationTree={docsNav} />
        <div
          css={markDown}
          className="playbook_content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
      }
    }
    allNavYaml {
      edges {
        node {
          title
          id
          items {
            id
            title
          }
        }
      }
    }
  }
`;
