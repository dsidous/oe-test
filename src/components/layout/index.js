import React, { Component } from 'react';

import Footer from '../atoms/Footer';
import Header from '../molecules/Header';

class MainLayout extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
