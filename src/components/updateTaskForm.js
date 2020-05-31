import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

import Snackbar from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';

export class UpdateTaskForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      details: '',
      complete: '',
      user_id: ''
    }

   this.handleSubmit = this.handleSubmit.bind(this);
  }

  snackbarClose = (event) =>{
    this.setState({snackbaropen:false});

  handleSubmit(event){
    event.preventDefault();
    fetch('http://nathan.interview.nebullam.com:1880/tasks/:id', {
      method: 'PUT',
      headers:{
        'Accept': 'application/json'
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id:event.target.id.value
      })
    })
    .then(res=> res.json())
    .then(result)=>
    {
      //alert(result):
      this.setState({snackbaropen:true, snackbarmsg:result})
    },
    (error)=>{
      //alert('Failed')
      this.setState({snackbaropen:true, snackbarmsg: 'failed'})
    }

    render(){
      return(
        <div className="container">
<Snackbar
anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
open = {this.state.snackbaropen}
autoHideDuration = {3000}
onClose={this.snackbarClose}

message = {<span id="message-id">{this.state.snackbarmsg} </span>}
action{[
<IconButton
key="close"
arial-label="Cose"
color="inherit"
onClick={this.snackbarClose}
>

  X
</IconButton>
]}
/>


      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Row>
          <Col sm={6}>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="taskId">
          <Form.Label> Task </Form.Label>
          <From.Control
            type="text"
            name="taskId"
            required
            disabled
            defaultValue= {this.props.id}
            placeholder="taskId"
          </Form.Group>

          <Form.Group controlId="name">
          <Form.Label> Task </Form.Label>
          <From.Control
            type="text"
            name="name"
            required
            defaultValue= {this.props.name}
            placeholder="name"
          </Form.Group>

          <Form.Group>
            <Button variant="primary" type="submit
              Add Task
            </Button>
          </Form.Group>
          </Form>
          </Col>
        </Row>

      )
    }

  }
  }
}

// import React, { Component } from 'react'
// import axios from 'axios'
//
//  class UpdateTaskForm extends Component {
//    constructor(props) {
//      super(props)
//
//      this.state = {
//        name: '',
//        details: '',
//        complete: '',
//        user_id: ''
//      }
//    }
//
//    changeHandler = event => {
//      this.setState({[event.target.name]: event.target.value})
//    }
//
//    submitHandler = event => {
//      event.preventDefault()
//      console.log(this.state)
//      axios.put('http://nathan.interview.nebullam.com:1880/tasks/:id ', this.state)
//       .then(response =>  {
//         console.log(response)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//    }
//
//
//   render() {
//     const { name, details, complete, user_id } = this.state
//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <div>
//             <label htmlFor="name"> Task </label>
//             <input type='text' name="name" value={name} onChange={this.changeHandler} />
//           </div>
//           <div>
//             <label htmlFor="text"> Descriptoin </label>
//             <input type='text' name="details" value={details} onChange={this.changeHandler} />
//           </div>
//           <div>
//             <label htmlFor="complete"> True/False </label>
//             <input type='text' name="complete" value={complete} onChange={this.changeHandler} />
//           </div>
//           <div>
//             <label htmlFor="name"> User ID </label>
//             <input type='text' name="user_id" value={user_id} onChange={this.changeHandler} />
//           </div>
//           <button type="submit"> Update Task </button>
//         </form>
//       </div>
//     )
//   }
// }
//
// export default UpdateTaskForm
