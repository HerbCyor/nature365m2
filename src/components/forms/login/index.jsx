import { Link } from "react-router-dom";

export function LoginForm() {
    return (
        <>
            <form>
                <h1 className="h3 mb-3 fw-normal">Entrar</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="email@example.com" />
                    <label htmlFor="floatingInput">Email</label>

                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="senha" />
                    <label htmlFor="floatingPassword">Senha</label>
                </div>
                <button className="btn btn-primary mt-5 mb-3 w-100 py-2" type="submit"> Entrar </button>
                <p> Não possui cadastro? <Link to="/cadastrar" >clique aqui</Link></p>

            </form>


        </>
    )
}