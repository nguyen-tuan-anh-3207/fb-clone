import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FrontEndRoutes from './areas'
import Header from './components/Header/Header'
import './scss/index.scss'

function App() {
  return (
    <div className='app'>
      <Header />

      <div className='app__body'>
        <Router>
          <Switch>
            <FrontEndRoutes />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
