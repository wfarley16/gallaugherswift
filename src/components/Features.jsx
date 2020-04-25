import React from 'react';
import PropTypes from 'prop-types';
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
                      <img borderRadius="5px" src={MacIcon} />
                    </div>
                </div>
                <p>
              A fully-charged Mac laptop to each class as we will be
              working extensively with local development environments
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
                  <img borderRadius="5px" src={XcodeIcon} />
                </div>
            </div>
              <p>
                    {' '}
              Students MUST have the latest version of Apple's FREE Xcode
              software installed. The software is available
                    <a href="https://apps.apple.com/us/app/xcode/id497799835?mt=12">
                      HERE
                    </a>
            </p>
            </section>
        </div>
    </div>
);
export default Features;

{
  /* {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '240px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid */
}
