import React, { Component } from 'react'
import{Modal, Button, Row, Col, Form} from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'


export class AddTaskModal extends Component {

  constructor(props){
    super(props);

    this.state = {snackbaropen: false, snackbarmsg: '', user_id: props.user_id}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  snackbarClose = (event) =>{
    this.setState({snackbaropen: false});
  };

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
        details: event.target.details.value,
        user_id: this.state.user_id
      })
    })
    .then(res=> res.json())
    .then((result)=> {
      this.setState({snackbaropen:true, snackbarmsg:"Your Action Item has been added! "})
    },
    (error)=>{
      this.setState({snackbaropen:true, snackbarmsg:'Failed'})
    })
  }

  render(){
    return(
      <div className="container">

        <Snackbar
          anchorOrigin={{vertical:'top', horizontal:'center'}}
          open = {this.state.snackbaropen} autoHideDuration = {3000} onClose={this.snackbarClose}

          message = {<span id="message-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-label="Close"
              color="inherit"
              onClick={this.snackbarClose}
              >
                x
            </IconButton>
          ]}
          />

        <Modal{...this.props} size="lg" aria-labelledby="contained-modal title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add A New Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Label> Action Item </Form.Label>
                    <Form.Control type="text" name="name" required placeholder="Action Item"/>
                  </Form.Group>

                  <Form.Group controlId="details">
                    <Form.Label> Description </Form.Label>
                    <Form.Control type="text" name="details" placeholder="Description"/>
                  </Form.Group>

                  <Form.Group>
                  <Button variant="primary" type="submit" onClick={this.props.onHide}> Add Action Item </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }
}

export default AddTaskModal
