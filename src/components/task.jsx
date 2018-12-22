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
        isDone,
        radioValue,
        handleToggleState,
        handleUrgenceSelection
    } = props;
    return (
        <div>
            <div className={classes.container}>
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
                    color="default"
                    value="1"
                    checked={radioValue === "1"}
                    onChange={e => handleUrgenceSelection(e, id)}
                    disabled={isDone === true}
                />
                <Radio
                    color="default"
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
    container: {
        border: "solid 1px lightgrey",
        marginTop: "10px",
        borderRadius: "10px",
        backgroundColor: "rgba(230, 230, 250, 0.5)",
        fontSize: "20px",
        color: "gray",
        display: "flex",
        justifyContent: "space-between"
    },
    radioContainer: {},
    description: {
        alignSelf: "center"
    },
    button: {}
};

export default withStyles(styles)(Task);
