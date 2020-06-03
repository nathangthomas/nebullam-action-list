import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBox from './checkBox';

import {AddTaskModal} from './addTaskModal';
import {EditTaskModal} from './editTaskModal';
import {ProperPunct} from './properPunct';
import '../App.css';


export class Tasks extends Component {

  constructor(props){
    super(props);
    this.state ={tasks:[], addModalShow : false, editModalShow: false, user_id: props.user_id, name: props.name}
  }

  componentDidMount(){
    this.refreshList();
  }

  refreshList(){

    fetch('http://nathan.interview.nebullam.com:1880/user_tasks/'+ this.state.user_id)
    .then(response=> response.json())
    .then(data => {
      this.setState({tasks:data});
    }
    );
  }

  componentDidUpdate(){
    this.refreshList();
  }

  // completeTask(id){
  //   fetch('http://nathan.interview.nebullam.com:1880/tasks', {
  //     method:'PUT',
  //     headers:{
  //       'Accept':'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify({
  //       id:this.props.id,
  //       name:this.props.name,
  //       details:this.props.details,
  //       complete: 1,
  //       user_id:this.state.user_id
  //     })
  //   }
  // })


  deleteTask(id){
    if(window.confirm('Are you sure?')){
      fetch('http://nathan.interview.nebullam.com:1880/tasks/'+id, {
        method:'DELETE',
        headers:{'Accept':'application/json', 'Content-Type':'application/json'}
      })
    }
  }

  render(){
  const {tasks, id, name, details, complete} = this.state;
  let addModalClose=() => this.setState({addModalShow:false});
  let editModalClose=() =>  this.setState({editModalShow:false});

    return(
      <div>
          <h1><strong>{this.props.name}'s Action List</strong></h1>
          <h3> Total Tasks: {tasks.length}</h3>
      <div>
      <div className="task-table">
        <Table className="mt-4" stripped bordered hover size="sm">
        <thead>
          <tr>
            <th><h3>Complete</h3></th>
            <th><h3>Action Items</h3></th>
            <th><h3>Details</h3></th>
            <th><h3>Options</h3></th>
          </tr>

          </thead>
          <tbody>
            {tasks.map(task=>
              <tr key ={task.id}>
              <td><CheckBox/></td>
              <td><strong>{task.name}</strong></td>
              <td>{task.details}</td>
              <td>
                <ButtonToolbar>
                  <Button
                    className="mr-2"
                    variant="info"
                    onClick = {()=> this.setState({editModalShow:true, id:task.id, name:task.name, details:task.details, complete: task.complete})}>
                      Edit
                  </Button>

                  <Button className="mr-2"
                    onClick= {()=> this.deleteTask(task.id)}
                    variant="danger">
                      Delete
                  </Button>

                  <EditTaskModal
                  show={this.state.editModalShow}
                  onHide={editModalClose}
                  id = {this.state.id}
                  name = {this.state.name}
                  details = {this.state.details}
                  user_id = {this.state.user_id}
                  />

                </ButtonToolbar>
              </td>
              </tr>
            )}
          </tbody>

          </Table>
        </div>

        <ButtonToolbar className="btn-toolbar">
          <Button className="add-btn" variant='primary' onClick={()=> this.setState({addModalShow: true})}>
            Add Task
          </Button>

          <AddTaskModal show={this.state.addModalShow} onHide={addModalClose} user_id={this.state.user_id}/>

        </ButtonToolbar>
      </div>
    </div>
    )

  }
}

export default Tasks
