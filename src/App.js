import { Router, Switch, Route } from 'react-router-dom'
import FrontEndRoutes from './areas'
import HomePage from './features/home'
import './scss/index.scss'

function App() {
  return (
    <>
      <HomePage />
      {/* <Router>{FrontEndRoutes()}</Router> */}
    </>
  )
}

export default App
