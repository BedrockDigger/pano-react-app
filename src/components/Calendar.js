import React, { Component } from 'react'
import { Segment, Card, Progress, Header, Grid, Image, Button, Popup, Container } from 'semantic-ui-react'
import Clock from 'react-live-clock';
import WikiNews from '../components/WikiNews'

export default function TextClock() {
  const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone

  const timezone = getTimezone()
  return (
    <Grid
      centered
      fluid
    >
      <Grid.Column width={2} floated="right">

        <Popup
          flowing hoverable position="bottom right"
          trigger={
            <Segment textAlign="center">
              <Header>
                <Clock
                  format="MMM D, YYYY"
                  timezone={timezone}
                />
              </Header>
            </Segment>
          }
        >
          <WikiNews />
        </Popup>

      </Grid.Column>
    </Grid>
  )
}