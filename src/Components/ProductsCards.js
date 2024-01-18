import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductsCards = (props) => {
    const handleName= (mark) => alert (`The product mark is : ${props.mark}`)
return (
    <div>
    <Card style={{ width: '18rem' }}>
    {props.children}
    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.price} </Card.Text>
        <Card.Text>{props.mark} </Card.Text>
        <Button onClick={handleName} variant="primary">Click me</Button>
    </Card.Body>
    </Card>  
    </div>
)
}
export default ProductsCards
