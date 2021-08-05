import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FrontEndRoutes from './areas'
import HomePage from './features/home'
import './scss/index.scss'

function App() {
  return (
    <Router>
      <Switch>
        <FrontEndRoutes />
      </Switch>
    </Router>
  )
}

export default App
