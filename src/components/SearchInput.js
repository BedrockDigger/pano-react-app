import React, { Component } from 'react';
import { Form, Segment, Image, Container, Popup, Menu, Transition, Grid, Button, Header } from 'semantic-ui-react';
import fetchData from '../utils/fetchData'
import setAndGet from '../utils/lsSetAndGet'

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      engines: [],
      engineIndex: 0,
      query: '',
      isEngineLogoVisible: true,
      inNewWindow: false,
    }
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
      inNewWindow: oldNewWindow
    });
  }
  onQueryChange = (event) => {
    console.log(event.target)
    this.setState({ query: event.target.value })
  }
  onEngineChange = (event, data) => {
    this.setState({ isEngineLogoVisible: false });
    console.log(data.value)
    const currentIndex = this.state.engines.findIndex((obj) => obj.value === data.value);
    this.setState({ engineIndex: currentIndex })
    setTimeout(() => {
      this.setState({
        isEngineLogoVisible: true,
      });
    }, 300);
  }
  handleFormSubmit = (event) => {
    const s = this.state;
    if (!s.query) {
      alert('Please fill in the search box.');
      return 0;
    }
    console.log(s.engineIndex)
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
  }
  onRadioToggle = () => {
    this.setState((prevState) => ({ inNewWindow: !prevState.inNewWindow }))
  }
  render() {
    const s = this.state;
    const engineObject = s.engines[s.engineIndex];
    return (
      <Form onSubmit={this.handleFormSubmit} style={{ height: '50vh' }}>
        <Grid columns={3}>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Grid>
              <Grid.Row>
                <Form.Field>
                  <Menu vertical style={{ width: '20rem' }}>
                    <Menu.Item>
                      <Form.Select
                        label='Search Engine'
                        options={s?.engines}
                        defaultValue={s.engines?.[0]}
                        onChange={this.onEngineChange}
                      />
                    </Menu.Item>
                    <Menu.Item>
                      <Form.Radio
                        toggle
                        label='Search in New Window'
                        value={false}
                        checked={s.inNewWindow}
                        onChange={this.onRadioToggle}
                      />
                    </Menu.Item>
                  </Menu>
                </Form.Field>
              </Grid.Row>
              <Grid.Row>
                <SocialIcons />
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment style={{ padding: '2rem' }}>
              <Popup
                position='top center'
                trigger={<Container style={{ textAlign: 'center', paddingBottom: '2rem' }}>
                  <Transition
                    visible={s.isEngineLogoVisible}
                    duration={300}
                    animation="pulse"
                  >
                    <Image src={engineObject?.logoImage}
                      style={{ height: '15vh', width: 'auto', display: 'inline-block', }}
                    />
                  </Transition>
                </Container>
                }
              >
                {engineObject?.intro}
              </Popup>
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
            </Segment>
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid>
      </Form>
    )
  }
}

function SocialIcons() {
  return (
    <Segment style={{
      width: '20rem',
      bottom: 0
    }}>
      <Grid columns={3} verticalAlign='center'>
        <Grid.Column width={10} style={{ display: 'table-cell', verticalAlign: 'center' }}>
          <Header as='h3'>Stay connected!</Header>
        </Grid.Column>
        <Grid.Column width={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <Popup
            position='bottom center'
            trigger={<Button circular color="twitter" icon="twitter" />}
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
        <Grid.Column width={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <Popup
            position='bottom center'
            trigger={<Button circular color="green" icon="wechat" />}
            hoverable
          >
            <Image src="/wechat.png" />
          </Popup>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}