import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import LoginPage from './pages/loginPage/LoginPage'
import SignUp from './pages/signUp/SignUp'
import HomePage from './pages/home/HomePage'
import Favorite from './pages/favorite/Favorite'
import CashPage from './pages/cash/CashPage'
import Profile from './pages/profile/Profile'
export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route path='home' element={<HomePage />} />
                <Route path='favorites' element={<Favorite />} />
                <Route path='cash' element={<CashPage />} />
                <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='/auth'>
                <Route index path='login' element={<LoginPage />} />
                <Route index path='signup' element={<SignUp />} />
            </Route>
        </Routes>
    )
}
