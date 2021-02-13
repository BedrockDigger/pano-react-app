import React, { Component } from 'react';
import {
  Button,
  TransitionablePortal,
  Icon,
  Image,
  Card,
} from 'semantic-ui-react';

//IntroPortal includes Intro Button and the Portal
export default class IntroPortal extends Component {
  constructor() {
    super();
    if (!localStorage.getItem('introPortalViewCount')) {
      localStorage.setItem('introPortalViewCount', 0);
    }
    const oldViewCount = localStorage.getItem('introPortalViewCount');
    this.state = {
      viewCount: oldViewCount,
      open: false,
    };
  }
  onButtonClick = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
  onPortalClose = () => {
    this.setState(prevState => ({
      open: false,
      viewCount: parseInt(prevState.viewCount) + 1,
    }));
    localStorage.setItem('introPortalViewCount', this.state.viewCount);
  };

  render() {
    return (
      <div>
        <Button
          color="grey"
          basic={this.state.open ? true : false}
          icon={this.state.open ? 'close' : 'info'}
          content={this.state.open ? 'Close' : 'Pano'}
          labelPosition="right"
          onClick={this.onButtonClick}
        />
        <TransitionablePortal
          onClose={this.onPortalClose}
          open={this.state.open || this.state.viewCount == 0}
        >
          <Card
            style={{
              position: 'fixed',
              right: '2rem',
              bottom: '2rem',
              width: '25vw',
              zIndex: 1000,
            }}
            color="grey"
          >
            <Image src="/logo.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Pano</Card.Header>
              <Card.Meta>
                A start panel for web browsing, a panorama of inspiration.
              </Card.Meta>
              <Card.Description>
                <p>
                  Pano is a personal project by Zhang Shuhao, aimed at a better
                  start-off for daily browsing.
                </p>
                <p>
                  Functionalities here are limited but carefully cherry-picked,
                  so as to provide a clean experience. No more clever
                  instructions are needed, because you&apos;re now able to
                  explore Pano with your own eyes.
                </p>
                <p>
                  Pano doesn&apos;t steal information from you. Check the code
                  if you want to be sure about that.
                </p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a
                href="https://github.com/BedrockDigger/pano-react-app"
                target="_blank _noreferrer"
              >
                <Icon name="github" />
                GitHub Repo
              </a>
            </Card.Content>
          </Card>
        </TransitionablePortal>
      </div>
    );
  }
}
