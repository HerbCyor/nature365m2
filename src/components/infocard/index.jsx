import { Card } from "react-bootstrap";

export function InfoCard({ quantity, title, id }) {
    return (
        <>
            <div>
                <Card id={id}>
                    <Card.Body>
                        <Card.Title>{quantity}</Card.Title>
                        <Card.Text>
                            {title}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>

        </>
    )
}