import React, { Component, PureComponent } from 'react';
import { Grid, Segment, Container, Header, Icon, Button, Menu, Label, Popup, Image } from 'semantic-ui-react';
import ReactWordcloud from 'react-wordcloud';
import IntroPortal from '../components/IntroPortal';
import HistoryPortal from '../components/HistoryPortal';
import SearchInput from '../components/SearchInput';
import './Home.css';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className='section'>
        <Grid style={{ width: '100%', height: '100%' }}>
          <Grid.Row >
            <Container>
              <Topbar todayInHistoryObject={this.props.todayInHistoryObject} />
            </Container>
          </Grid.Row>
          <Grid.Row style={{ height: '62vh' }}>
            <Container style={{ width: '85%' }}>
              <SearchInput />
            </Container>
          </Grid.Row>
        </Grid>
        <Wordcloud wordCloudObject={this.props.wordCloudObject} />
      </div>
    )
  }
}
function Topbar(props) {
  return (
    <Menu stackable>
      <Menu.Item style={{ width: '10.25rem' }}>
        <IntroPortal />
      </Menu.Item>
      <Menu.Item >
        <HistoryPortal todayInHistoryObject={props.todayInHistoryObject} />
      </Menu.Item>
      <Menu.Item position='right'>
        {/* TODO update href */}
        <Label as='a' href='https://github.com/BedrockDigger/pano-react-app/commit/d16a7b43fb274edf2fa2dd45ed372ad0d79eff3b'
          target='_blank _noreferrer' size='big' style={{ margin: 'auto auto' }} color={this.props.color}
        >
          <Icon name='code branch' /> v 1.2.0
        </Label>
      </Menu.Item>
    </Menu>
  )
}

class Wordcloud extends PureComponent {
  render() {
    console.log(this.props)
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    return (
      <ReactWordcloud
        words={this.props.wordCloudObject}
        size={[viewportWidth, viewportHeight * 0.1]}
        options={{
          fontSizes: [20, 30],
          rotations: 90,
          rotationAngles: [-90, 0],
        }}
        callbacks={{
          onWordMouseOver: null,
          getWordTooltip: () => '',
          getWordColor: () => '#999',
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          zIndex: '-1'
        }}
      />
    );
  }
}