import React, { Component } from "react";
import employeeData from "./data";
import ObjectDisplay from "./ObjectDisplay";

class Object extends Component {
    constructor(props) {
        super(props)
        this.state = employeeData
    }

    render(){
        return(
        <ObjectDisplay employees={this.state.employees} />
    )}

}

export default Object