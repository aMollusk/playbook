import React, { useState } from "react";
import { Link } from "gatsby";
// import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { MQ_SMALL, MQ_MEDIUM /* MQ_LARGE*/ } from "../constants/styles";
import logo from "../images/qantas-code-logo.svg";
import burger from "../images/burger.svg";
export default ({ navigationTree, currentPath }) => {
  const [expanded, setToggle] = useState(false);

  const navOuter = css({
    ...(expanded && {
      height: "100%",
      overflow: "hidden"
    }),
    [MQ_MEDIUM]: {
      width: "356px",
      flexShrink: 0,
      overflow: "auto",
      height: "auto"
    }
  });

  // TODO: Delete all these styles
  const expandMenu = css({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "24px",
    right: "64px",
    height: "50px",
    width: "50px",
    zIndex: 500,
    background: "none",
    border: "3px solid black",
    borderRadius: "50%",
    background: "#fff",
    cursor: "pointer",
    img: {
      width: "40px",
      height: "40px"
    },
    outline: "none",
    [MQ_MEDIUM]: {
      display: "none"
    }
  });

  const navContainer = css({
    position: "fixed",
    height: "100%",
    width: "100%",
    // opacity: expanded ? 1 : 0,
    display: expanded ? "block" : "none",
    overflow: expanded ? "scroll" : "hidden",
    transition: "opacity .4s",
    padding: "32px",
    paddingLeft: "64px",
    // background: "#fff",
    background: "#fbfbfb",
    [MQ_MEDIUM]: {
      width: "356px",
      opacity: 1,
      display: "block",
      top: 0,
      overflow: "scroll" // TODO fix this for mobile... can't click or focus inner
    }
  });

  const topLevelLink = css({
    marginTop: "24px",
    "> a": {
      color: "#e40000",
      fontWeight: "bold",
      fontSize: "18px"
    }
  });

  const secondLevelLinkContainer = css({
    marginTop: "12px",
    li: {
      marginBottom: "0px",
      " > a": {
        fontSize: "16px"
      }
    }
  });

  const selected = css({
    // background: "#fff"
  });

  return (
    <div css={navOuter}>
      <button
        css={expandMenu}
        onClick={event => {
          event.preventDefault();
          setToggle(!expanded);
        }}
      >
        <img src={burger} />
      </button>
      <ul css={navContainer}>
        <img style={{ width: "160px" }} src={logo} />

        {navigationTree.map(({ node: { title, id, items } }) => {
          const path = `/${id}`;
          const isCurrent = path === currentPath;
          return (
            <li key={path} css={topLevelLink}>
              <Link css={isCurrent && selected} to={path}>
                {title}
              </Link>
              <ul>
                {items && (
                  <ul css={secondLevelLinkContainer}>
                    {/* We should probably do this recursively? */}
                    {items.map(({ title, id: childId }) => {
                      const path = `/${id}/${childId}`;
                      const isCurrent = path === currentPath;
                      return (
                        <li key={path}>
                          <Link
                            css={isCurrent && selected}
                            to={`/${id}/${childId}`}
                          >
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
