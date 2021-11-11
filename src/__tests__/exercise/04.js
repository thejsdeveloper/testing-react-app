// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  let submittedData
  const handleSubmit = data => {
    submittedData = data
  }
  render(<Login onSubmit={handleSubmit} />)

  const username = 'vikas'
  const password = '123'
  const userNameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)

  userEvent.type(userNameInput, username)
  userEvent.type(passwordInput, password)

  const submitButton = screen.getByRole('button', {name: /submit/i})
  userEvent.click(submitButton)

  expect(submittedData).toEqual({
    username,
    password,
  })
})

/*
eslint
  no-unused-vars: "off",
*/
