import { Link } from "react-router-dom";
import { object, string } from 'yup'
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useAuth } from "../../../contexts/auth"

export function LoginForm() {
    let userSchema = object({
        email: string().email().required(),
        password: string().required(),
    })

    const { register, handleSubmit, formState } = useForm()
    const { errors, isSubmitting } = formState
    const { signIn } = useAuth()
    const navigate = useNavigate()

    async function onSubmit(data) {
        try {
            if (await userSchema.isValid(data)) {
                await signIn(data)
                navigate("/dashboard")
            }

        } catch (error) {
            alert(error)// to do
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="h3 mb-3 fw-normal">Entrar</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="email@example.com" {...register("email")} />
                    <label htmlFor="floatingInput">Email</label>

                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="senha" {...register("password")} />
                    <label htmlFor="floatingPassword">Senha</label>
                </div>
                <button className="btn btn-primary mt-5 mb-3 w-100 py-2" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Entrando...' : "Entrar"} </button>
                <p> Não possui cadastro? <Link to="/cadastrar" >clique aqui</Link></p>

            </form>


        </>
    )
}