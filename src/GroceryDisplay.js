import React, { useState } from "react";
import { Stack, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const GroceryDisplay = (props) => {
    const { groceries } = props

    return(
        groceries.map((grocery, index) => {
            return(
                <Stack gap={2} className="col-md-5 mx-auto" key={index}>
                    <Container>
                        <Row>
                            <Col style={{ textAlign: 'center' }}><img src={grocery.filename} style={{width: '50%'}} ></img></Col>
                        </Row>
                        <Row>
                            <Col></Col><Col md={'auto'} style={{ textAlign: 'center' }}>{grocery.title} ({grocery.type}) - {grocery.price}</Col><Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                        </Row>
                    </Container>
                </Stack>
            )
        })
    )
}

export default GroceryDisplay