// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)

  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(<Counter />, div)

  const [increment, decrement] = div.querySelectorAll('button')
  // const message = div.firstChild.querySelector('div')
  const message = div.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0')
  // 🐨 expect the message.textContent toBe 'Current count: 0'
  // 🐨 click the increment button (💰 increment.click())
  // 🐨 assert the message.textContent
  // 🐨 click the decrement button (💰 decrement.click())
  // 🐨 assert the message.textContent
  //
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
