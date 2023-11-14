import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import AirMap from './pages/AirMap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
return (
  <Router>
      <Navbar />
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Company" element={<Company />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/AirMap" element={<AirMap />}></Route>
          

        </Routes>
      </div>
    </div>
  </Router>  
)
}


export default App
