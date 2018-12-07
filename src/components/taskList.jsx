import React, {Component} from "react";
import Task from "./task";

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(task) {
        return <Task
                    checked={task.done}
                    key={task.key} 
                    text={task.text}>
                </Task>
    }

    taskDone(key, e) {
        this.props.taskDone(key, e);
    }

    render() {
        let todoEntries = this.props.openTasks;
        let todoEntriesDone = this.props.doneTasks;
        let listItemsOpen = todoEntries.map(this.createTasks);
        let listItemsDone = todoEntriesDone.map(this.createTasks);

        return (
            <div>
                {listItemsOpen}
                <p>---</p>
                {listItemsDone}
            </div>
        );
    }
}

export default TaskList;