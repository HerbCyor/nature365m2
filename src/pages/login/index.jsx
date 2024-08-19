import { LoginForm } from "../../components/forms/login"
import "./style.css"
import logo from "../../assets/logo2.png"

export function LoginPage() {

    return (
        <>
            <div className="container">
                <img src={logo} alt="logo" />
                <div className="form-control login-container">
                    <LoginForm></LoginForm>

                </div>
            </div>
        </>
    )
}