import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <div className="footer has-background-black has-text-white-ter">
    <div className="content has-text-centered has-background-black has-text-white-ter">
      <div className="container has-background-black has-text-white-ter">
        <div>
          <ul className="menu-list">
            <li>
              <Link to="/" className="navbar-item">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
