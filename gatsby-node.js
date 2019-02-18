const path = require("path");
const crypto = require("crypto");
// const playbookNav = require("./content/docs/navigation.yml");
// console.log(playbookNav);
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  console.log(actions);
  const playbookTemplate = path.resolve(`./src/templates/playbook.js`);

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              title
              path
              section
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(file => {
      const node = file.node;
      const section =
        node.fileAbsolutePath.indexOf("/docs/") > -1 && "playbook";
      createPage({
        path: node.frontmatter.path,
        component: playbookTemplate,
        context: {
          section
        }
      });
    });
  });
};
