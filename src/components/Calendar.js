import React, { Component } from 'react';
import dayjs from 'dayjs';
import Clock from 'react-live-clock';
import {
  Label,
  Icon,
  TransitionablePortal,
  Segment,
  Button,
} from 'semantic-ui-react';
import WikiNews from '../components/WikiNews';

export default class TextClock extends Component {
  state = { open: false };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });
  date = dayjs().format('MMMM D');
  render() {
    return (
      <TransitionablePortal
        closeOnTriggerClick
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        openOnTriggerClick
        trigger={
          <Button as="div" labelPosition="left">
            <Label as="a" basic>
              {this.date}
            </Label>
            <Button icon>
              <Icon name="history" /> in Hisotry
            </Button>
          </Button>
        }
      >
        <Segment
          style={{
            position: 'fixed',
            right: '2rem',
            bottom: '2rem',
            zIndex: 1000,
          }}
        >
          <WikiNews />
        </Segment>
      </TransitionablePortal>
    );
  }
}
