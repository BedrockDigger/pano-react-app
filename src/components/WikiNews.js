import React, { Component } from 'react'
import { Feed, Placeholder, Grid, Input, Image, Dropdown, Transition, Popup, Item, Icon, Header } from 'semantic-ui-react'
import { connect } from 'dva'

@connect(({ artwork }) => ({
  artwork
}))
export default class WikiNews extends Component {
  constructor(props) {
    super()
    this.state = {
      ready: false
    }
  }


  render() {
    const h = this.props.artwork.history
    if (!h.data) {
      return null
    }
    var date = h.date
    var events = h.data.Events
    var births = h.data.Births
    var deaths = h.data.Deaths
    return (
      <div style={{ width: 300 }}>
        <Header>Today in history</Header>
        <Feed>
          {
            events.map((it) => (
              <Feed.Event>
                <Feed.Label>
                  <Icon name="newspaper" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    {it.text}
                  </Feed.Summary>
                  <Feed.Date>
                    {date + ", " + it.year}
                  </Feed.Date>
                </Feed.Content>
              </Feed.Event>
            ))
          }
          {
            births.map((it) => (
              <Feed.Event>
                <Feed.Label>
                  <Icon name="birthday" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    {it.text + " was born."}
                  </Feed.Summary>
                  <Feed.Date>
                    {date + ", " + it.year}
                  </Feed.Date>
                </Feed.Content>
              </Feed.Event>
            ))
          }

          {
            deaths.map((it) => (
              <Feed.Event>
                <Feed.Label>
                  <Icon name="bed" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    {it.text + " died."}
                  </Feed.Summary>
                  <Feed.Date>
                    {date + ", " + it.year}
                  </Feed.Date>
                </Feed.Content>
              </Feed.Event>
            ))
          }
          <p>Learn more on <a href="https://en.wikipedia.org/wiki/Wikipedia:On_this_day/Today">Wikipedia.</a></p>
        </Feed>
      </div>
    )
  }
}