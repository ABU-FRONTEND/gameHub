import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import LoginPage from '../pages/loginPage/LoginPage'
// import SignUp from '../pages/signUp/SignUp'
export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index path='login' element={<LoginPage />} />
                {/* <Route index path='signup' element={<SignUp />} /> */}
            </Route>
        </Routes>
    )
}
