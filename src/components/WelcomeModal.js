/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import genColor from '../utils/genColor';

export default function Welcome() {
  const [open, setOpen] = React.useState(true);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Welcome to Pano!</Modal.Header>
      <Modal.Content image>
        <Icon name="star outline" size="massive" color={genColor()} />
        <Modal.Description>
          <Header color="grey">
            A start panel for web browsing, a panorama of inspiration.
          </Header>
          <p>
            Pano is a personal project by BedrockDigger, aka Estel, aimed at a
            better start-off for daily browsing.
          </p>
          <p>
            Functionalities here are limited but carefully cherry-picked, as to
            provide a clean experience. No more clever instructions are needed,
            because you're now able to explore Pano with your own eyes.
          </p>
          <p>
            Pano doesn't steal information from you. Check the code if you're
            want to be sure about that.
          </p>
          <p>
            Code for the frontend and backend of Pano are both licensed under
            the MIT license, which is available{' '}
            <a
              href="https://github.com/BedrockDigger/pano-react-app"
              target="_blank _noreferrer"
            >
              here
            </a>
            .
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color={genColor()} onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
