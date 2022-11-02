import React from "react";
import Employees from "./Employees"
import Grocery from "./Grocery";
import Object from "./Object";
import {Container, Row, Col} from 'react-bootstrap';

const App = () => {
    return(
        <>
            <Container>
                <Row>
                    <Col><h2 style={{ textAlign: 'center' }}>Task 1</h2></Col>
                    <Col><h2 style={{ textAlign: 'center' }}>Task 2</h2></Col>
                    <Col><h2 style={{ textAlign: 'center' }}>Task 3</h2></Col>
                </Row>
                <Row>
                    <Col><Employees /></Col>
                    <Col><Grocery /></Col>
                    <Col><Object /></Col>
                </Row>
            </Container>
        </>      
    )
}

export default App