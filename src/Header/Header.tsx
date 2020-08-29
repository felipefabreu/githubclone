import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';

import Search from '../components/Search/Search';
import Navbar from '../components/Navbar/Navbar';
import Config from '../components/Config/Config';

import { Container } from './style';


class Header extends Component {
  render() {
    return (
      <Container>
        <FaGithub />
        <Search />
        <Navbar />
        <Config />
      </Container>
    );
  }
}

export default Header;
