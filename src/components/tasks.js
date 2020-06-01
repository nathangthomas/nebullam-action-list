import React, {Component} from 'react'
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap'
import {AddTaskModal} from './addTaskModal'

export class Tasks extends Component {

  constructor(props){
    super(props);
    this.state ={tasks:[], addModalShow : false}
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

  render(){
  const {tasks} = this.state;
  let addModalClose=() => this.setState({addModalShow:false});

    return(
      <div>
        <Table className="mt-4" stripped bordered hover>
        <thread>
          <tr>
            <th> Action Items </th>
            <th> Details </th>
          </tr>
        </thread>
        <tbody>
          {tasks.map(task=>
            <tr key ={task.task_id}>
              <td>{task.name}</td>
              <td>{task.details}</td>
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
