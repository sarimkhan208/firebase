import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { auth } from './firebase'

const MainRoutes = ({name}) => {
  


  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home name={name}/>}></Route>
            <Route path="/signin" element={<SignIn/>} ></Route>
            <Route path="signup" element={<SignUp/>} ></Route>
        </Routes>
    </Router>
  )
}

export default MainRoutes
