import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import About from './components/About';
// import { HashRouter } from "react-router-dom";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
  BrowserRouter,
} from "react-router-dom"

const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

//   const myStyle = {
//     backgroundImage:
//         "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
//     marginTop: "-70px",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
// };

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' country='in' category='general' />}></Route>
            <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key='general' country='in' category='general' />}></Route>
            <Route path='/bussiness' element={<News setProgress={setProgress} apiKey={apiKey} key='business' country='in' category='bussiness' />}></Route>
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' country='in' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' country='in' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' country='in' category='technology' />}></Route>
            <Route path="/About" element={<About />}></Route>
          </Routes>
        </Router>
      </div>
    )
}
export default App;

