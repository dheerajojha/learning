import React from 'react'
import { Header, Footer, MobileHeader, Message } from "./components/common"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Casestudy, Coursecatelog, Home, Industry, Login } from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MobileHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/industry/:id' element={<Industry />} />
        <Route path='/casestudy/:id' element={<Casestudy />} />
        <Route path='/course-catelog' element={<Coursecatelog />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Message />
      <Footer />
    </BrowserRouter>
  )
}

export default App