import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';


import { Container } from './style';


class Header extends Component {
  render() {
    return (
      <Container>
        <FaGithub />
        <input type="text" />
      </Container>
    );
  }
}

export default Header;
