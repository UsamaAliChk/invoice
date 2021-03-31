import React from 'react'
import {Col, Row,Badge, 
    Button, Navbar, Nav,
     Container,Form } from "react-bootstrap";
export default function SowItem({item,handleDelete}) {
    return (
        <div style={{marginBottom:"20px"}} key={item.id}>
        <Row>
          <Col md="5">
            <Form.Control as="textarea" rows={3} defaultValue={item.description}></Form.Control>
          </Col>
          <Col md="1">
            <Form.Control type="text" defaultValue={item.qty}></Form.Control>
          </Col>
          <Col md="2">
       
            <Form.Control type="text" defaultValue={item.price}></Form.Control>
          </Col>
          <Col md="1">
           
            <Form.Control defaultValue={item.total} disabled></Form.Control>
          </Col>
          <Col md="1">
              <Button variant="danger" id={item.id} onClick={e=>{handleDelete(e.target.id,item.total)}} >DELETE</Button>
          </Col>
        </Row>
    </div>
    )
}
