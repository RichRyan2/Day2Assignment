import React, { useState } from "react";
import groceryData from './groceryData'
import GroceryDisplay from './GroceryDisplay'

const Grocery = () => {
    const { groceries } = groceryData;

    return(
        <GroceryDisplay groceries={groceries} />
    )
}

export default Grocery