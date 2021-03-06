// testing custom hooks
// http://localhost:3000/counter-hook

import {renderHook, act} from '@testing-library/react-hooks'
import useCounter from '../../components/use-counter'

// 🐨 create a simple function component that uses the useCounter hook
// and then exposes some UI that our test can interact with to test the
// capabilities of this hook
// 💰 here's how to use the hook:
// const UseCounterHookExample = () => {
//   const {count, increment, decrement} = useCounter()
//   return (
//     <div>
//       <div>Current count: {count}</div>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// test('exposes the count and increment/decrement functions', () => {
//   // 🐨 render the component
//   render(<UseCounterHookExample />)
//   // 🐨 get the elements you need using screen
//   const message = screen.getByText(/current count/i)
//   const increment = screen.getByRole('button', {name: /increment/i})
//   const decrement = screen.getByRole('button', {name: /decrement/i})

//   expect(message).toHaveTextContent('Current count: 0')

//   userEvent.click(increment)
//   expect(message).toHaveTextContent('Current count: 1')

//   userEvent.click(decrement)
//   expect(message).toHaveTextContent('Current count: 0')
// })

// test('EC-1 exposes the count and increment/decrement functions', () => {
//   let result
//   function DummyComponent() {
//     result = useCounter()
//     return null
//   }

//   render(<DummyComponent />)
//   expect(result.count).toBe(0)
//   act(() => result.increment())
//   expect(result.count).toBe(1)

//   act(() => result.decrement())
//   expect(result.count).toBe(0)
// })

test('EC-2 exposes the count and increment/decrement functions', () => {
  const {result} = renderHook(useCounter)
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

/* eslint no-unused-vars:0 */
