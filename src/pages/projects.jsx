import React from 'react';
import { graphql } from 'gatsby';
import '../components/all.sass';
import Layout from '../components/Layout';
import ProjectRoll from '../components/ProjectRoll';
import ProjectPost from '../components/ProjectPost';

class ProjectsIndexPage extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedPost: null,
    };

    this.selectedPost = React.createRef();

    this.selectPost = this.selectPost.bind(this);
  }

  selectPost(selectedPost) {
    this.setState({ selectedPost },
        () => window.scrollTo(0, this.selectedPost.current.offsetTop));
  }

  render() {
    const { data } = this.props;
    const { selectedPost } = this.state;

    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: "url('/img/screen-web-design-developing-codes-1936299.jpg')",
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Student Projects
          </h1>
        </div>
        {
          selectedPost && (
            <div ref={this.selectedPost}>
              <ProjectPost selectedPost={selectedPost} />
            </div>
          )
        }
        <section className="section">
          <div className="container">
            <div className="content">
              <ProjectRoll data={data} onSelect={post => this.selectPost(post)} />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allContentfulStudentPost {
      edges {
        node {
          firstName
          lastName
          semester
          profilePicture
          classYear
          linkedInUrl
          programmingExperience
          employmentStatus
          resumeUrl
          demoVideo
          slug
        }
      }
    }
  }
`;

export default ProjectsIndexPage;
