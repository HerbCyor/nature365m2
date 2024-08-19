import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/login'
import { SignUpPage } from '../pages/signup'
import { DashBoardHome } from '../pages/dashboard/home'
import { TemplatePrivateroute } from '../templates/private-route'
import { ListPointsOfInterest } from '../pages/dashboard/list'
import { CreatePointOfInterestPage } from '../pages/dashboard/create'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/cadastrar' element={<SignUpPage />} />
            <Route path='/dashboard' element={<TemplatePrivateroute />}>
                <Route path='/dashboard' element={<DashBoardHome />} />
                <Route path='list' element={<ListPointsOfInterest />} />

                <Route path='create' element={<CreatePointOfInterestPage />} />
            </Route>

        </Routes>
    )
}