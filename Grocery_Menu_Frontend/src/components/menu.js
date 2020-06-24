import React, { Component } from 'react'
import Axios from "axios"

import { Container, Row, Col, Button, Spinner, DropdownButton, Dropdown, ButtonGroup ,DropdownDivider} from "react-bootstrap"

export default class menu extends Component {
    constructor() {
        super()
        this.state = {
            dataArray: [],
            value: ""
        }
    }
    componentDidMount() {

        Axios.get("http://localhost:9000/menu/menudata").then((data) => {
            this.setState({ dataArray: data.data })
            console.log(data.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    dataByType = (e) => {
        this.setState({ value: e.target.value, dataArray: [] })
        Axios.get("http://localhost:9000/menu//menudatabytype/" + e.target.value).then((data) => {
            this.setState({ dataArray: data.data })
        }).catch((error) => {
            console.log(error)
        })
    }
    dataByall = () => {
        Axios.get("http://localhost:9000/menu/menudata").then((data) => {
            this.setState({ dataArray: data.data })
            console.log(data.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    dataByInc = () => {
        Axios.get("http://localhost:9000/menu/menudata/incsorted").then((data) => {
            this.setState({ dataArray: data.data })
            console.log(data.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    dataByDec = () => {
        Axios.get("http://localhost:9000/menu/menudata/decsorted").then((data) => {
            this.setState({ dataArray: data.data })
            console.log(data.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        if (this.state.dataArray.length !== 0) {
            return (
                <React.Fragment>
                    <Container>
                        <Row>
                            <Col>
                                <span className="h4">Our-Menu</span>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={{ span: "2" }}>
                                <Button value="All" variant="outline-warning" style={{ color: "black" }} onClick={this.dataByall}>All</Button>
                            </Col>
                            <Col md={{ span: "2" }}>
                                <Button value="Breakfast" variant="outline-warning" style={{ color: "black" }} onClick={this.dataByType}>Break-Fast</Button>
                            </Col>
                            <Col md={{ span: "2" }}>
                                <Button value="Biriyani" variant="outline-warning" style={{ color: "black" }} onClick={this.dataByType}>Biriyani</Button>
                            </Col>
                            <Col md={{ span: "2" }}>
                                <Button value="Snack" variant="outline-warning" style={{ color: "black" }} onClick={this.dataByType}>Snack</Button>
                            </Col>
                            <Col md={{ span: "2", offset: "2" }}>
                                <DropdownButton variant="warning" style={{ color: "black" }} as={ButtonGroup} title={<i className="far fa-filter"></i>} id="bg-nested-dropdown">
                                <div className="text-center">
                                <Dropdown.Divider></Dropdown.Divider>    
                                <DropdownButton variant="warning" style={{ color: "black" }} as={ButtonGroup} title="Price-Filter" id="bg-nested-dropdown" className="text-center">
                                        <Dropdown.Item>
                                            <Button variant="outline-warning" style={{ color: "black" }} onClick={this.dataByInc}><i class="fal fa-sort-numeric-up"></i> Low-Price To High-Price</Button>
                                        </Dropdown.Item>
                                        <Dropdown.Item >
                                            <Button variant="outline-warning" style={{ color: "black" }} onClick={this.dataByDec}><i class="fal fa-sort-numeric-down-alt"></i> High-Price To Low-Price</Button>
                                        </Dropdown.Item>
                                    </DropdownButton>
                                    <Dropdown.Divider></Dropdown.Divider>
                                </div>
                                <div className="text-center">
                                <Dropdown.Divider></Dropdown.Divider>    
                                <DropdownButton variant="warning" style={{ color: "black" }} as={ButtonGroup} title="Avaliability-Filter" id="bg-nested-dropdown" className="text-center">
                                        <Dropdown.Item>
                                            <Button variant="outline-warning" style={{ color: "black" }} onClick={this.dataByInc}><i class="fal fa-sort-numeric-up"></i> Low-Price To High-Price</Button>
                                        </Dropdown.Item>
                                        <Dropdown.Item >
                                            <Button variant="outline-warning" style={{ color: "black" }} onClick={this.dataByDec}><i class="fal fa-sort-numeric-down-alt"></i> High-Price To Low-Price</Button>
                                        </Dropdown.Item>
                                    </DropdownButton>
                                    <Dropdown.Divider></Dropdown.Divider>
                                </div>
                                    
                                </DropdownButton>

                            </Col>
                        </Row>
                        <hr />
                    </Container>
                    {
                        this.state.dataArray.map((k, i) => {
                            return (
                                <React.Fragment>
                                    <Container>
                                        <Row>
                                            <Col md={{ span: "4" }}>
                                                <img src={k.dishImg} className="float-left img-fluid"></img>
                                            </Col>
                                            <Col md={{ span: "8" }}>
                                                <Row>
                                                    <Col >
                                                        <span>{k.dishName}</span>
                                                    </Col>
                                                    <Col>
                                                        <span>₹ {k.dishPrice}</span>
                                                    </Col>
                                                    <Col >
                                                        <span>Avaliability : {k.dishAvaliability}pcs</span>
                                                    </Col>

                                                    <Col md={{ span: "12" }} className="pt-4 mt-4" style={{ borderTop: "2px solid black" }}>
                                                        {k.dishSubtext}
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <hr className="rounded"></hr>
                                    </Container>
                                </React.Fragment>
                            )
                        })
                    }
                </React.Fragment>
            )
        }
        else {
            return (
                <div>
                    <Spinner size="lg" animation="grow" variant="danger" />
                </div>
            )
        }
    }
}




