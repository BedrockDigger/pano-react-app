import React, { Component } from 'react';
import {
  Grid,
  Header,
  Icon,
  Button,
  Placeholder,
  Container,
} from 'semantic-ui-react';
import genColor from '../utils/genColor';

export default class Quote extends Component {
  constructor() {
    super();
  }

  render() {
    if (!this.props.quoteObject) {
      return null;
    }
    const { speaker, content } = this.props.quoteObject;
    return (
      <div className="section">
        <Grid container textAlign="justified" columns={2}>
          <Grid.Row textAlign="center" columns={2}>
            <Grid.Column width={2} textAlign="right">
              <Icon name="quote left" size="massive" color={genColor()} />
            </Grid.Column>
            <Grid.Column width={14} />
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={2} />
            <Grid.Column width={14} textAlign="left">
              <Header size="huge" textAlign="justified">
                <Header.Content>
                  <p className="quote-content">
                    {content}
                    <Icon
                      style={{ verticalAlign: 'super' }}
                      name="quote right"
                      size="tiny"
                    />
                  </p>
                  <Header size="small" textAlign="right" color={genColor()}>
                    -&nbsp;
                    {speaker}
                  </Header>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

function Footer() {
  return (
    <div
      style={{
        textAlign: 'center',
        position: 'absolute',
        bottom: '1rem',
        width: '100%',
      }}
    >
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
