import { Container, Row, Col, Button } from 'react-bootstrap';

function HomePage() {
    return (
        <Container className="text-center bg-light rounded mt-5 p-5">
            <Row>
                <Col>
                    <h1>Welcome to Your Fitness Tracker!</h1>
                    <p className="lead mt-3">
                        Seamlessly log and manage your exercise sessions without breaking a sweat. 
                    </p>
                </Col>
            </Row>
            
            <Row className="mt-3">
                <Col>
                    <Button variant="primary" href="/exercises/" className="m-2">
                        View Exercise Sessions
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" href="/add-exercise/" className="m-2">
                        Add New Session
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
