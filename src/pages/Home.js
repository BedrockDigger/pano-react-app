import React, { PureComponent } from 'react';
import {
  Grid,
  Segment,
  Container,
  Header,
  Icon,
  Button,
  Menu,
  Label,
  Transition,
  Image,
} from 'semantic-ui-react';
import ReactWordcloud from 'react-wordcloud';
import IntroPortal from '../components/IntroPortal';
import HistoryPortal from '../components/HistoryPortal';
import SearchInput from '../components/SearchInput';
import genColor from '../utils/genColor';
import './Home.css';

export default class Home extends PureComponent {
  constructor(props) {
    super();
    this.fpMoveTo = props.fpMoveTo;
    this.domRef = React.createRef();
    this.state = { isArrowVisible: false };
  }
  move = () => {
    if (!this.state.isArrowVisible) {
      this.setState({ isArrowVisible: true }, this.arrowDisappear);
    }
  };
  timer;
  arrowDisappear = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.setState({ isArrowVisible: false });
      this.timer = null;
    }, 2000);
  };
  render() {
    const s = this.state;
    return (
      <div className="section" onMouseMove={this.move}>
        <Grid style={{ width: '100%', height: '100%' }}>
          <Grid.Row>
            <Container style={{ width: '90%' }}>
              <Topbar todayInHistoryObject={this.props.todayInHistoryObject} />
            </Container>
          </Grid.Row>
          <Grid.Row style={{ height: '62vh' }}>
            <Container style={{ width: '80%' }}>
              <SearchInput />
            </Container>
          </Grid.Row>
        </Grid>
        <Wordcloud wordCloudObject={this.props.wordCloudObject} />
        <Transition visible={s.isArrowVisible} duration={100}>
          <div
            style={{
              position: 'fixed',
              bottom: 25,
              width: '50%',
              left: '25%',
              textAlign: 'center',
            }}
          >
            <Button
              circular
              icon="angle double down"
              onClick={() => {
                this.setState({ isArrowVisible: false }, () =>
                  this.fpMoveTo(2),
                );
              }}
            />
          </div>
        </Transition>
      </div>
    );
  }
}
function Topbar(props) {
  const c = genColor();
  return (
    <Menu stackable>
      <Menu.Item style={{ width: '10.25rem' }}>
        <IntroPortal />
      </Menu.Item>
      <Menu.Item>
        <HistoryPortal todayInHistoryObject={props.todayInHistoryObject} />
      </Menu.Item>
      <Menu.Item position="right">
        <Label
          as="a"
          href="https://github.com/BedrockDigger/pano-react-app/commit/c12e16183693ffd3f81e72c1af1fe777f82c02b4"
          target="_blank _noreferrer"
          size="big"
          style={{ margin: 'auto auto' }}
          color={c}
        >
          <Icon name="code branch" /> v 1.2.0
        </Label>
      </Menu.Item>
    </Menu>
  );
}

class Wordcloud extends PureComponent {
  render() {
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
          zIndex: '-1',
        }}
      />
    );
  }
}
