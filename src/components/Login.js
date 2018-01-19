import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Form, Input, Button } from 'antd';

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
// `
const Wrapper = styled.div`
  padding: 20px;
  margin: auto;
  max-width: 400px;
`
// const Input = styled.input`
//   margin: 10px;
// `

// const Submit = styled.input`

// `

const Login = () => (
  <Wrapper>
    <Form style={{ display: 'flex', flexDirection: 'column' }}>
      <Form.Item>
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  </Wrapper>
  // <Form>
  //   <Input placeholder="๊Username" />
  //   <Input type="password" placeholder="Password" />
  //   <Submit type="submit" />
  // </Form>
)

export default withRouter(Login)
