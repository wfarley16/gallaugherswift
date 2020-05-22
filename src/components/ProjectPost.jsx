import React from 'react';
import PropTypes from 'prop-types';

const Project = props => {
  const post = props.selectedPost;
  return (
    <>
      <section className="section">
        <div className="is-centered" style={{ textAlign: 'center' }}>
          <h1>{`Hi! My name is ${post.firstName} ${post.lastName}`}</h1>

          <br />

          <p>
            {`BC Class of ${post.classYear}, Swift Class of ${post.semester}`}
          </p>

          <br />

          <p>{`Programming Experience: ${post.programmingExperience}`}</p>
          <p>{`Employment Status: ${post.employmentStatus}`}</p>

          <br />

          {post.linkedInUrl !== '' && <a href={post.linkedInUrl}>Find me on LinkedIn</a>}

          <br />

          <a href={post.resumeUrl}>Check out my resume!</a>

          <br />

          <a href={post.demoVideo}>Check out my app demo video!</a>
        </div>
      </section>
    </>
  );
};

Project.propTypes = {
  selectedPost: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    semester: PropTypes.string.isRequired,
    classYear: PropTypes.string.isRequired,
    linkedInUrl: PropTypes.string.isRequired,
    programmingExperience: PropTypes.string.isRequired,
    employmentStatus: PropTypes.string.isRequired,
    resumeUrl: PropTypes.string.isRequired,
    demoVideo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
