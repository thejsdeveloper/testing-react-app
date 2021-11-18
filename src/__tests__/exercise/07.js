// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

function Wrapper({children}) {
  return <ThemeProvider initialTheme="light">{children}</ThemeProvider>
}

test('renders with the light styles for the light theme', () => {
  // 🐨 uncomment all of this code and your test will be busted on the next line:
  const Wrapper = ({children}) => {
    return <ThemeProvider initialTheme="light">{children}</ThemeProvider>
  }
  const {rerender} = render(<EasyButton>Easy</EasyButton>, {wrapper: Wrapper})
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the dark theme', () => {
  // 🐨 uncomment all of this code and your test will be busted on the next line:
  const Wrapper = ({children}) => {
    return <ThemeProvider initialTheme="dark">{children}</ThemeProvider>
  }
  const {rerender} = render(<EasyButton>Easy</EasyButton>, {wrapper: Wrapper})
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    backgroundColor: 'black',
    color: 'white',
  `)
})

/* eslint no-unused-vars:0 */
