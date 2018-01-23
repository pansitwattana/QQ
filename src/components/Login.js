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
  max-width: 300px;
`
// const Input = styled.input`
//   margin: 10px;
// `

// const Submit = styled.input`

// `

const styles = {
  button: {
    width: '100%',
    backgroundColor: '#45b383',
    fontSize: '10px',
    color: '#fff',
    fontWeight: 'bold',
    height: '40px',
    borderRadius: 2,
    borderWidth: 0,
  },
  input: {
    backgroundColor: '#E4E7EC',
    padding: 24,
    margin: 0,
    borderWidth: 0,
    borderRadius: 2,
    color: '#888988',
  }
}


const Login = () => (
  <Wrapper>
    <Form>
      <Form.Item>
        <Input style={styles.input} placeholder="Username" />
      </Form.Item>
      <Form.Item>
        <Input style={styles.input} placeholder="Password" />
      </Form.Item>
      <Form.Item
        wrapperCol={{ span: 8, offset: 8 }}
      >
        <Button style={styles.button}>ลงชื่อเข้าใช้</Button>
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
