import React, { Component } from 'react';

import { BsSlashSquare } from 'react-icons/bs';

import { Container } from './style';

class Search extends Component {
  render() {
    return (
      <>
        <Container>
          <input
            type="text"
            name="search"
            placeholder="Search of jump to..."
          />
          <BsSlashSquare />
        </Container>

      </>
    );
  }
}

export default Search;
