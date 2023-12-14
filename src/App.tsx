import './App.css'
import elmLogo from './assets/elm.png'
import viteLogo from '/vite.svg'
import Counter from './Components/Counter.elm'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://elm-lang.org" target="_blank">
          <img src={elmLogo} className="logo react" alt="Elm logo" />
        </a>
      </div>
      <h1>Vite + Elm</h1>
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and Elm logos to learn more
      </p>
    </>
  )
}

export default App
