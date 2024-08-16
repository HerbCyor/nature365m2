import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/auth"
import Dropdown from "react-bootstrap/Dropdown"
export function TemplatePrivateroute() {
    const { user, signOut } = useAuth()


    return user ? (
        <>
            <div className="col-12">
                <nav className="navbar">
                    <div className="container max-auto">
                        <a className="navbar-brand" href="#">Nature365</a>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Menu
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/dashboard">Home</Dropdown.Item>
                                <Dropdown.Item href="/dashboard/list">Meus locais</Dropdown.Item>
                                <Dropdown.Item href="/dashboard/create">Adicionar Local</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div>

                            <span>{user.email} </span>
                            <button className="btn btn-dark" onClick={signOut}>Sair</button>
                        </div>
                    </div>
                </nav >
                <main className="container mx-auto">
                    <Outlet />
                </main>
            </div>
        </>
    ) : <Navigate to="/login"></Navigate>
}
