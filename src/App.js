import './App.css'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Sidebar from './components/SideBar/Sidebar'
import Widget from './components/Widget/Widget'
import './scss/index.scss'

function App() {
  return (
    <div className='app'>
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  )
}

export default App
