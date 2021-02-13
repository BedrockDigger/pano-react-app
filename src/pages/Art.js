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
  Placeholder,
  Segment,
} from 'semantic-ui-react';
import genColor from '../utils/genColor';

export default class Art extends Component {
  constructor() {
    super();
    this.state = { lightboxIsOpen: false };
  }

  render() {
    if (!this.props.artworkObject) {
      return null;
    }
    const c = genColor();
    const { lightboxIsOpen } = this.state;
    return (
      <div className="section">
        <Container textAlign="center" vertical fluid>
          <Grid
            columns={2}
            centered
            verticalAlign="middle"
            divided
            style={{ width: '100%' }}
          >
            <Grid.Column width={8}>
              {lightboxIsOpen && (
                <Lightbox
                  mainSrc={this.props.artworkObject.imageSrc}
                  onCloseRequest={() =>
                    this.setState({ lightboxIsOpen: false })
                  }
                  enableZoom={false}
                />
              )}
              <Segment style={{ width: '50%', margin: 'auto auto' }}>
                <Image
                  src={this.props.artworkObject.imageSrc}
                  size="medium"
                  onClick={() => this.setState({ lightboxIsOpen: true })}
                  centered
                />
              </Segment>
              <Grid.Column
                verticalAlign="middle"
                style={{ paddingTop: '10px' }}
              >
                <Header size="tiny" color="grey" textAlign="center">
                  click to enlarge
                </Header>
              </Grid.Column>
            </Grid.Column>
            <Grid.Column width={8}>
              <Grid columns={2}>
                <Grid.Column width={1} />
                <Grid.Column width={15}>
                  <Grid.Row>
                    <Grid.Row style={{ marginBottom: 20 }}>
                      <Header as="h1">{this.props.artworkObject.artist}</Header>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: 20, marginBottom: 20 }}>
                      <Header as="h1" color={c} style={{ fontStyle: 'italic' }}>
                        {this.props.artworkObject.title}
                      </Header>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: '9rem', marginBottom: 10 }}>
                      <Header as="h4" color="grey">
                        {this.props.artworkObject.medium}
                      </Header>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: '0.5rem' }}>
                      <Header as="h4" color="grey">
                        {this.props.artworkObject.dimensions}
                      </Header>
                    </Grid.Row>
                    <Grid.Row style={{ marginTop: '0.5rem' }}>
                      <Header as="h4" color="grey">
                        {this.props.artworkObject.collectingInstitution}
                      </Header>
                    </Grid.Row>
                    <Grid.Row>
                      <Button
                        icon
                        labelPosition="left"
                        as="a"
                        color={c}
                        href={this.props.artworkObject.href}
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
      </div>
    );
  }
}
