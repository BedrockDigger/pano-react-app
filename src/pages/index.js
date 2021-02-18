/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Home';
import Art from './Art';
import Quote from './Quote';
import fetchData from '../utils/fetchData';
import 'semantic-ui-css/semantic.min.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      artwork: {},
      quote: {},
      todayInHistory: {},
      wordCloud: {},
    };
  }

  async componentDidMount() {
    const data = await fetchData('receptionist', true);
    this.setState(prevState => ({ ...prevState, ...data }));
  }

  render() {
    const s = this.state;
    console.log(this.state);
    return (
      <ReactFullpage
        easing="easeOutExpo"
        scrollingSpeed={500}
        scrollBar={true}
        render={fpSettings => {
          return (
            <ReactFullpage.Wrapper>
              <Home
                todayInHistoryObject={s.todayInHistory.data}
                wordCloudObject={s.wordCloud.data}
                fpMoveTo={n => fpSettings.fullpageApi.moveTo(n)}
              />
              <Art artworkObject={s.artwork.data} />
              <Quote quoteObject={s.quote} />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}
