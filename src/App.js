import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";

import NavBar from "./components/navbar";
import TaskList from "./components/taskList";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: [],
            done: [],
            inputText: "",
            showDone: false
        };

        this.addTask = this.addTask.bind(this);
        this.handleToggleState = this.handleToggleState.bind(this);
        this.handleUrgenceSelection = this.handleUrgenceSelection.bind(this);
        this.handleInputText = this.handleInputText.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
            if (key === "inputText") {
                continue;
            }
            // if the key exists in localStorage
            if (localStorage.hasOwnProperty(key)) {
                // get the key's value from localStorage
                let value = localStorage.getItem(key);

                // parse the localStorage string and setState
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch (e) {
                    // handle empty string
                    this.setState({ [key]: value });
                }
            }
        }
    }

    saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
          // save to localStorage
          localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
      }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();

        // add event listener to save state to localStorage
        // when user leaves/refreshes the page
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
          "beforeunload",
          this.saveStateToLocalStorage.bind(this)
        );
    
        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
    }

    addTask(e) {
        e.preventDefault();
        let inputText = this.state.inputText;
        let newTask;
        if (inputText !== "") {
            newTask = {
                text: inputText,
                key: Date.now(),
                isDone: false,
                radioValue: "3",
                doneBtnText: "done",
                delBtnText: "clear"
            };

            // prevState gives back the state just before the function calls
            // with the concat function we make a new array and add newTask
            // so no data is mutated
            this.setState(
                prevState => {
                    return {
                        open: [...prevState.open, newTask],
                        inputText: ""
                    };
                }
            );
        }
    }

    deleteTask(e, taskkey, isDone) {
        let index;
        let tasksToModify;
        if(!isDone) {
            index = this.state.open.findIndex(cur => cur.key === taskkey);
            tasksToModify = this.state.open;
        }
        else {
            index = this.state.done.findIndex(cur => cur.key === taskkey);
            tasksToModify = this.state.done;
        }
        if(index === -1) { // should never happen
            return;
        }
        tasksToModify = [...tasksToModify.slice(0, index), ...tasksToModify.slice(index+1)];
        if(isDone) {
            this.setState({done: tasksToModify})
        }
        else {
            this.setState({open : tasksToModify})
        }

    }

    handleUrgenceSelection(e, taskkey) {
        const index = this.state.open.findIndex(cur => cur.key === taskkey);
        if (index === -1) {
            return; // only sort in open
        }
        const newValue = e.target.value; // e is a different event inside the arrow function

        this.setState(
            ({ open }) => ({
                open: [
                    ...open.slice(0, index),
                    {
                        ...open[index],
                        radioValue: newValue
                    },
                    ...open.slice(index + 1)
                ]
            }),
            () => {
                // state should not be mutated - work on a copy
                // do not sort with size 1
                if (this.state.open.length > 1) {
                    let sortetTasks = this.state.open;
                    this.insertionSort(sortetTasks);
                    this.setState({ open: sortetTasks });
                }
            }
        );
    }

    insertionSort(taskArray) {
        let progressIndex = 1;
        while (progressIndex < taskArray.length) {
            let innerIndex = progressIndex;
            while (
                innerIndex > 0 &&
                Number(taskArray[innerIndex - 1]["radioValue"]) >
                    Number(taskArray[innerIndex]["radioValue"])
            ) {
                // swap
                let buffer = taskArray[innerIndex - 1];
                taskArray[innerIndex - 1] = taskArray[innerIndex];
                taskArray[innerIndex] = buffer;
                innerIndex--;
            }
            progressIndex++;
        }
    }

    handleToggleState(taskkey, isDone) {
        // find task in array
        let taskToMove;
        if (isDone === false) {
            // has to be in open
            let filteredTodos = this.state.open.filter(cur => {
                if (cur.key === taskkey) {
                    taskToMove = cur;
                }
                return cur.key !== taskkey;
            });
            taskToMove.isDone = !isDone;
            taskToMove.doneBtnText = "undo";
            this.setState(
                prevState => {
                    return {
                        open: filteredTodos,
                        done: [...prevState.done, taskToMove]
                    };
                }
            );
        } // has to be in done
        else {
            let filteredDones = this.state.done.filter(cur => {
                if (cur.key === taskkey) {
                    taskToMove = cur;
                }
                return cur.key !== taskkey;
            });
            taskToMove.isDone = !isDone;
            taskToMove.doneBtnText = "done";
            this.setState(
                prevState => {
                    return {
                        done: filteredDones,
                        open: [...prevState.open, taskToMove]
                    };
                }
            );
        }
    }

    handleInputText(e) {
        const value = e.target.value;
        this.setState({ inputText: value });
    }

    handleToggleShowDone = () => {
        this.setState(prevState => ({ showDone: !prevState.showDone }));
    };

    handleUrgenceAreaClicked = () => {};

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <NavBar />
                <div className={classes.wrapper}>
                    <form
                        className={classes.inputContainer}
                        onSubmit={this.addTask}
                    >
                        <Input
                            className={classes.inputText}
                            value={this.state.inputText}
                            placeholder="new task"
                            onChange={e => this.handleInputText(e)}
                        />
                        <div className={classes.inputButtonContainer}>
                            <Button
                                type="submit"
                                children=""
                                variant="contained"
                                color="primary"
                            >
                                add
                            </Button>
                        </div>
                    </form>
                    <TaskList
                        openTasks={this.state.open}
                        doneTasks={this.state.done}
                        handleToggleState={this.handleToggleState}
                        deleteTask={this.deleteTask}
                        handleUrgenceSelection={this.handleUrgenceSelection}
                        handleToggleShowDone={this.handleToggleShowDone}
                        showDone={this.state.showDone}
                    />
                </div>
            </div>
        );
    }
}

const styles = {
    root: {
        textAlign: "center"
    },
    wrapper: {
        width: "70%",
        margin: "auto"
    },
    inputContainer: {
        marginTop: "80px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    inputText: {
        width: "100%",
        paddingLeft: "15px"
    },
    inputButtonContainer: {
        marginTop: "10px"
    }
};

export default withStyles(styles)(App);
