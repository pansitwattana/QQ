import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Card from './commons/Card'
import Header from './commons/Header'

const Background = styled.div`
  background-color: #f1f2f2;
  width: 100%;
  height: 100%;
`

const Dashboard = styled.div`
  display: flex;
  flex-direction: row;
  height: inherit;
`

const Home = () => (
  <Background>
    <Header text="" />
    <Dashboard>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Dashboard>
  </Background>
)

export default withRouter(Home)
