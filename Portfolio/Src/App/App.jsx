import Home from '../Pages/Home.jsx';
import Works from '../Pages/Works.jsx';
import AboutMe from '../Pages/AboutMe.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element="" /> */}
        <Route path='/' element={<Home />}/>
        <Route path='/works' element={<Works />}/>
        <Route path='/about-me' element={<AboutMe />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
