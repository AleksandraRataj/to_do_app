import React, {Component} from "react";
import Task from "./Task";

const TaskList = (props) => {


    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    if(done.length >= 2){
        done.sort((a,b) => {
            if(a.finishDate < b.finishDate) {
                return 1;
            }
            if(a.finishDate > b.finishDate) {
                return -1;
            }
            return 0;
        });
    }

    if(active.length >= 2){
        active.sort((a,b) => {

            a = a.text.toLowerCase();
            b = b.text.toLowerCase();

            if(a < b){
                return -1;
            }
            if(a > b){
                return 1;
            }
            return 0;
        })
    }

    const activeTasks = active.map(task => <Task key={task.id} task={task} change={props.change}
                                                 delete={props.delete}/>);
    const doneTasks = done.map(task => <Task key={task.id} task={task} change={props.change} delete={props.delete}/>);

    return (
        <div className="taskList">
            <div className="active">
                <h2>Tasks to do:</h2>
                {activeTasks.length > 0 ? activeTasks : <p>You have nothing to do!</p>}
            </div>

            <div className="done">
                <h3>Completed tasks ({done.length}):</h3>
                {done.length > 5 && <p style={{fontSize: "12px"}}>View the last five tasks:</p>}
                {doneTasks.splice(0, 5)}
            </div>
        </div>
    )
}

export default TaskList;