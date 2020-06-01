import React, { Component } from 'react'
import{Modal, Button, Row, Col, Form} from 'react-bootstrap'
// import NewTaskForm from './newTaskForm'


export class AddTaskModal extends Component {

  constructor(props){
    super(props);
  }

  handleSubmit(event){
    event.preventDefault();

    fetch('http://nathan.interview.nebullam.com:1880/tasks', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id:null,
        name: event.target.name.value,
        details: event.target.details.value
      })
    })
    .then(res=> res.json())
    .then((result)=> {
      alert("Your Action Item has been added!")
    },
    (error)=>{
      alert('Failed')
    })
  }

  render(){
    return(
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add A New Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <Row>
            <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label> Action Item </Form.Label>
                  <Form.Control type="text" name="name" required placeholder="Action Item"/>
                </Form.Group>

                <Form.Group controlId="details">
                  <Form.Label> Description </Form.Label>
                  <Form.Control type="text" name="details" required placeholder="Description"/>
                </Form.Group>

                <Form.Group>
                <Button variant="primary" type="submit"> Add Action Item </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button varient="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}

export default AddTaskModal
