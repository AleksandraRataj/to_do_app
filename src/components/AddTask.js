import React, {Component} from "react";

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10);

    state = {
        text: "",
        checked: false,
        date: this.minDate,
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    }

    handleClick = () => {
        const {text, date, checked} = this.state;

        if(text.length > 0){
            const add = this.props.add(text, date, checked);

            if (add){
                this.setState({
                    text: "",
                    checked: false,
                    date: this.minDate,
                })
            }

        } else {
            alert("The task name cannot be blank!");
        }
    }

    render() {

        let maxDate = this.minDate.slice(0,4)*1+1;
        maxDate = maxDate + "-12-31"

        return(
            <div className="form">
                <input className="newTask" type="text" placeholder="Add task" value={this.state.text} onChange={this.handleText}/>

                <div className="wrapper">
                    <label htmlFor="important">
                        <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox}/>Priority
                    </label>

                    <label htmlFor="date">To be done by:
                        <input type="date" id="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/>
                    </label>

                    <button onClick={this.handleClick}>Add task</button>
                </div>

            </div>
        )
    }
}

export default AddTask;