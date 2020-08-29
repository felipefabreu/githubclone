import React, { Component } from 'react';

import { Container } from './style';

class Containerbar extends Component {
  render() {
    return (
      <Container>
        <a href="http://google.com">Pull requests</a>
        <a href="http://google.com">Issues</a>
        <a href="http://google.com">Marketplace</a>
        <a href="http://google.com">Explore</a>
      </Container>
    );
  }
}

export default Containerbar;
