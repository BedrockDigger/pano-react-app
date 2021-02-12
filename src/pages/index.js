/* eslint-disable react/no-deprecated */
import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './Home';
import Art from './Art';
import Quote from './Quote';
import fetchData from '../utils/fetchData'
import calcColor from '../utils/calcColor'
import 'semantic-ui-css/semantic.min.css';

//TODO set standards for:
//1.states
//2.localStorage
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      artwork: {},
      quote: {},
      todayInHistory: {},
      wordCloud: {},
      color: 'grey'
    }
  }

  async componentDidMount() {
    const data = await fetchData('receptionist')
    const imageUrl = data.artwork.data.imageSrc;
    const accentColor = calcColor(imageUrl);
    this.setState((prevState) => ({ ...prevState, ...data }));
    this.setState({ color: accentColor });
  }

  render() {
    const s = this.state;
    console.log(this.state)
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
                color={s.color}
              />
              <Art
                artworkObject={s.artwork.data}
                color={s.color}
              />
              <Quote
                quoteObject={s.quote}
                color={s.color}
              />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}