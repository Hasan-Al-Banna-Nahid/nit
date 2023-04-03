import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Home from './Components/Header/Home'

function App() {
  const navigation = useNavigation();
  return (

    <div className="App">
      <Home />
      <div>{navigation.state === "loading" && <div className="spinner-border text-danger d-flex justify-content-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}</div>
      <Outlet />
    </div>
  )
}

export default App
