/* eslint-disable react/prop-types */
import { connect } from 'dva';
import React, { Component } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import genColor from '../utils/genColor';
import './Quote.css';

@connect(({ pano }) => ({
  quote: pano.quote,
}))
class Quote extends Component {
  render() {
    console.log(this.props);
    return (
      <Grid container textAlign="justified" columns={2}>
        <Grid.Row textAlign="center">
          <Grid.Column width={2} textAlign="right">
            <Icon name="quote left" size="massive" />
          </Grid.Column>
          <Grid.Column width={14} textAlign="left">
            <Header size="huge" textAlign="justified">
              <Header.Content>
                <p className="quote-content">
                  {this.props.quote ? this.props.quote.content : ''}
                  <Icon
                    className="back-quotation-mark-fix"
                    name="quote right"
                    size="tiny"
                  />
                </p>
                <Header color={genColor()} size="small" textAlign="right">
                  -&nbsp;
                  {this.props.quote ? this.props.quote.speaker : ''}
                </Header>
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Quote;
