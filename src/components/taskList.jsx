import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Grow from '@material-ui/core/Grow'
import { Switch } from "@material-ui/core";

import Task from "./task";

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
    
    createTasks(task) {
        return (<Grow in={this.props.showDone || !task.isDone}>
                    <Task
                        isDone={task.isDone}
                        key={task.key}
                        id={task.key}
                        text={task.text}
                        doneBtnText={task.doneBtnText}
                        radioValue={task.radioValue}
                        handleToggleState={this.props.handleToggleState}
                        handleUrgenceSelection={this.props.handleUrgenceSelection}
                    />
                </Grow>);
    }

    render() {
        let todoEntries = this.props.openTasks;
        let todoEntriesDone = this.props.doneTasks;
        let listItemsOpen = todoEntries.map(this.createTasks);
        let listItemsDone = todoEntriesDone.map(this.createTasks);

        const empty = (<div></div>)
        const todo = 
        (<div>                
            <br/>
            <Typography variant="h4">Todo</Typography>
            {listItemsOpen}
        </div>)
        const both = 
        (<div>
            <br/>
            <Typography variant="h4">Todo</Typography>
            {listItemsOpen}
            <hr></hr>
            <Switch color="primary" checked={this.props.showDone} onChange={this.props.handleToggleShowDone}/>
            <Typography variant="h4">Done</Typography>
            {listItemsDone}
        </div>)

        if(listItemsOpen.length > 0 && listItemsDone.length === 0) {
            return todo
        } else if(listItemsDone.length > 0){
            return both
        } else {
            return empty
        }
    }
}

export default TaskList;