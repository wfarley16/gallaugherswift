import React from 'react';
import '../components/all.sass';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Features from '../components/Features';

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
          <Layout>
              <div
              className="full-width-image-container margin-top-0"
              style={{
                      backgroundImage:
                            "url('/img/space-gray-iphone-8-818043.jpg')",
                        backgroundPosition: 'top left',
                        backgroundAttachment: 'fixed',
                    }}
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
                                boxShadow:
                                    'rgb(241, 84, 52) 0.5rem 0px 0px, rgb(241, 84, 52) -0.5rem 0px 0px',
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

              <section className="section section--gradient">
                  <div className="container">
                        <div className="section">
                  <div className="columns">
                                <div className="column is-10 is-offset-1">
                      <div className="content">
                                        <div className="content">
                                            <div className="tile">
                                            <h1 className="title">
                                                Overview
                                                </h1>
                                          </div>
                                <div className="tile">
                                                <h3 className="subtitle">
                                                In this fast-paced course,
                                                students will learn the
                                                Swift programming language
                                                and iOS app development
                                                skills. While this course is
                                                rigorous, challenging, and
                                                covers a broad set of topics
                                                at a rapid pace, the course
                                                assumes NO prior programming
                                                experience.
                                                </h3>
                                          </div>
                              </div>
                                      <div className="columns">
                                          <div className="column is-12">
                                                <h3 className="has-text-weight-semibold is-size-2">
                                              The Course
                                                </h3>
                                              <p>
                                              Using a "flipped-classroom"
                                              approach, students take
                                              lectures in a series of
                                              online videos embedded in a
                                              web-based
                                              course/reference/quiz book,
                                              following along with videos
                                              as they learn programming
                                              concepts and build apps.
                                              Although this is a flipped
                                              class, expect a challenging
                                              course. Class is mandatory
                                              (this is NOT an online
                                              course) and class time will
                                              be used for additional
                                              exercises, concept review,
                                              and student
                                              questions.Students should be
                                              prepared to spend
                                              significant time each week
                                              on self-directed learning
                                              and regular programming
                                              projects. This course can be
                                              used in place of ISYS 2157
                                              Programming for Management
                                              for credit toward the
                                              Information Systems
                                              concentration. Make sure to
                                              bring the following:
                                                </p>
                                            </div>
                                        </div>

                                      <Features />

                                        <div className="columns">
                                <div className="column is-12 has-text-centered">
                                              <Link
                                                    className="btn"
                                                  to="/projects"
                                                >
                                                    See all student projects
                                                </Link>
                                            </div>
                              </div>
                                    </div>
                    </div>
                            </div>
                </div>
                    </div>
                </section>
            </Layout>
    );
  }
}
