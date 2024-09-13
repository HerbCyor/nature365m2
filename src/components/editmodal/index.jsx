import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Modal, Card } from 'react-bootstrap';
import axios from "axios"
import { useForm } from 'react-hook-form';
import "./style.css"

export function EditModal({
    id,
    placeName,
    placeDescription,
    streetName,
    addressNumber,
    addressComplement,
    addressArea,
    addressCity,
    addressState,
    addressCountry,
    addressZipcode
}) {
    const values = {
        placeName,
        placeDescription,
        streetName,
        addressNumber,
        addressComplement,
        addressArea,
        addressCity,
        addressState,
        addressCountry,
        addressZipcode
    }
    const { register, handleSubmit } = useForm({
        defaultValues: {
            placeName,
            placeDescription,
            streetName,
            addressNumber,
            addressComplement,
            addressArea,
            addressCity,
            addressState,
            addressCountry,
            addressZipcode
        },
        values,
        resetOptions: {
            keepDirtyValues: true
        }
    })
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    async function deletePlace(id) {

        let url = "http://localhost:3000/pointsofinterest/" + id

        await axios.delete(url)
        window.location.reload()
    }

    async function updatePointOfInterest(data) {
        let url = "http://localhost:3000/pointsofinterest/" + id
        await axios.patch(url, data)
        handleClose()
        window.location.reload()
    }

    return (
        <>
            <Card>
                <Card.Header><h3>{placeName}</h3></Card.Header>
                <Card.Body>
                    <p>{placeDescription}</p>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success" onClick={handleShow}>editar</Button>
                    <Button variant="danger" onClick={() => deletePlace(id)}>deletar</Button>

                </Card.Footer>

            </Card>

            <Modal id={id} show={show} onHide={handleClose} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>{placeName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-control">
                        <form onSubmit={handleSubmit(updatePointOfInterest)}>
                            <div className="mb-3">
                                <label htmlFor="placeName" className="form-label">Nome</label>
                                <input type="text" id="placeName" className="form-control" {...register('placeName')} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="placeDescription" className="form-label">Descrição</label>
                                <textarea id="placeDescription" className="form-control" {...register('placeDescription')} />
                            </div>
                            <div className='street-data'>
                                <div className="mb-3 streetName">
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
                            </div>
                            <div className='area-data'>
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
                            </div>

                            <button className="btn btn-primary mt-5 mb-3" type="submit"> Salvar </button>
                            <button className="btn btn-secondary mt-5 mb-3" onClick={handleClose}>
                                Close
                            </button>
                        </form>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    );
}