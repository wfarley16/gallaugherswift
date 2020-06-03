import React from 'react';

import { Grid } from 'semantic-ui-react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Features from '../components/Features';

import '../styles/index.css';

export default () => (
  <Layout>
    <div
      className="full-width-image-container margin-top-0 hero-image"
    >
      <div>
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            backgroundColor: '#f40',
            color: 'white',
            padding: '1rem',
          }}
        >
          Swift/ iOS App Development
        </h1>
        <br />
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: 'rgb(241, 84, 52) 0.5rem 0px 0px, rgb(241, 84, 52) -0.5rem 0px 0px',
            backgroundColor: 'rgb(241, 84, 52)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          From 0 to full stack in one semester!
        </h3>
      </div>
    </div>

    <Grid centered>
      <Grid.Row centered className="center-text">
        <h1 className="title">Overview</h1>
        <h3 className="subtitle">
          In this fast-paced course, students will learn the Swift programming language
          and iOS app development skills. While this course is rigorous, challenging,
          and covers a broad set of topics at a rapid pace, the course assumes NO prior
          programming experience.
        </h3>
      </Grid.Row>
      <Features />
      <Grid.Row centered className="center-text">
        <Link className="btn" to="/projects">
          See all student projects
        </Link>
      </Grid.Row>
    </Grid>
  </Layout>
);
