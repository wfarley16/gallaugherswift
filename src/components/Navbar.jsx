import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    const { active } = this.state;
    // toggle the active boolean in the state
    this.setState(
      {
        active: !active,
        navBarActiveClass: active ? 'is-active' : '',
      },
    );
  };

  render() {
    return (
      <div className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Boston College" style={{ width: '50px' }} />
            </Link>
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              type="button"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/projects">
                Projects
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/gallaugher"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
