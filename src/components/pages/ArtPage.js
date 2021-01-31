/* eslint-disable react/prop-types */
import { connect } from 'dva';
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';
import genColor from '../../utils/genColor';

export default class ArtPage extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="section">
        <div className="home page wrapper">
          <div className="content wrapper">
            <Art />
          </div>
        </div>
      </div>
    );
  }
}

@connect(({ pano }) => ({
  artwork: pano.artwork.data,
}))
class Art extends Component {
  constructor(props) {
    super(props);
    this.state = { lightboxIsOpen: false };
  }

  render() {
    if (!this.props.artwork) {
      return null;
    }
    console.log(this.props.artwork.ImgSrc);
    const { lightboxIsOpen } = this.state;
    return (
      <Segment vertical style={{ marginTop: '10rem' }}>
        <Container textAlign="center" vertical fluid>
          <Grid columns={2} centered verticalAlign="middle" divided>
            <Grid.Column width={6}>
              {lightboxIsOpen && (
                <Lightbox
                  mainSrc={this.props.artwork.imageSrc}
                  onCloseRequest={() =>
                    this.setState({ lightboxIsOpen: false })
                  }
                  enableZoom={false}
                />
              )}
              <Image
                src={this.props.artwork.imageSrc}
                size="medium"
                onClick={() => this.setState({ lightboxIsOpen: true })}
                centered
              />
              <Grid.Column />
              <Grid.Column verticalAlign="middle">
                <Header size="tiny" color="grey" textAlign="center">
                  click artwork to enlarge
                </Header>
              </Grid.Column>
            </Grid.Column>
            <Grid.Column width={10}>
              <Grid columns={2}>
                <Grid.Column width={1} />
                <Grid.Column width={15}>
                  <Grid.Row>
                    <Grid.Row style={{ marginBottom: 20 }}>
                      <Header as="h1">{this.props.artwork.artist}</Header>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: 20, marginBottom: 20 }}>
                      <Header
                        as="h1"
                        color={genColor()}
                        style={{ fontStyle: 'italic' }}
                      >
                        {this.props.artwork.title}
                      </Header>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: '9rem', marginBottom: 10 }}>
                      <Header as="h4" color="grey">
                        {this.props.artwork.medium}
                      </Header>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: '0.5rem' }}>
                      <Header as="h4" color="grey">
                        {this.props.artwork.dimensions}
                      </Header>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: '0.5rem' }}>
                      <Header as="h4" color="grey">
                        {this.props.artwork.collectingInstitution}
                      </Header>
                    </Grid.Row>
                    <Grid.Row>
                      <Button
                        icon
                        labelPosition="left"
                        as="a"
                        color={genColor()}
                        href={this.props.artwork.href}
                        floated="left"
                        target="_blank"
                        style={{ marginTop: '1.5rem' }}
                      >
                        <Icon name="info" />
                        Learn more on artsy.net
                      </Button>
                    </Grid.Row>
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
