import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Layout/Layout'
import LoginPage from './pages/loginPage/LoginPage'
import SignUp from './pages/signUp/SignUp'
export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} ></Route>
            <Route index element={<Navigate to='auth/login' />} />
            <Route path='/auth'>
                <Route index path='login' element={<LoginPage />} />
                <Route index path='signup' element={<SignUp />} />
            </Route>
        </Routes>
    )
}
