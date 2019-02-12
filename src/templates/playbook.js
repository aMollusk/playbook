import React from "react";
import Navigation from "../components/navigation";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import logo from "../images/qantas-code-logo.svg";
import "./playbook.css";
export default function Template({ data }) {
  const {
    markdownRemark,
    allMarkdownRemark: { edges: allPages }
  } = data; // data.markdownRemark holds our post data
  const { html } = markdownRemark;
  const { frontmatter } = markdownRemark;
  const nav = createTree(allPages, frontmatter.path);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="playbook_container">
        <div className="playbook_navigation">
          <img src={logo} />
          <Navigation navigationTree={nav} />
        </div>
        <div
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
