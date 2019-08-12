import React, { Component } from 'react';

class MainLayout extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        Header
        {children}
        Footer
      </div>
    );
  }
}

export default MainLayout;
