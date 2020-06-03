import React, { Component } from 'react';


export class ProperPunct extends Component {
 constructor(props) {
   super(props);
   this.state = { task_count: props.task_count }
 }


render() {
  console.log(this.state.task_count)
  if (this.state.task_count == "1"){
    return(
      <div>
        You have only 1 task left!
      </div>
    )
  } else {
    return(
      <div>
        You have {this.state.task_count} tasks on your list.
      </div>
    )
    }
  }
}

export default ProperPunct
