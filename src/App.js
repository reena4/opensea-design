import React from 'react'
import Layout from './Components/layout/Layout'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
//import Explore from './Explore';
import Home from './Home'

import Stats from './Stats';
import Resources from './Resources';
import Create from './Create';
const App = () => {
  return (
    <>  
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<Stats/>} />
            <Route exact path="/service" element={<Resources/>} />
            <Route exact path="/contact" element={<Create />} />
           </Routes>
        </Layout>
      </Router>
    </>
    
  )
}

export default App
