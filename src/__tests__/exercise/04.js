// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

import * as faker from 'faker'
import {build, fake} from '@jackfranklin/test-data-bot'

// const buildLoginForm = ({username, password} = {}) => {
//   return {
//   }
// }

const buildLoginForm = build('User', {
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit} />)

  const {username, password} = buildLoginForm()
  const userNameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)

  userEvent.type(userNameInput, username)
  userEvent.type(passwordInput, password)

  const submitButton = screen.getByRole('button', {name: /submit/i})
  userEvent.click(submitButton)

  expect(handleSubmit).toHaveBeenCalledWith({username, password})
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
