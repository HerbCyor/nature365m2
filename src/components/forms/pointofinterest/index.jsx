import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../contexts/auth"

export function PointOfInterestRegister() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const { user } = useAuth()

    async function createPointOfInterest(data) {
        try {
            data.user = user.fullName
            const response = await axios.post("http://localhost:3000/pointsofinterest", data)
            if (response.ok === false) {
                alert("Houve um erro ao cadastrar local")
            } else {
                alert("local cadastrado com sucesso")
                navigate("/dashboard", { replace: true })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="form-control">
                <form onSubmit={handleSubmit(createPointOfInterest)}>
                    <div className="mb-3">
                        <label htmlFor="placeName" className="form-label">Rua</label>
                        <input type="text" id="placeName" className="form-control" placeholder="Local" {...register('placeName')} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="placeDescription" className="form-label">Rua</label>
                        <textarea id="placeDescription" className="form-control" placeholder="Descrição" {...register('placeDescription')} />
                    </div>
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
                    <button className="btn btn-primary mt-5 mb-3" type="submit"> Cadastrar </button>

                </form>
            </div>

        </>
    )
}