import React from 'react'

import SideBoxLeft from '../components/main/SideBoxLeft'
import Contact from './Contact'
import Home from './Home'

export default function index() {
  return (
    <>
        <main className="main-root">
            <SideBoxLeft />
            <Contact></Contact>
            <Home></Home>
        </main>
    </>
  )
}
