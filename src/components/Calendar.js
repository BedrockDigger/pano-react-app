import React from 'react';
import Clock from 'react-live-clock';
import { Header, Popup, Segment } from 'semantic-ui-react';
import WikiNews from '../components/WikiNews';

export default function TextClock() {
  const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

  const timezone = getTimezone();
  return (
    <Popup
      flowing
      hoverable
      position="bottom right"
      trigger={
        <Segment textAlign="center" floated='right' style={{ width: 200, marginTop: 20, marginRight: 50 }}>
          <Header>
            <Clock format="MMM D, YYYY" timezone={timezone} />
          </Header>
        </Segment>
      }
    >
      <WikiNews />
    </Popup>
  );
}
