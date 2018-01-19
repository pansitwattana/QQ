import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  background-color: #fff;
  margin-bottom: 5px;
  height: 5%;
  width: 100%;
  text-align: center;
`

const Header = ({ text }) => (
  <Bar>{text}</Bar>
)

export default Header
