import React from 'react'

import Footer from './footer/Footer'
import NavScroll from './Header/Navbar'

const Layout = (props) => {
  return (
    <>
      <NavScroll/>
      {props.children}
      {/* {Location.pathname !== '/Home' && <Footer /> }  */}
           <Footer/>
    </>
  )
}

export default Layout;
