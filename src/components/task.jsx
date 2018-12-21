import React from "react";
import { IconButton, Icon } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles'


function Task(props) {
	const {classes, id, text, doneBtnText, isDone, radioValue, handleToggleState, handleUrgenceSelection} = props;
	return (
		<div className={classes.container} >
			<div className={classes.size}>
				<Radio 
					color="default" value="1"
					checked={radioValue === "1"} 
					onChange={(e) => handleUrgenceSelection(e, id)}
					disabled={isDone === true}
				/>
				<Radio 
					color="default" value="2"
					checked={radioValue === "2"}
					onChange={(e) => handleUrgenceSelection(e, id)}
					disabled={isDone === true}
				/>
				<Radio 
					color="default" value="3"
					checked={radioValue === "3"}
					onChange={(e) => handleUrgenceSelection(e, id)}
					disabled={isDone === true}
				/>
			</div>
			
			<div className={classes.description}>{text}</div>
			<IconButton
				color="primary"
				onClick={()=>handleToggleState(id, isDone)}
			>
				<Icon>{doneBtnText}</Icon>
			</IconButton>
		</div>
	);
};

const styles = {
	container: {
		border: 'solid 1px lightgrey',
		width: '80%',
		marginLeft: '10%',
		marginTop: '10px',
		borderRadius: '10px',
		backgroundColor: 'rgba(230, 230, 250, 0.5)',
		fontSize: '20px',
		color: 'gray'
	},
	size: {
		display: 'inline-block'
	},
	description: {
		//width: '80%',
		display: 'inline-block',
		paddingLeft: '50px',
		textAlign: 'start'
	}

};

export default withStyles(styles)(Task);
