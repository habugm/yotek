
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Service } from './Service'
import { Team } from './Team'
import { Portfolio } from './Portfolio'
import { Blog } from './Blog'
import { Single } from './Single'
import { Contact } from './Contact'


function App() {
  

  return (
  
      <BrowserRouter>
        <Header></Header>
        <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path='/service' element={<Service />}></Route>
    <Route path='/team' element={<Team />}></Route>
    <Route path='/portfolio' element={<Portfolio />}></Route>
    <Route path='/blog' element={<Blog />}></Route>
    <Route path='/single' element={<Single />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    
      </Routes>
        <Footer></Footer>
      
     
      </BrowserRouter>
  )
}

export default App
