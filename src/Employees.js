import React, { useState } from "react";
import { Stack, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import employeeData from './data';

const Employees = () => {
    const { employees } = employeeData;

    function alertNotif(employee)
    { 
        return(alert(` Name: ${employee.name} \n Age: ${employee.age} \n Department: ${employee.department} \n Birthday: ${employee.birthday} \n Salary: ${employee.salary} \n Description: ${employee.description}` ))
    }

    return (
        employees.map((employee, index) => {
            return (
                <Stack gap={2} className="col-md-5 mx-auto" key={employee.id}>
                    <Container id={employee.id} key={index}>
                        <Row>
                            <Col style={{ textAlign: 'center' }}><img src={employee.image} style={{width: '50%'}} ></img></Col>
                        </Row>
                        <Row>
                            <Col></Col><Col md={'auto'} style={{ textAlign: 'center' }} onMouseEnter={() => alertNotif(employee)}>{employee.name}</Col><Col></Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: 'center' }}>{employee.department}</Col>
                        </Row>
                    </Container>
                </Stack>
            );
        })
    )
}

export default Employees