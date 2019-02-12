import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default ({ navigationTree }) => {
  return (
    <ul>
      {Object.keys(navigationTree).map(next => {
        const levelTwo = Object.keys(navigationTree[next].children);
        return (
          <ul key={next}>
            <Link
              className={navigationTree[next].home.isActive && "active"}
              key={next}
              to={navigationTree[next].home.path}
            >
              {navigationTree[next].home.title}
            </Link>
            {levelTwo.length > 0 && (
              <ul>
                {levelTwo.map(key => {
                  const { path, title, isActive } = navigationTree[
                    next
                  ].children[key];
                  return (
                    <li>
                      <Link
                        key={key}
                        to={path}
                        className={isActive && "active"}
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </ul>
        );
      })}
    </ul>
  );
};
