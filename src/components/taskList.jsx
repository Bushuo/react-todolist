import React, {Component} from "react";
import Task from "./task";

class TaskList extends Component {
    createTasks(task) {
        return <Task key={task.key} text={task.text}></Task>
    }
    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default TaskList;