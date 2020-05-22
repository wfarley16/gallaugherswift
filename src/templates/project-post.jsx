import React from 'react';
import Layout from '../components/Layout';

export const query = graphql`
  query($slug: String!) {
    contentfulStudentPost(slug: { eq: $slug }) {
      firstName
      lastName
      semester
      classYear
      linkedInUrl
      programmingExperience
      employmentStatus
      resumeUrl
      demoVideo
    }
  }
`;

const Project = props => {
  const post = props.data.contentfulStudentPost;
  return (
    <Layout>
      <section className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1>{`Hi! My name is ${post.firstName} ${post.lastName}`}</h1>

            <br />

            <p>
              {`BC Class of ${post.classYear}, Swift Class of ${post.semester}`}
            </p>

            <br />

            <p>{post.programmingExperience}</p>
            <p>{post.employmentStatus}</p>

            <br />

            <a href={post.resumeUrl}>Check out my resume!</a>

            <br />

            <a href={post.demoVideo}>Check out my app demo video!</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project;
