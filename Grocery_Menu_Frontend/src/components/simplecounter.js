import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button,Spinner } from "react-bootstrap"
import Axios from "axios"
import "./simpecounter.css"
export default class review extends Component {
    constructor() {
        super()
        this.state = {
            dataArray: [],
            num: 0,
            obj: ""
        }
    }
    componentDidMount() {

        Axios.get("https://pixabay.com/api/?key=17139142-716ea0a6ec24b9ae9ab9be9b8")
            .then((response) => {
                console.log(response.data.hits)
                this.setState({ dataArray: response.data.hits })
            })
            .catch((error) => {
                console.log(error)
            })


    }
    componentmount = () => {
        this.setState({ obj: this.state.dataArray[this.state.num] })
    }
    numInc = () => {
        if (this.state.num >= 0 && this.state.num < this.state.dataArray.length - 1) {
            this.setState({ num: this.state.num + 1 })
        }
        else if (this.state.num < 0 || this.state.num >= this.state.dataArray.length - 1) {
            this.setState({ num: 0 })
        }

    }
    numDec = () => {
        if (this.state.num >= 1) {
            this.setState({ num: this.state.num - 1 })
        }
        else if (this.state.num < 1) {
            this.setState({ num: 0 })
        }

    }
    randomize = () => {
        let x = Math.floor((Math.random() * (this.state.dataArray.length - 1)));
        this.setState({ num: x })
    }
    render() {
        if (this.state.dataArray.length !== 0) {
            return (
                <Fragment>

                    <Container style={{ paddingTop: "100px" }}>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }} className="pt-2">
                                <Card  className="shadow-lg border-success mb-3 bg-dark text-white">
                                    <Card.Header>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <span style={{ fontSize: "1.5em" }}>Image-Gallery</span>
                                                </Col>

                                            </Row>

                                        </Container>

                                    </Card.Header>
                                    <div className="contain">
                                        <Card.Img src={this.state.dataArray[this.state.num].largeImageURL} className="img-fluid" width="100%" height="100%" alt="Card-Image"></Card.Img>
                                        <Card.Footer className="hidden">
                                            <Container>
                                                <Row>
                                                    <Col>
                                                        <span className="h4">Photo-Stats</span>
                                                    </Col>
                                                </Row>
                                                <hr className="rounded" />
                                                <Row >
                                                    <Col >
                                                        <span>Likes : {this.state.dataArray[this.state.num].likes}  </span> <br />

                                                    </Col>
                                                </Row>
                                                <hr />
                                                <Row>
                                                    <Col >
                                                        <span>Viewed-By : {this.state.dataArray[this.state.num].views}</span><br />

                                                    </Col>
                                                </Row>
                                                <hr />
                                                <Row>
                                                    <Col >
                                                        <span>Downloads : {this.state.dataArray[this.state.num].downloads} </span><br />

                                                    </Col>
                                                </Row>
                                                <hr />
                                                <Row>
                                                    <Col >
                                                        <span>User : {this.state.dataArray[this.state.num].user} </span><br />

                                                    </Col>
                                                </Row>
                                                <hr />
                                                <Row>
                                                    <Col>
                                                        <span className="hiddenone">User-Id:{this.state.dataArray[this.state.num].user_id}</span>
                                                    </Col>

                                                </Row>
                                                <hr />

                                            </Container>
                                        </Card.Footer>
                                    </div>
                                    <Card.Footer>

                                        <Row>
                                            <Col >
                                                <Button variant="light" onClick={this.numInc} className="float-left"><i className="fas fa-long-arrow-right"></i></Button>
                                            </Col>
                                            <Col >
                                                <Button variant="light" onClick={this.randomize} className="mx-auto">Suprise-Me <i className="far fa-surprise"></i></Button>
                                            </Col>
                                            <Col >
                                                <Button variant="light" onClick={this.numDec} className="float-right"><i className="fas fa-long-arrow-left"></i></Button>
                                            </Col>

                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </Fragment>
            )
        }

        else {
            return (
                <Fragment>
                <div>
                <Spinner size="lg" animation="grow" variant="danger" />
                </div>
                </Fragment>
            )

        }
    }
}
