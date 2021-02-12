import React, { Component } from 'react';
import { TransitionablePortal, Button, Segment, Header, Feed, Placeholder, Icon } from 'semantic-ui-react';
import dayjs from 'dayjs';

export default class HistoryPortal extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  onButtonClick = () => {
    this.setState((prevState) => ({ open: !prevState.open }))
  }
  onPortalClose = () => {
    this.setState({ open: false })
  }
  render() {
    const date = dayjs().format('MMMM D');
    return (
      <div>
        <Button
          color='grey'
          basic={this.state.open ? true : false}
          icon={this.state.open ? 'close' : 'history'}
          label={{ basic: false, content: date, pointing: false }}
          content={this.state.open ? 'Close' : ' in History'}
          labelPosition='left'
          onClick={this.onButtonClick}
        />
        <TransitionablePortal onClose={this.onPortalClose} open={this.state.open}>
          <Segment color='grey' style={{ position: 'fixed', right: '2rem', bottom: '2rem', width: '25vw', zIndex: 1000 }}>
            <Header>Today in history</Header>
            {this.props.todayInHistoryObject ?
              <Feed>
                {this.props.todayInHistoryObject.data.Events?.map(it => (
                  <Feed.Event>
                    <Feed.Label>
                      <Icon name="newspaper" />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Date>{it.year}</Feed.Date>
                      <Feed.Summary>{it.text}</Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                ))}
                {this.props.todayInHistoryObject.data.Births?.map(it => (
                  <Feed.Event>
                    <Feed.Label>
                      <Icon name="birthday" />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Date>{it.year}</Feed.Date>
                      <Feed.Summary>{it.text + ' was born.'}</Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                ))}
                {this.props.todayInHistoryObject.data.Deaths?.map(it => (
                  <Feed.Event>
                    <Feed.Label>
                      <Icon name="bed" />
                    </Feed.Label>
                    <Feed.Content>
                      <Feed.Date>{it.year}</Feed.Date>
                      <Feed.Summary>{it.text + ' died.'}</Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                ))}
              </Feed>
              :
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
              </Placeholder>
            }
            <p>
              Learn more on{' '}
              <a
                href="https://en.wikipedia.org/wiki/Wikipedia:On_this_day/Today"
                target="_blank _noreferrer"
              >
                Wikipedia.
            </a>
            </p>
          </Segment>
        </TransitionablePortal>
      </div>
    )
  }
}