import axios from "axios"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"

export function SignUpForm() {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    async function createUser(data) {

        try {
            const response = await axios.post('http://localhost:3000/users', data)

            if (response.ok === false) {
                alert("Houve um erro ao cadastrar usuário")
            } else {
                alert("pessoa cadastrada com sucesso")
                navigate("/login", { replace: true })
            }


        } catch (error) {
            alert("Houve um erro ao cadastrar usuário")
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit(createUser)}>

                <h1 className="h3 mb-3 fw-normal">Preencha todos os campos para efetuar o cadastro.</h1>
                <h3>Dados Pessoais</h3>

                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label text-right">Nome Completo</label>
                    <input type="text" className="form-control" id="fullName" {...register('fullName', { required: "O nome é obrigatório" })} />

                    {/* to do {formState.errors.fullName.message} */}
                </div>

                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Sexo</label>
                    <input type="text" id="gender" className="form-control" {...register('gender')} />
                </div>
                <div className="mb-3">

                    <label htmlFor="birthDate" className="form-label">Data de Nascimento</label>
                    <input type="text" id="birthDate" className="form-control" {...register('birthDate')} />

                </div>

                <div className="mb-3">
                    <label htmlFor="cpf" className="form-label">CPF</label>
                    <input type="text" id="cpf" className="form-control" {...register('cpf')} />

                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" {...register('email')} />

                </div>
                <div className="mb-3">

                    <label htmlFor="password" className="form-label">Senha</label>
                    <input type="password" id="password" className="form-control" {...register('password')} />

                </div>
                <div className="mb-3">

                    <label htmlFor="confirmPassword" className="form-label">Confirmar Senha</label>
                    <input type="password" id="confirmPassword" className="form-control" {...register('confirmPassword')} />

                </div>

                <h3>Endereço</h3>

                <div className="mb-3">
                    <label htmlFor="streetName" className="form-label">Rua</label>
                    <input type="text" id="streetName" className="form-control" {...register('streetName')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="addressNumber" className="form-label">Número</label>
                    <input type="text" id="addressNumber" className="form-control" {...register('addressNumber')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="addressComplement" className="form-label">Complemento</label>
                    <input type="text" id="addressComplement" className="form-control" {...register('addressComplement')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="addressArea" className="form-label">Bairro</label>
                    <input type="text" id="addressArea" className="form-control" {...register('addressArea')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="addressCity" className="form-label">Cidade</label>
                    <input type="text" id="addressCity" className="form-control" {...register('addressCity')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="addressState" className="form-label">Estado</label>
                    <input type="text" id="addressState" className="form-control" {...register('addressState')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="addressCountry" className="form-label">País</label>
                    <input type="text" id="addressCountry" className="form-control" {...register('addressCountry')} />
                </div>
                <div className="mb-3">
                    <label htmlFor="addressZipcode" className="form-label">CEP</label>
                    <input type="text" id="addressZipcode" className="form-control" {...register('addressZipcode')} />
                </div>


                <button className="btn btn-primary mt-5 mb-3 w-100 py-2" type="submit"> Cadastrar </button>
                <p> Já possui cadastro? <Link to="/login" >Login</Link></p>
            </form>

        </>
    )
}