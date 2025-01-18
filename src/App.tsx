
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { About } from './Components/About'


function App() {
  

  return (
  
      <BrowserRouter>
        <Header></Header>
        <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About />}></Route>
      </Routes>
        <Footer></Footer>
      
     
      </BrowserRouter>
  )
}

export default App
