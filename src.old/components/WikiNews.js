/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { connect } from 'dva';
import React, { Component } from 'react';
import { Feed, Header, Icon, Segment } from 'semantic-ui-react';

@connect(({ pano }) => ({
  todayInHistory: pano.todayInHistory.data,
}))
class WikiNews extends Component {
  constructor(props) {
    super();
    this.state = {
      ready: false,
    };
  }

  render() {
    const h = this.props.todayInHistory;
    if (!h.data) {
      return null;
    }
    let events = h.data.Events;
    let births = h.data.Births;
    let deaths = h.data.Deaths;
    return (
      <div style={{ width: '20rem' }}>
        <Header>Today in history</Header>
        <Feed>
          {events?.map(it => (
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
          {births?.map(it => (
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

          {deaths?.map(it => (
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
          <p>
            Learn more on{' '}
            <a
              href="https://en.wikipedia.org/wiki/Wikipedia:On_this_day/Today"
              target="_blank _noreferrer"
            >
              Wikipedia.
            </a>
          </p>
        </Feed>
      </div>
    );
  }
}

export default WikiNews;
