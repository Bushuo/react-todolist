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
        handleTaskDragEnd
    } = props;
    return (
        <div
            className={classes.root}
            draggable
            onDragStart={e => handleTaskDragStart(e, id)}
            onDragEnd={e => handleTaskDragEnd(e)}
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

            <div className={classes.radioContainer}>
                <Radio
                    color="primary"
                    value="1"
                    checked={radioValue === "1"}
                    onChange={e => handleUrgenceSelection(e, id)}
                    disabled={isDone === true}
                />
                <Radio
                    color="secondary"
                    value="2"
                    checked={radioValue === "2"}
                    onChange={e => handleUrgenceSelection(e, id)}
                    disabled={isDone === true}
                />
                <Radio
                    color="default"
                    value="3"
                    checked={radioValue === "3"}
                    onChange={e => handleUrgenceSelection(e, id)}
                    disabled={isDone === true}
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
        border: "solid 1px lightgrey"
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "10px",
        backgroundColor: "rgba(230, 230, 250, 0.5)",
        fontSize: "20px",
        color: "gray"
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
