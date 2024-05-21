import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export default function Layout() {
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/auth/login')
        }
    })
    return (
        <div>
            are you sexy?????
            <Outlet />
        </div>
    )
}
