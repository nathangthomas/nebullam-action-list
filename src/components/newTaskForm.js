import React, { Component } from 'react'
import axios from 'axios'

 class NewTaskForm extends Component {
   constructor(props) {
     super(props)

     this.state = {
       name: '',
       details: '',
       complete: '',
       user_id: ''
     }
   }

   changeHandler = event => {
     this.setState({[event.target.name]: event.target.value})
   }

   submitHandler = event => {
     event.preventDefault()
     console.log(this.state)
     axios.post('http://nathan.interview.nebullam.com:1880/tasks', this.state)
      .then(response =>  {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
   }


  render() {
    const { name, details, complete, user_id } = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name"> Task </label>
            <input type='text' name="name" value={name} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="text"> Descriptoin </label>
            <input type='text' name="details" value={details} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="complete"> True/False </label>
            <input type='text' name="complete" value={complete} onChange={this.changeHandler} />
          </div>
          <div>
            <label htmlFor="name"> User ID </label>
            <input type='text' name="user_id" value={user_id} onChange={this.changeHandler} />
          </div>
          <button type="submit"> Add Task </button>
        </form>
      </div>
    )
  }
}

export default NewTaskForm
