import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default Layout
