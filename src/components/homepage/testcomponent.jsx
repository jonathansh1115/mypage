import React from 'react'
import {Button} from 'reactstrap'

export default (props) => {
    const {click, value} = props 

    return (
        <div>
            <Button onClick={click}>click me!</Button>
            <h1>{value}</h1>
        </div>
    ) 
}