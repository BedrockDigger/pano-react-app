/* eslint-disable react/no-deprecated */
import ReactFullpage from '@fullpage/react-fullpage';
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import ArtPage from '../components/pages/ArtPage';
import HomePage from '../components/pages/HomePage';
import QuotePage from '../components/pages/QuotePage';
import TopHeader from '../components/TopHeader';
import Welcome from '../components/WelcomeModal';
import './index.less';

class App extends Component {
  constructor(props) {
    super();
  }

  componentWillMount() {
    let visited = localStorage['alreadyVisited'];
    if (visited) {
      this.setState({ newUser: false });
    } else {
      localStorage['alreadyVisited'] = true;
      this.setState({ newUser: true });
    }
  }
  render() {
    const s = this.state;
    return (
      <>
        {s.newUser && <Welcome />}
        <ReactFullpage
          easing="easeOutExpo"
          scrollingSpeed={500}
          scrollBar={true}
          render={fpSettings => {
            return (
              <ReactFullpage.Wrapper>
                <HomePage fpMoveTo={n => fpSettings.fullpageApi.moveTo(n)} />
                <ArtPage />
                <QuotePage />
              </ReactFullpage.Wrapper>
            );
          }}
        />
        <TopHeader />
      </>
    );
  }
}

export default App;
