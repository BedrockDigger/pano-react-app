/* eslint-disable react/prop-types */
import { connect } from 'dva';
import React, { Component } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import genColor from '../utils/genColor';
import './Quote.css';

@connect(({ artwork }) => ({
  artwork,
}))
class Quote extends Component {
  render() {
    console.log(this.props);
    return (
      <Grid container textAlign="justified" columns={2}>
        <Grid.Row textAlign="center">
          <Grid.Column width={3} textAlign="right">
            <Icon name="quote left" size="massive" />
          </Grid.Column>
          <Grid.Column width={13} textAlign="left">
            <Header size="huge">
              <Header.Content>
                <p className="quote-content">
                  {this.props.artwork.quoteContent}
                  <Icon
                    className="back-quotation-mark-fix"
                    name="quote right"
                    size="tiny"
                  />
                </p>
                <Header color={genColor()} size="small" textAlign="right">
                  -&nbsp;
                  {this.props.artwork.quoteSpeaker}
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
