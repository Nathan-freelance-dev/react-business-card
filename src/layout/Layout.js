import React from 'react'
import BusinessCard from '../components/Card'

const Layout = ({themeChange}) => {
     return (
          <main>
               <BusinessCard themeClass={themeChange} />
          </main>
     )
}

export default Layout