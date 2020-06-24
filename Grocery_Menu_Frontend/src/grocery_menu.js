import React, { Component } from 'react'
import { Card, InputGroup, FormControl, Button, Col, Row, Container } from 'react-bootstrap'

class grocery_menu extends Component {
    constructor() {
        super()
        this.state = {
            form: {
                item: ""
            },
            arr: "",
            styling: "none",
          
            itemIndex : 0,
        }
    }
    onChangeMethod = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let { form } = this.state
        form[name] = value
        this.setState({ form: form })
        console.log(this.state.form.item)
    }
    onClickMethod = (e) => {
        if (this.state.form.item !== "") {
            this.setState({ arr: [...this.state.arr, this.state.form.item]})
        }
        else {
            alert("Please Fill")
        }
    }
    Onclickmet = () => {
        this.setState({ styling: "line-through" })
    }
    Erase = () => {
        this.setState({arr:[],itemIndex:0})
    }
    ondblclick = () => {
        this.setState({styling: "none"})
    }
    deleteEle = () => {

    }
    render() {
        return (
            <Container style={{ paddingTop: "250px" }}>
                <Row>
                    <Col md={{ span: 7, offset: 2 }}>
                        <Card style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                            <Card.Header>
                                <Row>
                                    <Col md={{ span: 5,offset:4 }} className="text-center">
                                        <span style={{fontSize:"1.5em"}}>Todo-List</span>
                                    </Col>
                                    <Col md={{ span:1,offset: 1 }}>
                                        <Button title="Clear All" onClick={this.Erase} variant="light"><i className="fal fa-eraser"></i></Button>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <InputGroup size="lg">
                                    <FormControl name="item" placeholder = "Eg: Meeting At 5:00pm" id="item" value={this.state.form.item} onChange={this.onChangeMethod}></FormControl>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text style={{ backgroundColor: "white" }}>
                                            <Button variant="light" size="sm" onClick={this.onClickMethod}><i className="far fa-plus"></i></Button>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                                {
                                    (this.state.arr.length !== 0) ?
                                        <div>
                                            {this.state.arr.map((k, i) => {
                                                
                                                return (
                                                    
                                                    <Container key={i} id={i}>
                                                        <Row className="mt-3 pt-2 pb-2">
                                                            <Col md={{ span: 6 }} className="text-left" >
                                                                <span id={k+i} style={{fontSize:"1.25em" }}>
                                                                {k}                    
                                                               </span>
                                                            </Col>
                                                            <Col md={{ span: 1, offset: 3 }} >
                                                                <Button size="sm" variant="light" onClick={()=>{
                                                                    const myobj = document.getElementById(i)
                                                                    myobj.remove()
                                                                }}><i className="far fa-trash-alt"></i></Button>
                                                            </Col>
                                                            <Col md={{ span: 1 }} >
                                                                <Button size="sm" variant="light" onClick= {()=>{

                                                                }}>
                                                                <i className="fal fa-edit"></i></Button>
                                                            </Col>
                                                            <Col md={{ span: 1 }} >
                                                                <Button size="sm" variant="light" onClick={()=>{
                                                                    document.getElementById(k+i).style.textDecoration = "line-through"
                                                                }} 
                                                                onDoubleClick={()=>{
                                                                    document.getElementById(k+i).style.textDecoration = "none"
                                                                }}><i className="fal fa-plus-circle"></i></Button>
                                                            </Col>
                                                        </Row>
                                                        <hr />
                                                    </Container>
                                                )
                                            })}
                                        </div> : null
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default grocery_menu