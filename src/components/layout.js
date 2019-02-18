import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import { MQ_MEDIUM } from "../constants/styles";
import Header from "./header";
import "./layout.css";

const main = css({
  width: "100%",
  margin: `0 auto`,
  paddingRight: `64px`,

  [MQ_MEDIUM]: {
    paddingRight: `164px`
    // background: "#323232",
    // width: "1284px"
    // flexShrink: 0
  }
});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
          css={main}
        >
          <main>{children}</main>
          <footer />
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
