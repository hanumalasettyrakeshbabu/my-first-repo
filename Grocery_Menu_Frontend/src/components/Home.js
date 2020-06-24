import React, { Component } from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import { Link } from "react-router-dom"
import pc1 from "../Images/Screenshot (53).png"
import pc2 from "../Images/Screenshot (55).png"
import pc3 from "../Images/Screenshot (54).png"

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <CardDeck className="p-3 mt-5" >
            <Card className="card-deck-1 bg-info h4" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
              <Card.Img variant="top" src={pc1} alt="Pic-1" width="200" height="200"></Card.Img>
              <Card.Body>
                <Link to="/simpleimageslider" style={{ textDecoration: "None" }}><span className="spanned" style={{ color: "black" }}>Simple-Image-Slider</span></Link>
              </Card.Body>
            </Card>
            <Card className="card-deck-1 bg-info h4" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
              <Card.Img variant="top" src={pc2} width="200" height="200" alt="pic-2"></Card.Img>
              <Card.Body>
                <Link to="/todolist" style={{ textDecoration: "None" }} className="mt-3"><span style={{ color: "black" }} >ToDo-List</span></Link>
              </Card.Body>
            </Card>
            <Card className="card-deck-1 bg-info h4" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
              <Card.Img variant="top" src={pc3} width="200" height="201"></Card.Img>
              <Card.Body>
                <Link to="/menuprototype" style={{ textDecoration: "None" }}><span style={{ color: "black" }} >Menu-Prototype</span></Link>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    )
  }
}

