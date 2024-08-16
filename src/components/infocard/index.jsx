import { Card } from "react-bootstrap";

export function InfoCard({ quantity, title }) {
    return (
        <>
            <div>
                <Card>
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