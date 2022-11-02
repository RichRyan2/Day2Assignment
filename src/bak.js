import React, { useState } from "react";
import employeeData from './data';

const App = () => {
    const { employees } = employeeData;
    const [isShown, setIsShown] = useState({ id:employees.id, status:'none' });
    const employeeList = employees.map((employee) => {
        return(
            <div key={ employee.id } style={{ textAlign: "center" }} >
                <img src={ employee.image }></img>
                <h2 onMouseEnter={() => setIsShown({ id:employee.id, status:'block' })} onMouseLeave={() => setIsShown({ id:employee.id, status:'none' })}>
                    { employee.name }
                </h2>
                <div style={{ display: isShown.status }}>
                    { employee.description }
                </div>
                <p>            
                    { employee.department }
                </p>
            </div>
        )
    });
    console.log(isShown)
    return(
        <>
            {employeeList}
        </>
    )
}

export default App