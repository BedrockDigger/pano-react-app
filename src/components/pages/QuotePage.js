import React, { Component } from 'react';
import { Button, Header, Icon } from 'semantic-ui-react';
import Quote from '../Quote';
import './QuotePage.css';

export default class ArtPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="section">
        <div className="home page wrapper">
          <div className="content wrapper">
            <div className="quote wrapper">
              <Quote />
            </div>
          </div>
          <div className="footer wrapper">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

function Footer(props) {
  const p = props;
  return (
    <div style={{ textAlign: 'center' }}>
      <Header
        as="span"
        size="tiny"
        color="grey"
        style={{ verticalAlign: 'middle', marginRight: 10 }}
      >
        Pano is an open-source search engine with daily inspiration by Zhang
        Shuhao. A start panel for web browsing, a panorama of inspiration.
        Powered by React × Feathers.
      </Header>
      <Button
        as="a"
        icon
        color="black"
        href="https://github.com/BedrockDigger/pano-react-app"
        target="_blank"
        circular
      >
        <Icon name="github" />
      </Button>
    </div>
  );
}
