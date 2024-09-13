import { SignUpForm } from "../../components/forms/signup";
import "./style.css"
import logo from "../../assets/logo2.png"

export function SignUpPage() {
    return (
        <>

            <img src={logo} alt="logo" />
            <h2 className="h3 mb-3 fw-normal">Preencha todos os campos para efetuar o cadastro.</h2>
            <div className="signup-container form-control">
                <SignUpForm></SignUpForm>
            </div>

        </>
    )
}