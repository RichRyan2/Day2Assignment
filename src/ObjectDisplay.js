import React, { Component } from "react";
import { Stack, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class ObjectDisplay extends Component {
    render () {
        return(
            this.props.employees.map((employee, index) => {
                return(
                    <Stack gap={2} className="col-md-5 mx-auto" key={index}>
                        <Container>
                            <Row>
                                <Col style={{ textAlign: 'center' }}><img src={employee.image} style={{width: '50%'}} ></img></Col>
                            </Row>
                            <Row>
                                <Col></Col><Col md={'auto'} style={{ textAlign: 'center' }}>{employee.name}</Col><Col></Col>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>{employee.department}</Col>
                            </Row>
                        </Container>
                    </Stack>
                )
            })
        )
    }
}

export default ObjectDisplay