import React, {Component} from "react";
import Task from "./task";

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
    
    createTasks(task) {
        return <Task
                    isDone={task.isDone}
                    key={task.key}
                    id={task.key}
                    text={task.text}
                    radioValue={task.radioValue}
                    handleCheckbox={this.props.handleCheckbox}
                    handleRadioSelection={this.props.handleRadioSelection}
                />
    }

    render() {
        let todoEntries = this.props.openTasks;
        let todoEntriesDone = this.props.doneTasks;
        let listItemsOpen = todoEntries.map(this.createTasks);
        let listItemsDone = todoEntriesDone.map(this.createTasks);

        if(listItemsDone.length > 0) {
            return (
                <div>
                    <h4>Todo</h4>
                    {listItemsOpen}
                    <hr></hr>
                    <h4>Done</h4>
                    {listItemsDone}
                </div>
            )
        } else {
            return (
                <div>
                    <h4>Todo</h4>
                    {listItemsOpen}
                </div>
            );
        }
    }
}

export default TaskList;