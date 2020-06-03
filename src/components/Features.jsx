import React from 'react';

import { Grid } from 'semantic-ui-react';
import MacIcon from '../../static/img/macbook-icon.png';
import XcodeIcon from '../../static/img/icons8-xcode-250.png';

const Features = () => (
  <Grid.Row columns={2} divided stackable="true">
    <Grid.Column className="center-text">
      <div className="center-text">
        <img className="grid-item-image" src={MacIcon} alt="mac-icon" />
      </div>
      <div className="center-text">
        <p>
          A fully-charged Mac laptop to each class as we will be working extensively with local
          development environments
        </p>
      </div>
    </Grid.Column>
    <Grid.Column>
      <div className="center-text">
        <img className="grid-item-image" src={XcodeIcon} alt="xcode-icon" />
      </div>
      <div className="center-text">
        <p>
          {' '}
          Students MUST have the latest version of Apple's FREE Xcode software installed. The
          software is available
          {' '}
          <a href="https://apps.apple.com/us/app/xcode/id497799835?mt=12">HERE</a>
        </p>
      </div>
    </Grid.Column>
  </Grid.Row>
);

export default Features;
