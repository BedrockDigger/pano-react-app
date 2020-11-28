/* eslint-disable react/prop-types */
import { connect } from 'dva';
import React, { PureComponent } from 'react';
import ReactWordcloud from 'react-wordcloud';
import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Menu,
  Popup,
  Radio,
  Transition,
} from 'semantic-ui-react';
import genColor from '../../utils/genColor';
import Calendar from '../Calendar';
import './HomePage.css';

@connect(({ artwork }) => ({
  artwork,
}))
class HomePage extends PureComponent {
  domRef;
  constructor(props) {
    super(props);
    this.fpMoveTo = props.fpMoveTo;
    this.domRef = React.createRef();
    this.engineCollection = [
      {
        key: 'google',
        name: 'Google',
        baseString: 'https://www.google.com/search?q=',
        iconName: 'google',
      },
      {
        key: 'bing',
        name: 'Bing',
        baseString: 'https://www.bing.com/search?q=',
        iconName: 'microsoft',
      },
      {
        key: 'duckduckgo',
        name: 'DuckDuckGo',
        baseString: 'https://duckduckgo.com/?q=',
        iconName: 'privacy',
      },
      {
        key: 'baidu',
        name: 'Baidu',
        baseString: 'https://www.baidu.com/s?wd=',
        iconName: 'dont',
      },
    ];
    this.state = {
      engine: this.engineCollection[0],
      query: null,
      isLogoVisible: true,
      searchInNewWindow: false,
      isArrowVisible: false,
      artwork: {},
    };
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioClick = this.handleRadioClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({ type: 'artwork/getData' });
  }

  move = () => {
    // console.log("123")
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

  handleMenuItemClick(e, d) {
    this.setState({ isLogoVisible: false });
    const engineName = d.content.toLowerCase();
    const engineObject = this.engineCollection.find(i => i.key == engineName);
    console.log(engineObject);
    this.setState({
      engine: engineObject,
    });
    setTimeout(() => {
      this.setState({
        isLogoVisible: true,
      });
      console.log(this.state.isLogoVisible);
      console.log(engineObject);
    }, 100);
  }

  handleColorShuffle = () => {
    let offset = localStorage['colorOffset'];
    localStorage.setItem('colorOffset', offset + 1);
  };

  handleFormSubmit(e) {
    const s = this.state;
    const address = s.engine.baseString + s.query;
    if (s.query == null) {
      //todo: made this look nicer (and more politer lol)
      alert('FILL THE DAMNED SEARCH BOX FIRST!');
      return 0;
    }
    if (s.searchInNewWindow) {
      window.open(address, '_blank');
    } else {
      e.currentTarget.reset();
      window.open(address, '_self');
    }
  }

  handleInputChange(e) {
    const queryString = e.target.value;
    this.setState({
      query: queryString,
    });
  }

  handleRadioClick() {
    this.setState(prevState => ({
      searchInNewWindow: !prevState.searchInNewWindow,
    }));
    console.log('state:' + this.state.searchInNewWindow);
  }

  render() {
    const s = this.state;
    console.log(this.props.artwork);
    console.log(s.engine.key);
    return (
      <div onMouseMove={this.move} className="section">
        <div className="home page wrapper">
          <div className="content wrapper">
            <div className="cal wrapper">
              <Calendar />
            </div>
            <div className="search wrapper">
              <Grid centered fluid>
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    <Transition
                      visible={s.isLogoVisible}
                      duration={200}
                      animation="pulse"
                    >
                      <Image>
                        <Icon
                          name={s.engine.iconName}
                          size="massive"
                          color={genColor()}
                        />
                      </Image>
                    </Transition>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Form onSubmit={this.handleFormSubmit}>
                      <Input
                        placeholder="All engines, one Pano."
                        type="input"
                        action="Search"
                        fluid
                        onChange={this.handleInputChange}
                        value={s.query}
                      ></Input>
                    </Form>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <div className="wordcloud">
              <Wordcloud data={this.props.artwork.wordcloud} />
            </div>
          </div>
          <div className="footer">
            <Footer
              menuItemClick={this.handleMenuItemClick}
              radioClick={this.handleRadioClick}
              engine={s.engine.key}
              newWindow={s.searchInNewWindow}
              shuffleColor={this.handleColorshuffle}
            />
          </div>
        </div>
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

function Footer(props) {
  const p = props;
  return (
    <>
      <Popup
        className="footer-icon"
        trigger={<Button circular color="green" icon="wechat" />}
      >
        <Image src="https://s3.ax1x.com/2020/11/22/D3WBZQ.jpg" />
      </Popup>
      <Popup
        className="footer-icon"
        trigger={<Button circular color="twitter" icon="twitter" />}
        hoverable
        flowing
      >
        <Header
          as="a"
          color="blue"
          href="https://twitter.com/pano_today"
          target="_blank _noreferrer"
        >
          @pano_today
        </Header>
      </Popup>
      <span className="custom-divider">|</span>
      <Popup
        trigger={<Button circular icon="setting" className="footer-icon" />}
        position="top left"
        flowing
        hoverable
      >
        <Menu vertical secondary compact>
          <Menu.Item header content="Search settings" />
          <Menu.Item
            content="Google"
            onClick={p.menuItemClick}
            active={p.engine == 'google'}
          />
          <Menu.Item
            content="Bing"
            onClick={p.menuItemClick}
            active={p.engine == 'bing'}
          />
          <Menu.Item
            content="DuckDuckGo"
            onClick={p.menuItemClick}
            active={p.engine == 'duckduckgo'}
          />
          <Menu.Item
            content="Baidu"
            onClick={p.menuItemClick}
            active={p.engine == 'baidu'}
          />
          <Menu.Item fitted>
            <Radio
              label="Search in new tab"
              slider
              checked={p.newWindow}
              onClick={p.radioClick}
            />
          </Menu.Item>
          <Divider />
          <Menu.Item header content="Site settings" />
          <Menu.Item fitted>
            <Button
              icon
              size="small"
              labelPosition="left"
              onClick={p.shuffleColor}
            >
              <Icon name="shuffle" />
              Shuffle accent color
            </Button>
          </Menu.Item>
        </Menu>
      </Popup>
    </>
  );
}

class Wordcloud extends PureComponent {
  render() {
    return (
      <ReactWordcloud
        words={this.props.data}
        size={[100, 800]}
        options={{
          fontSizes: [20, 30],
          rotations: 90,
          rotationAngles: [-90, 0],
        }}
        callbacks={{
          onWordMouseOver: null,
          getWordTooltip: word => '',
          getWordColor: word => '#999',
        }}
      />
    );
  }
}

export default HomePage;
