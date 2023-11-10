import Navbar from './components/Navbar'
import Home from './pages/Home'
import Create from './pages/Create'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
return (
  <Router>
      <Navbar />
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path="/Create" element={<Create />}>

          </Route>

        </Routes>
      </div>
    </div>
  </Router>  
)
}


export default App
