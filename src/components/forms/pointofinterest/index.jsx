export function PointOfInterestRegister() {
    return (
        <>
            <div className="form-control">
                <form>

                    <input type="text" placeholder="Local" />
                    <textarea placeholder="Descrição" />
                    <input type="text" placeholder="Rua" />
                    <input type="text" placeholder="Número" />
                    <input type="text" placeholder="Complemento" />
                    <input type="text" placeholder="Bairro" />
                    <input type="text" placeholder="Cidade" />
                    <input type="text" placeholder="Estado" />
                    <input type="text" placeholder="País" />
                    <input type="text" placeholder="CEP" />
                    <button> Cadastrar </button>

                </form>
            </div>

        </>
    )
}