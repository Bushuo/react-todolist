import React from "react";
import { Checkbox} from "@material-ui/core";
import Radio from '@material-ui/core/Radio';

function Task({id, text, isDone, radioValue, handleCheckbox, handleRadioSelection}) {
	return (
		<div className="task__container">
			<div className="task__size">
				<Radio 
					className="task__radio--B" 
					color="default" value="radio1" 
					checked={radioValue === 'radio1'} 
					onChange={(e) => handleRadioSelection(e, id)}
				/>
				<Radio 
					className="task__radio--M" 
					color="default" value="radio2" 
					checked={radioValue === 'radio2'}
					onChange={(e) => handleRadioSelection(e, id)}
				/>
				<Radio 
					className="task__radio--S" 
					color="default" value="radio3" 
					checked={radioValue === 'radio3'}
					onChange={(e) => handleRadioSelection(e, id)}
				/>
			</div>
			
			<div className="task__description">{text}</div>
			<Checkbox 
				type="checkbox"
				color="primary"
				onClick={()=>handleCheckbox(id, isDone)}
				checked={isDone === true}
			/>
		</div>
	);
};

export default Task;
