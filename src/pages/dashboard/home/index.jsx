import axios from "axios"
import { useEffect, useState } from "react"
import { InfoCard } from "../../../components/infocard"
import { Accordion } from "react-bootstrap";

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
    console.log(pois)
    return (
        <>
            <h1>Dashboard Home</h1>
            <div className="card-container">
                <InfoCard quantity={l} title="Usuários"></InfoCard>
                <InfoCard quantity={p} title="Lugares"></InfoCard>
            </div>
            <div className="list-container">
                <h3>Lugares cadastrados</h3>
                <Accordion defaultActiveKey={[0]} alwaysOpen>
                    {pois.map((poi) => {
                        return (
                            <Accordion.Item key={poi.id} eventKey={pois.indexOf(poi)}>
                                <Accordion.Header>{poi.placeName}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="description">
                                        {poi.placeDescription}
                                    </div>
                                    <div className="address">
                                        <p>Endereço</p>
                                        {poi.streetName}
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