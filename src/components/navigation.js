import React from "react";
import { Link } from "gatsby";

export default ({ navigationTree }) => {
  return (
    <ul>
      {navigationTree.map(({ node: { title, id, items } }) => {
        return (
          <ul key={id}>
            <Link to={`/${id}`}>{title}</Link>
            {items && (
              <ul>
                {/* We should probably do this recursively? */}
                {items.map(({ title, id: childId }) => {
                  return (
                    <li>
                      <Link key={id} to={`/${id}/${childId}`}>
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
