import axios from "axios"
import { useEffect, useState } from "react"
import { useAuth } from "../../../contexts/auth"
import { EditModal } from "../../../components/editmodal"

export function ListPointsOfInterest() {
    const { user } = useAuth()
    const [poiList, setPoiList] = useState([])

    const pois = async () => {

        const response = await axios.get("http://localhost:3000/pointsofinterest")
        setPoiList(response.data.filter((poi) => poi.user == user.fullName))
    }


    useEffect(() => {
        pois()
    }, [])

    return (
        <>
            <h1>Meus Locais</h1>

            {poiList.map((poi) => {
                return (
                    <EditModal
                        key={poi.id}
                        id={poi.id}
                        placeName={poi.placeName}
                        placeDescription={poi.placeDescription}
                        streetName={poi.streetName}
                        addressNumber={poi.addressNumber}
                        addressComplement={poi.addressComplement}
                        addressArea={poi.addressArea}
                        addressCity={poi.addressCity}
                        addressState={poi.addressState}
                        addressCountry={poi.addressCountry}
                        addressZipcode={poi.addressZipcode}
                    >
                    </EditModal>

                )
            })}

        </>
    )
}
