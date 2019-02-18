import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { MQ_SMALL, MQ_MEDIUM /*MQ_LARGE*/ } from "../constants/styles";
import { css } from "@emotion/core";

import "./playbook.css";
export default function Template({ data }) {
  const { html } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const docsNav = data.allNavYaml.edges;

  const markDown = css({
    width: "100%",
    [MQ_MEDIUM]: {
      // background: "#323232",
      width: "1284px"
      // flexShrink: 0
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
    allMarkdownRemark(
      filter: { frontmatter: { section: { in: ["playbook"] } } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
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

function createTree(pages, currentPath) {
  // We'll need to make this recursive for additional pages, or read from a yml/json file
  return pages.reduce((acc, { node: { frontmatter } }) => {
    const { path, title } = frontmatter;
    const splitPath = path.split("/").slice(1);
    const pageDepth = splitPath.length;
    if (!acc[splitPath[0]]) {
      acc[splitPath[0]] = {
        home: {},
        children: {}
      };
    }
    if (pageDepth > 1) {
      acc[splitPath[0]] = {
        ...acc[splitPath[0]],
        children: {
          ...acc[splitPath[0]].children,
          [splitPath[1]]: {
            title,
            path,
            isActive: path === currentPath
          }
        }
      };
    } else {
      acc[splitPath[0]] = {
        ...acc[splitPath[0]],
        home: {
          title,
          path,
          isActive: path === currentPath
        }
      };
    }

    return acc;
  }, {});
}
