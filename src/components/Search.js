import React, { Component } from 'react'
import { Icon, Form, Grid, Input, Image, Dropdown, Transition, Popup } from 'semantic-ui-react'

export default function Search(props) {
  const p = props
  const s = p.hpState
  return (
    <Grid centered fluid>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <LogoIcon name={s.engine.iconName} vis={s.isLogoVisible} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <Form
            onSubmit={p.formSubmit}
          >
            <Input
              placeholder='All engines, one Pano.'
              type="input"
              action="Search"
              fluid
              onChange={p.inputChange}
              value={p.value}
            ></Input>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

function LogoIcon(props) {
  const p = props
  return (
    <Transition visible={p.vis} duration={200} animation="pulse">
      <Image>
        <Icon name={p.name} size="massive" color="blue" />
      </Image>
    </Transition>
  )
}