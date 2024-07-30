import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'
import { SignUpPage } from '../pages/signup'
import { DashBoardHome } from '../pages/dashboard/home'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cadastrar' element={<SignUpPage />} />
            <Route path='/dashboard'>
                <Route path='/dashboard' element={<DashBoardHome />} />
            </Route>

        </Routes>
    )
}