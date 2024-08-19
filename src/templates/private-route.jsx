import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/auth"
import Dropdown from "react-bootstrap/Dropdown"
import "./style.css"
import menu from "../assets/menu.svg"

export function TemplatePrivateroute() {
    const { user, signOut } = useAuth()


    return user ? (
        <>
            <div className="col-12">
                <nav className="navbar">
                    <div className="container max-auto">
                        <a className="navbar-brand" id="nature365" href="/dashboard">Nature365</a>
                        <div className="user-menu">
                            <span className="user-email">{user.email} </span>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="menu">
                                    <span><img src={menu} alt="" /></span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/dashboard">Home</Dropdown.Item>
                                    <Dropdown.Item href="/dashboard/list">Meus locais</Dropdown.Item>
                                    <Dropdown.Item href="/dashboard/create">Adicionar Local</Dropdown.Item>
                                    <Dropdown.Item onClick={signOut}>Sair</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </nav >
                <main className="container mx-auto">
                    <Outlet />
                </main>
            </div>
        </>
    ) : <Navigate to="/"></Navigate>
}
