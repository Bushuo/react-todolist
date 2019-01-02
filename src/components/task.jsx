import React from "react";
import { IconButton, Icon } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

function Task(props) {
    const {
        classes,
        id,
        text,
        doneBtnText,
        delBtnText,
        isDone,
        radioValue,
        handleToggleState,
        handleUrgenceSelection,
        handleDescriptionChange,
        deleteTask,
        handleTaskDragStart,
        handleTaskDragOver,
        handleTaskDrop
    } = props;
    return (
        <div
            className={
                isDone ? classes.root + " " + classes.done : classes.root
            }
            draggable={!isDone}
            onDragStart={e => handleTaskDragStart(e, id)}
            onDrop={e => handleTaskDrop(e, id)}
            onDragOver={e => handleTaskDragOver(e)}
        >
            <div className={classes.container}>
                <IconButton
                    className={classes.button}
                    color="secondary"
                    onClick={e => deleteTask(e, id, isDone)}
                >
                    <Icon>{delBtnText}</Icon>
                </IconButton>
                <InputBase
                    className={classes.description}
                    defaultValue={text}
                    multiline
                    readOnly={isDone}
                    onChange={e => handleDescriptionChange(e, id)}
                />
                <IconButton
                    className={classes.button}
                    color="primary"
                    onClick={() => handleToggleState(id, isDone)}
                >
                    <Icon>{doneBtnText}</Icon>
                </IconButton>
            </div>
            <hr />
            <div className={classes.radioContainer}>
                <Radio
                    value="1"
                    checked={radioValue === "1"}
                    onChange={e => handleUrgenceSelection(e, id)}
                    disabled={isDone === true}
                    color="secondary"
                />
                <Radio
                    value="2"
                    checked={radioValue === "2"}
                    onChange={e => handleUrgenceSelection(e, id)}
                    disabled={isDone === true}
                    color="secondary"
                />
                <Radio
                    value="3"
                    checked={radioValue === "3"}
                    onChange={e => handleUrgenceSelection(e, id)}
                    disabled={isDone === true}
                    color="secondary"
                />
            </div>
        </div>
    );
}

const styles = {
    root: {
        marginTop: "10px",
        marginBottom: "10px",
        borderRadius: "10px",
        border: "solid 1px lightgrey",
        backgroundColor: "rgba(254, 95, 85, 0.1)"
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "10px",
        fontSize: "20px",
        color: "gray"
    },
    done: {
        backgroundColor: "#eee"
    },
    radioContainer: {},
    description: {
        fontSize: "20px",
        color: "gray",
        width: "100%"
    },
    button: {}
};

export default withStyles(styles)(Task);
