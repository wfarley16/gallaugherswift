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

  getSemesters() {
    const { data } = this.props;
    const semesters = [];
    data.allContentfulStudentPost.edges.forEach(edge => {
      const { semester } = edge.node;
      if (!semesters.includes(semester)) {
        semesters.push(semester);
      }
    });
    return semesters;
  }

  render() {
    const { data } = this.props;
    const { semesterYear } = this.state;

    const allBlogPosts = data.allContentfulStudentPost.edges;
    const filteredBlogPosts = semesterYear
      ? allBlogPosts.filter(edge => edge.node.semester === semesterYear)
      : allBlogPosts;
    filteredBlogPosts
        .sort((edgeA, edgeB) => (edgeA.node.firstName > edgeB.node.firstName ? 1 : -1));

    const semesters = this.getSemesters();

    return (
      <div>
        <div className="content">
          <p>Class: </p>
          <button type="button" onClick={() => this.setSemesterYear(null)}>
            All
          </button>
          {semesters.map(semester => (
            <button onClick={() => this.setSemesterYear(semester)} type="button">
              {semester}
            </button>
          ))}
        </div>

        <div className="columns is-multiline">
          {filteredBlogPosts.map(edge => (
            <div className="is-parent column is-6">
              <Link to={`/projects/${edge.node.slug}`}>
                <article className="post-preview">
                  <header>
                    <p className="post-meta title has-text-primary is-size-4">
                      {`${edge.node.firstName} ${edge.node.lastName}`}
                      <span> &bull; </span>
                    </p>
                  </header>
                  <p>
                    {`Class of ${edge.node.classYear}`}
                    <br />
                    <Link className="button" to={`/projects/${edge.node.slug}`}>
                      Keep Reading →
                    </Link>
                  </p>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ProjectRoll;
