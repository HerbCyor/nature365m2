import axios from "axios"
import { useEffect, useState } from "react"
import { InfoCard } from "../../../components/infocard"
import { Accordion } from "react-bootstrap";
import "./style.css"

export function DashBoardHome() {

    const [users, setUsers] = useState([])
    const [pois, setPois] = useState([])
    useEffect(() => {
        getUsers()
        getPois()
    }, [])

    const getPois = async () => {
        const response = await axios.get("http://localhost:3000/pointsofinterest")

        setPois(await response.data)
    }
    const getUsers = async () => {
        const response = await axios.get("http://localhost:3000/users")

        setUsers(await response.data)
    }
    const l = users.length
    const p = pois.length
    return (
        <>
            <h1 className="title">Estatísticas</h1>
            <div className="card-container">
                <InfoCard quantity={l} title="Usuários" id="infocard1"></InfoCard>
                <InfoCard quantity={p} title="Lugares" id="infocard2"></InfoCard>
            </div>
            <div className="list-container">
                <h1 className="title">Lugares cadastrados</h1>
                <Accordion defaultActiveKey={[0]} alwaysOpen>
                    {pois.map((poi) => {
                        return (
                            <Accordion.Item key={poi.id} eventKey={pois.indexOf(poi)}>
                                <Accordion.Header>{poi.placeName}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="description">
                                        <p>{poi.placeDescription}</p>
                                    </div>
                                    <div className="address">
                                        <p>Endereço:</p>
                                        <p> {poi.streetName}, {poi.addressNumber ? poi.addressNumber + " - " : " "} {poi.addressComplement}</p>
                                        <p>{poi.addressArea}</p>
                                        <p>{poi.addressCity} - {poi.addressState} - {poi.addressCountry}</p>
                                        <p>{poi.addressZipcode}</p>
                                    </div>



                                </Accordion.Body>
                            </Accordion.Item>

                        )
                    })}
                </Accordion>

            </div >

        </>
    )
}