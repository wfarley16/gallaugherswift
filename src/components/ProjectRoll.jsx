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
              <article>
                <header>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={`/projects/${edge.node.slug}`}
                    >
                      {`${edge.node.firstName} ${edge.node.lastName}`}
                    </Link>
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
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ProjectRoll;
