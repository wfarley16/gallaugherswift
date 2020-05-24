import React from 'react';
import MacIcon from '../../static/img/macbook-icon.png';
import XcodeIcon from '../../static/img/icons8-xcode-250.png';

const Features = () => (
  <div className="columns is-multiline">
    <div className="column is-6">
      <section className="section">
        <div className="has-text-centered">
          <div
            style={{
              width: '240px',
              display: 'inline-block',
            }}
          >
            <img style={{ borderRadius: '5px' }} src={MacIcon} alt="mac-icon" />
          </div>
        </div>
        <p>
          A fully-charged Mac laptop to each class as we will be working extensively with local
          development environments
        </p>
      </section>
    </div>

    <div className="column is-6">
      <section className="section">
        <div className="has-text-centered">
          <div
            style={{
              width: '240px',
              display: 'inline-block',
            }}
          >
            <img style={{ borderRadius: '5px' }} src={XcodeIcon} alt="xcode-icon" />
          </div>
        </div>
        <p>
          {' '}
          Students MUST have the latest version of Apple's FREE Xcode software installed. The
          software is available
          {' '}
          <a href="https://apps.apple.com/us/app/xcode/id497799835?mt=12">HERE</a>
        </p>
      </section>
    </div>
  </div>
);
export default Features;
