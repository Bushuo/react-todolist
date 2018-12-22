import React from "react";
import { IconButton, Icon } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";

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
        deleteTask
    } = props;
    return (
        <div
            className={classes.root}
            onClick={() => console.log("task root clicked")}
        >
            <div className={classes.container}>
                <IconButton
                    className={classes.button}
                    color="secondary"
                    onClick={e => deleteTask(e, id, isDone)}
                >
                    <Icon>{delBtnText}</Icon>
                </IconButton>
                <div className={classes.description}>{text}</div>
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
        paddingLeft: "20px",
        borderRadius: "10px",
        backgroundColor: "rgba(230, 230, 250, 0.5)",
        fontSize: "20px",
        color: "gray"
    },
    radioContainer: {},
    description: {
        alignSelf: "center"
    },
    button: {}
};

export default withStyles(styles)(Task);
