import React from "react";

const Task = (props) => {

    const style = {
        color: "red",
        fontWeight: 500,
    }

    const {id, text, date, active, important, finishDate} = props.task;

    if (active) {
        return (
            <div className="task">
                <p>
                    <strong style={important ? style : null}>{text}</strong> until <span><em>{date}</em></span>
                    <button onClick={() => props.change(id)}>It's done!</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        )
    } else {

        const finish = new Date(finishDate).toLocaleString();

        return (
            <div>
                <p>
                    <strong>{text}</strong> (until <em>{date}</em>)
                    - made on <span>{finish}</span>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        )
    }
}

export default Task;