import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/user_card.jsx'
import ItemCard from './components/item_card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const user = {
    picture: reactLogo,
    first_name: 'John',
    position: 'Developer',
    email: 'test@gmail.com'
  }

  const items = [
    { name: 'Item 1', date: '2023-01-01', description: 'Description for item 1' },
    { name: 'Item 2', date: '2023-01-02', description: 'Description for item 2' },
    { name: 'Item 3', date: '2023-01-03', description: 'Description for item 3' }
  ]

  return (
    <>
      {/* <h1>Vite + React</h1> */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <UserCard user={user} />
      <div>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
      
    </>
  )
}

export default App
