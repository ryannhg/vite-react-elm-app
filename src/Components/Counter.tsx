import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (<div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      React count is {count}
    </button>
    <p>
      Edit <code>src/Components/Counter.tsx</code> and save to test HMR
    </p>
  </div>)
}

export default Counter