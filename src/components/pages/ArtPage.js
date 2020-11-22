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
            <div className="art wrapper">
              <Art />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

@connect(({ artwork }) => ({
  artwork,
}))
class Art extends Component {
  constructor(props) {
    super(props);
    this.state = { lightboxIsOpen: false };
  }

  render() {
    const a = this.props.artwork.artwork;
    console.log(a);
    if (!a._links) {
      return null;
    }
    const imageHref = a._links.image.href.replace('{image_version}', 'large');
    const thumbnailHref = a._links.thumbnail.href;
    const { lightboxIsOpen } = this.state;
    return (
      <Segment vertical style={{ marginTop: 100 }}>
        <Container textAlign="center" vertical fluid>
          <Grid columns={2} textAlign="center" verticalAlign="middle" divided>
            <Grid.Column width={8}>
              <Grid.Row>
                {lightboxIsOpen && (
                  <Lightbox
                    mainSrc={imageHref}
                    onCloseRequest={() =>
                      this.setState({ lightboxIsOpen: false })
                    }
                  />
                )}
                <div>
                  <Image
                    src={imageHref}
                    size="large"
                    onClick={() => this.setState({ lightboxIsOpen: true })}
                    floated="right"
                    style={{ marginRight: '7vw' }}
                  />
                  <div style={{ clear: 'both' }}></div>
                </div>
                <Header size="tiny" color="grey" textAlign="center">
                  click the artwork to enlarge
                </Header>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={8}>
              <div style={{ marginLeft: '7vw' }}>
                <Grid.Row style={{ marginBottom: 20 }}>
                  <Header as="h1" textAlign="left">
                    {this.props.artwork.artworkArtist}
                  </Header>
                </Grid.Row>
                <Grid.Row style={{ marginTop: 20, marginBottom: 20 }}>
                  <Header
                    as="h1"
                    color={genColor()}
                    textAlign="left"
                    style={{ fontStyle: 'italic' }}
                  >
                    {a.title}
                  </Header>
                </Grid.Row>
                <Grid.Row style={{ marginTop: 150, marginBottom: 10 }}>
                  <Header as="h3" color="grey" textAlign="left">
                    {a.medium}, {a.dimensions.cm.text}
                  </Header>
                </Grid.Row>
                <Grid.Row style={{ marginTop: 10, marginBottom: 10 }}>
                  <Header as="h3" color="grey" textAlign="left">
                    {a.collecting_institution}
                  </Header>
                </Grid.Row>
                <Grid.Row>
                  <Button
                    icon
                    labelPosition="left"
                    as="a"
                    color={genColor()}
                    href={a._links.permalink.href}
                    floated="left"
                    target="_blank"
                    style={{ marginTop: 10 }}
                  >
                    <Icon name="info" />
                    Learn more on artsy.net
                  </Button>
                </Grid.Row>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
