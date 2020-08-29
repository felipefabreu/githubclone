import React, { Component } from 'react';

import { Icon } from '@iconify/react';
import bell16 from '@iconify/icons-octicon/bell-16';
import plus16 from '@iconify/icons-octicon/plus-16';

import {
  Container,
  Notification,
  Summary,
  Dropdowncaret,
  Details,
  UnreadNotificationSign
} from './style';

class Config extends Component {
  render() {
    return (
      <Container>

        <Notification>
          <UnreadNotificationSign />
          <Icon icon={bell16} />
        </Notification>

        <Summary>
          <Icon icon={plus16} />
          <Dropdowncaret />
        </Summary>

        <Details>
          <img src="https://avatars1.githubusercontent.com/u/1894693?s=60&v=4" alt="user" />
          <Dropdowncaret />
        </Details>

      </Container>
    );
  }
}

export default Config;
