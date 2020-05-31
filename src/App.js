import React, {Component} from 'react';
import Tasks from './components/tasks';
// import NewTaskForm from './components/newTaskForm'

class App extends Component {
    render() {
        return (
            <Tasks tasks={this.state.tasks} />
            // <NewTaskForm/>
        )
    }

    state = {
        tasks: []
    };

    componentDidMount() {
        fetch('http://nathan.interview.nebullam.com:1880/tasks')
            .then(res => res.json())
            .then((data) => {
                this.setState({ tasks: data })
            })
            .catch(console.log)
    }
}

export default App;
