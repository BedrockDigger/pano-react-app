import React, { Component } from 'react';
import {
  Radio,
  Segment,
  Image,
  Icon,
  Popup,
  Menu,
  Transition,
  Grid,
  Button,
  Header,
  Select,
  Form,
  Container,
} from 'semantic-ui-react';
import fetchData from '../utils/fetchData';
import setAndGet from '../utils/lsSetAndGet';

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      engines: [],
      engineIndex: 0,
      query: '',
      isEngineLogoVisible: true,
      inNewWindow: false,
    };
  }
  async componentDidMount() {
    const engines = await fetchData('/engineCollection.json');
    const oldQuery = setAndGet('searchQuery', '');
    const oldEngineIndex = setAndGet('searchEngineIndex', 0);
    const oldNewWindow = setAndGet('searchInNewWindow', true);
    this.setState({
      engines: engines,
      query: oldQuery,
      engineIndex: oldEngineIndex,
      inNewWindow: oldNewWindow,
    });
  }
  onQueryChange = event => {
    console.log(event.target);
    this.setState({ query: event.target.value });
  };
  onEngineChange = (event, data) => {
    this.setState({ isEngineLogoVisible: false });
    console.log(data.value);
    const currentIndex = this.state.engines.findIndex(
      obj => obj.value === data.value,
    );
    this.setState({ engineIndex: currentIndex });
    setTimeout(() => {
      this.setState({
        isEngineLogoVisible: true,
      });
    }, 200);
  };
  handleFormSubmit = event => {
    const s = this.state;
    if (!s.query) {
      alert('Please fill in the search box.');
      return 0;
    }
    console.log(s.engineIndex);
    const address = s.engines[s.engineIndex].baseString + s.query;
    localStorage.setItem('searchQuery', s.query);
    localStorage.setItem('searchEngineIndex', s.engineIndex);
    localStorage.setItem('searchInNewWindow', s.inNewWindow);
    if (s.inNewWindow) {
      open(address, '_blank');
    } else {
      event.currentTarget.reset();
      open(address, '_self');
    }
  };
  onRadioToggle = () => {
    this.setState(prevState => ({ inNewWindow: !prevState.inNewWindow }));
  };
  render() {
    const s = this.state;
    const engineObject = s.engines[s.engineIndex];
    return (
      <Grid columns={2}>
        <Grid.Column width={4} stretched>
          <Grid>
            <Grid.Row>
              <Menu vertical style={{ width: '100%' }}>
                <Menu.Item>
                  <Grid centered>
                    <Grid.Row style={{ paddingBottom: 0 }}>
                      <Header>Search engine</Header>
                    </Grid.Row>
                    <Grid.Row>
                      <Select
                        label="Search Engine"
                        options={s?.engines}
                        defaultValue={s.engines?.[0]}
                        onChange={this.onEngineChange}
                      />
                    </Grid.Row>
                  </Grid>
                </Menu.Item>
                <Menu.Item>
                  <Grid centered>
                    <Grid.Row>
                      <Radio
                        slider
                        label="Search in new window"
                        value={'233'}
                        checked={s.inNewWindow}
                        onClick={this.onRadioToggle}
                      />
                    </Grid.Row>
                  </Grid>
                </Menu.Item>
              </Menu>
            </Grid.Row>
            <Grid.Row style={{ paddingTop: 0 }}>
              <SocialIcons />
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column width={12} stretched>
          <Segment style={{ padding: '2rem' }}>
            <Popup
              position="top center"
              trigger={
                <Container
                  style={{ textAlign: 'center', paddingBottom: '2rem' }}
                >
                  <Transition
                    visible={s.isEngineLogoVisible}
                    duration={200}
                    animation="pulse"
                  >
                    <Image
                      src={engineObject?.logoImage}
                      style={{
                        height: '15vh',
                        width: 'auto',
                        display: 'inline-block',
                      }}
                    />
                  </Transition>
                </Container>
              }
            >
              {engineObject?.intro}
            </Popup>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Field>
                <Form.Input
                  placeholder="All engines, one Pano."
                  type="input"
                  action="Search"
                  fluid
                  onChange={this.onQueryChange}
                  value={s.query}
                />
              </Form.Field>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

function SocialIcons() {
  return (
    <Segment>
      <Grid centered>
        <Grid.Row style={{ paddingBottom: 0 }}>
          <Header as="h3">Stay connected!</Header>
        </Grid.Row>
        <Grid.Row style={{ paddingTop: 0, paddingBottom: 0 }}>
          <Grid columns={2} textAlign="center" style={{ padding: 0 }}>
            <Grid.Column style={{ paddingRight: 0 }}>
              <Popup
                position="bottom center"
                trigger={
                  <Button color="twitter" compact>
                    <Icon name="twitter" /> Twitter
                  </Button>
                }
                hoverable
                flowing
              >
                <Header
                  as="a"
                  color="blue"
                  href="https://twitter.com/PanoOfficial1"
                  target="_blank _noreferrer"
                >
                  @PanoOfficial1
                </Header>
              </Popup>
            </Grid.Column>
            <Grid.Column style={{ paddingLeft: 0 }}>
              <Popup
                position="bottom center"
                trigger={
                  <Button color="green" compact>
                    <Icon name="wechat" /> WeChat
                  </Button>
                }
                hoverable
                onClick={null}
              >
                <Image src="/wechat.png" />
              </Popup>
            </Grid.Column>
          </Grid>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
