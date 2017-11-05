import React from 'react';

class Header extends React.Component {
    constructor(){
      super();
      this.state = {};
    }
    render() {
      return (
          <header className="masthead">
              <div className="banner-container"> <span className="banner"> 720x90 AD </span> </div>
              <nav className="navbar navbar-default">
                  <div className="container-fluid">
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span> <span className="icon-bar">
                              </span> <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand"  href="#">KOMO NEWS</a>
                      </div>
                  </div>
              </nav>
          </header>
      );
    }
  }
export default Header;

