import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Home,Customer,AboutMe,AccountOpen } from './pages'
const App = () => {
  return (
    <BrowserRouter>
    {/* <div className='max-w-screen'> */}
      {/* <Home/>
    <Customer/>
    <AboutMe/> */}
    {/* </div> */}
    <Routes>
    <Route exact path="/" element={<Home />} />
        <Route path="/viewcustomer" element={<Customer />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path='/openaccount' element={<AccountOpen/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

// sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]