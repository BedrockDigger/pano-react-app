import React from 'react';
import { Button, Divider, Grid, Header, Icon, Label, Modal, Segment } from 'semantic-ui-react';
import genColor from '../utils/genColor';
import './TopHeader.css';

//question: how to use Sticky with fullpage
export default function TopHeader() {
  // var contextRef = createRef()
  return (
    // <Ref innerRef={contextRef}>
    //   <Sticky context={contextRef} pushing>
    <div className="top-header">
      <Segment>
        <Grid verticalAlign='middle'>
          <Grid.Column floated="left" width={4} textAlign="left">
            <Button.Group>
              <Button labelPosition='left' as='a' href='http://de.pano.today/' icon='star' content='PANO' color={genColor()}/>
              <ReuseWelcome />
            </Button.Group>
          </Grid.Column>
          <Grid.Column floated="right" width={12} textAlign="right">
            <Label content="ver." detail="1.0.0_alpha" size="large" />
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
    //   </Sticky>
    // </Ref>
  );
}

function ReuseWelcome() {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button size='tiny' icon><Icon name='info' /></Button>}
    >
      <Modal.Header>Welcome to Pano!</Modal.Header>
      <Modal.Content image>
        <Icon name='star outline' size='massive' color={genColor()} />
        <Modal.Description>
          <Header color='grey'>A start panel for web browsing, a panorama of inspiration.</Header>
          <p>
            Pano is a personal project by BedrockDigger, aka Estel, aimed at a better start-off for daily browsing.
          </p>
          <p>
            Functionalities here are limited but carefully cherry-picked, as to provide a clean experience.
            No more clever instructions are needed, because you're now able to explore Pano with your own eyes.
          </p>
          <p>Pano doesn't steal information from you. Check the code if you're want to be sure about that.</p>
          <p>Code for the frontend and backend of Pano are both licensed under the MIT license, which is available <a href='https://github.com/BedrockDigger/pano-react-app' target='_blank'>here</a>.</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color={genColor()} onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}
