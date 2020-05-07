import React from 'react';
import { Link } from 'gatsby';

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
    const { data } = this.props;
    const { semesterYear } = this.state;

    const allBlogPosts = data.allContentfulBlogPost.edges;
    const filteredBlogPosts = semesterYear
      ? allBlogPosts.filter(edge => edge.node.semesteryear === semesterYear)
      : allBlogPosts;

    return (
      <div>
        <div className="content">
          <p>Class: </p>
          <button type="button" onClick={() => this.setSemesterYear(null)}>All</button>
          {allBlogPosts.map(edge => (
            <button onClick={() => this.setSemesterYear(edge.node.semesteryear)} type="button">
              {edge.node.semesteryear}
            </button>
          ))}
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
