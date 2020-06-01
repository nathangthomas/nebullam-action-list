import React, {Component} from 'react'
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap'
import {AddTaskModal} from './addTaskModal'
import {EditTaskModal} from './editTaskModal'

export class Tasks extends Component {

  constructor(props){
    super(props);
    this.state ={tasks:[], addModalShow : false, editModalShow: false}
  }

  componentDidMount(){
    this.refreshList();
  }

  refreshList(){
    fetch('http://nathan.interview.nebullam.com:1880/tasks')
    .then(response=> response.json())
    .then(data => {
      this.setState({tasks:data});
    }
    );
  }

  componentDidUpdate(){
    this.refreshList();
  }

  render(){
  const {tasks, id, name, details, complete} = this.state;
  let addModalClose=() => this.setState({addModalShow:false});
  let editModalClose=() => this.setState({editModalShow:false});

    return(
      <div>
        <Table className="mt-4" stripped bordered hover>
        <thread>
          <tr>
            <th> Action Items </th>
            <th> Details </th>
            <th> Complete </th>
            <th> Options </th>

          </tr>
        </thread>
        <tbody>
          {tasks.map(task=>
            <tr key ={task.id}>
              <td>{task.name}</td>
              <td>{task.details}</td>
              <td>{task.complete}</td>
              <td>
                <ButtonToolbar>
                  <Button
                    className="mr-2"
                    variant="info"
                    onClick = {()=> this.setState({editModalShow:true, id:task.id, name:task.name, details:task.details, complete: task.complete})}>
                      Edit
                  </Button>

                  <EditTaskModal
                  show={this.state.editModalShow}
                  onHide={editModalClose}
                  id = {this.state.id}
                  name = {this.state.name}
                  details = {this.state.details}
                  />

                </ButtonToolbar>
              </td>
            </tr>
          )}
        </tbody>

        </Table>
        <ButtonToolbar>
          <Button variant='primary' onClick={()=> this.setState({addModalShow: true})}>
            Add Task
          </Button>

          <AddTaskModal show={this.state.addModalShow} onHide={addModalClose}/>

        </ButtonToolbar>
      </div>
    )

  }
}

export default Tasks
