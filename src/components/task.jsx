import React, {Component} from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRadio: 'radio3',
		}
		this.handleSelectionChange = this.handleSelectionChange.bind(this);
	}

	handleSelectionChange(changeEvent) {
		this.setState({
			selectedRadio: changeEvent.target.value,
		});
	}

	render() {
		return (
			<div className="task__container">
				<div className="task__size">
					<Radio 
						className="task__radio--B" 
						color="default" value="radio1" 
						checked={this.state.selectedRadio === 'radio1'} 
						onChange={this.handleSelectionChange}
					/>
					<Radio 
						className="task__radio--M" 
						color="default" value="radio2" 
						checked={this.state.selectedRadio === 'radio2'}
						onChange={this.handleSelectionChange}
					/>
					<Radio 
						className="task__radio--S" 
						color="default" value="radio3" 
						checked={this.state.selectedRadio === 'radio3'}
						onChange={this.handleSelectionChange}
					/>
				</div>
				
				<div className="task__description">{this.props.text}</div>
				<FormControlLabel
					className="task__controls"
					label="done"
					labelPlacement="end"
					control={<Checkbox 
								color="primary" 
								className="task__btn--done" 
								onChange={this.props.onChange}
							/>}
				/>
			</div>
		);
	}
};

export default Task;
