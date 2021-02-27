import React from 'react';
import { Message, Icon, Container } from 'semantic-ui-react';

export default function Mobile() {
  return (
    <Container style={{ paddingTop: '20vh' }}>
      <Message icon>
        <Icon name="warning sign" />
        <Message.Content>
          <Message.Header>Mobile screens unsupported!</Message.Header>
          Support for smaller screens like the ones on phones and tablets is
          still under construction. Please use a laptop/desktop computer to
          visit Pano. Sorry for the inconvenience!
        </Message.Content>
      </Message>
    </Container>
  );
}
