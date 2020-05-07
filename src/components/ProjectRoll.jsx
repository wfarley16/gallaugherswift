import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

class ProjectRoll extends React.Component {
  constructor() {
    super();
    this.state = {
      semesterYear: null,
    };

    this.setSemesterYear = this.setSemesterYear.bind(this);
  }

  setSemesterYear(semesterYear) {
    this.setState({ semesterYear });
  }

  render() {
    const data = useStaticQuery(graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              publishedDate(formatString: "MMMM Do, YYYY")
              slug
              excerpt
              semesteryear
            }
          }
        }
      }
    `);

    const { semesterYear } = this.state;

    const allBlogPosts = data.allContentfulBlogPost.edges;
    const filteredBlogPosts = semesterYear
      ? allBlogPosts.filter(post => post.semesteryear === semesterYear)
      : allBlogPosts;

    return (
      <div>
        <div className="content">
          <p>Class: </p>
          <select name="Class">
            <option>All</option>
            {allBlogPosts.map(edge => (
              <option onClick={() => this.setSemesterYear(edge.node.semesteryear)}>
                {edge.node.semesteryear}
              </option>
            ))}
          </select>
        </div>

        <div className="columns is-multiline">
          {filteredBlogPosts.map(edge => (
            <div className="is-parent column is-6">
              <article>
                <header>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={`/projects/${edge.node.slug}`}
                    >
                      {edge.node.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">{edge.node.publishedDate}</span>
                  </p>
                </header>
                <p>
                  {edge.node.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={`/projects/${edge.node.slug}`}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ProjectRoll;

// class BlogRoll extends React.Component {
//   render() {
//     const { data } = this.props
//     const { edges: posts } = data.allMarkdownRemark

//     return (
//       <div className="columns is-multiline">
//         {posts &&
//           posts.map(({ node: post }) => (
//             <div className="is-parent column is-6" key={post.id}>
//               <article
//                 className={`blog-list-item tile is-child box notification ${
//                   post.frontmatter.featuredpost ? 'is-featured' : ''
//                 }`}
//               >
//                 <header>
//                   {post.frontmatter.featuredimage ? (
//                     <div className="featured-thumbnail">
//                       <PreviewCompatibleImage
//                         imageInfo={{
//                           image: post.frontmatter.featuredimage,
//                           alt: `featured image thumbnail for post ${post.frontmatter.title}`,
//                         }}
//                       />
//                     </div>
//                   ) : null}
//                   <p className="post-meta">
//                     <Link
//                       className="title has-text-primary is-size-4"
//                       to={post.fields.slug}
//                     >
//                       {post.frontmatter.title}
//                     </Link>
//                     <span> &bull; </span>
//                     <span className="subtitle is-size-5 is-block">
//                       {post.frontmatter.date}
//                     </span>
//                   </p>
//                 </header>
//                 <p>
//                   {post.excerpt}
//                   <br />
//                   <br />
//                   <Link className="button" to={post.fields.slug}>
//                     Keep Reading →
//                   </Link>
//                 </p>
//               </article>
//             </div>
//           ))}
//       </div>
//     )
//   }
// }

// BlogRoll.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query BlogRollQuery {
//         allMarkdownRemark(
//           sort: { order: DESC, fields: [frontmatter___date] }
//           filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
//         ) {
//           edges {
//             node {
//               excerpt(pruneLength: 400)
//               id
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//                 templateKey
//                 date(formatString: "MMMM DD, YYYY")
//                 featuredpost
//                 featuredimage {
//                   childImageSharp {
//                     fluid(maxWidth: 120, quality: 100) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data, count) => <BlogRoll data={data} count={count} />}
//   />
// )
