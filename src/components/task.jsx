import React from "react";
import { IconButton, Icon } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';

function Task({id, text, doneBtnText, isDone, radioValue, handleToggleState, handleUrgenceSelection, style}) {
	return (
		<div className="task__container" style={style}>
			<div className="task__size">
				<Radio 
					className="task__radio--B" 
					color="default" value="1"
					checked={radioValue === "1"} 
					onChange={(e) => handleUrgenceSelection(e, id)}
					disabled={isDone === true}
				/>
				<Radio 
					className="task__radio--M" 
					color="default" value="2"
					checked={radioValue === "2"}
					onChange={(e) => handleUrgenceSelection(e, id)}
					disabled={isDone === true}
				/>
				<Radio 
					className="task__radio--S" 
					color="default" value="3"
					checked={radioValue === "3"}
					onChange={(e) => handleUrgenceSelection(e, id)}
					disabled={isDone === true}
				/>
			</div>
			
			<div className="task__description">{text}</div>
			<IconButton
				color="primary"
				onClick={()=>handleToggleState(id, isDone)}
			>
				<Icon>{doneBtnText}</Icon>
			</IconButton>
		</div>
	);
};

export default Task;
