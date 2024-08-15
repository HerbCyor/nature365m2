import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../../contexts/auth"

export function DashBoardHome() {
    const { user, signOut } = useAuth()


    return user ? (
        <>
            <h1>Dashboard Home</h1>
            <p>{user.email}</p>
            <button className='btn btn-dark' onClick={signOut}>Sair</button>
            <Outlet />
        </>
    ) : <Navigate to="/login"></Navigate>
}