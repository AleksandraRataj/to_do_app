import React, {Component} from 'react';
import './App.css';
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {

    counter = 6;

    state = {
        tasks: [
            {
                id: 0,
                text: "Take the dog for a walk.",
                date: "2020-12-29",
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 1,
                text: "Go to the cinema with Maria",
                date: "2021-01-04",
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 2,
                text: "Make a shopping list.",
                date: "2020-12-28",
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 3,
                text: "Call Aunt Christine.",
                date: "2020-12-28",
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 4,
                text: "Make a New Year's Eve dinner!",
                date: "2020-12-31",
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 5,
                text: "Replant plants in the living room.",
                date: "2020-12-28",
                important: false,
                active: true,
                finishDate: null,
            },
        ]
    };

    changeTaskStatus = (id) => {
        const tasks = [...this.state.tasks];
        tasks.forEach(task => {
            if (task.id === id) {
                task.active = false;
                task.finishDate = new Date().getTime();
            }
        });
        this.setState({tasks});
    }

    deleteTask = (id) => {
        // const tasks = [...this.state.tasks];
        // const index = tasks.findIndex(task => task.id === id);
        // tasks.splice(index, 1);
        // this.setState({tasks});

        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id !== id)
        this.setState({tasks});
    }

    addTask = (text, date, important) => {
        const task = {
            id: this.counter,
            text,
            date,
            important,
            active: true,
            finishDate: null,
        }
        this.counter++;

        this.setState(prevState => ({
            tasks: [...prevState.tasks, task],
        }));

        return true;
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>ToDo App</h1>
                </div>
                <AddTask
                    add={this.addTask}
                />
                <TaskList
                    tasks={this.state.tasks}
                    change={this.changeTaskStatus}
                    delete={this.deleteTask}
                />
            </div>
        );
    }
}

export default App;