// import logo from './logo.svg';
// import './App.css';
// import Props from './components/Props';
// function App() {
//   return (
//     <div className="App">
//       {/* <Props name='Bose' job='software developer' placeOfWork='Goggle'/>
//       <Props name='Chris' job='forex' placeOfWork='traderstore'/>
//       <Props name='Chuks' job='co member' placeOfWork='GMC'/>
//        */}
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import State from './components/State'
// import Statetwo from './components/Statetwo'

// const App = () => {
//   return (
//     <div>
//       {/* <State/> */}
//       <Statetwo/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    </BrowserRouter>
    // <div>
    //   <Home/>
    // </div>
  )
}

export default App
