import React, { Component } from 'react'
import{Modal, Button, Row, Col, Form} from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CheckBox from './checkBox.js'


export class UpdateStatus extends Component {

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
      method: 'PUT',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        id:this.props.id,
        name:this.props.name,
        details:this.props.details,
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

        </CheckBox>
    </div>
    );
  }

}

export default EditTaskModal
