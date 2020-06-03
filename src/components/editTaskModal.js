import React, { Component } from 'react'
import{Modal, Button, Row, Col, Form, Dropdown, DropdownButton} from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'


export class EditTaskModal extends Component {

  constructor(props){
    super(props);
    this.state = {snackbaropen: false, snackbarmsg: '', user_id: props.user_id }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  snackbarClose = (event) =>{
    this.setState({snackbaropen: false});
  };

  handleSubmit(event){
    event.preventDefault();

  function toggle(){
    console.log('Default value of bool is', this.props.complete);
    this.props.complete = this.props.complete ? false : true;
    console.log('Toggled bool is', this.props.complete);

    return this.props.complete;
  }


    fetch('http://nathan.interview.nebullam.com:1880/tasks', {
      method: 'PUT',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id:this.props.id,
        name:event.target.name.value,
        details:event.target.details.value,
        complete:event.target.complete.value,
        user_id:this.state.user_id
      })
    })
    .then(res=> res.json())
    .then((result)=> {
      this.setState({snackbaropen:true, snackbarmsg:"Your Action Item has been updated! "})
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
            Edit Action Item
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>

                  <Form.Group controlId="name">
                    <Form.Label> Action Item </Form.Label>
                    <Form.Control type="text" name="name" required defaultValue={this.props.name} placeholder="Action Item"/>
                  </Form.Group>

                  <Form.Group controlId="details">
                    <Form.Label> Description </Form.Label>
                    <Form.Control type="text" name="details" defaultValue={this.props.details} placeholder="Description" />
                  </Form.Group>

                  <Form.Group controlId="complete">
                      <div key="default-checkbox" className="mb-3">
                        <Form.Check
                          type="checkbox"
                          name="complete"
                          label="Complete?"
                          defaultValue={this.props.complete}/>
                      </div>
                  </Form.Group>

                  <Form.Group>
                  <Button variant="primary" type="submit" onClick={this.props.onHide}> Update Action Item </Button>
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

export default EditTaskModal
