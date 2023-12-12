import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Login from './pages/Login'
import AirMap from './pages/AirMap'
import Profile from './pages/Profile'
import Guidedk from './pages/Guidedk'
import Guideeng from './pages/Guideeng'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
return (
  <Router>
    <div className="App">
    <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Company" element={<Company />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/AirMap" element={<AirMap />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Guidedk" element={<Guidedk />}></Route>
          <Route path="/Guideeng" element={<Guideeng />}></Route>

          

        </Routes>
      </div>
    </div>
    <Footer />
  </Router>  
)
}


export default App
