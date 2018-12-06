import React, {Component} from "react";
import { Checkbox } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';

class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRadio: 'radio3',
		}
	}

	handleSelectionChange(changeEvent) {
		this.setState({
			selectedRadio: changeEvent.target.value,
		});
	}

	render() {
		return (
			<div className="task__container" id={this.props.id}>
				<div className="task__size">
					<Radio 
						className="task__radio--B" 
						color="default" value="radio1" 
						checked={this.state.selectedRadio === 'radio1'} 
						onChange={this.handleSelectionChange.bind(this)}
					/>
					<Radio 
						className="task__radio--M" 
						color="default" value="radio2" 
						checked={this.state.selectedRadio === 'radio2'}
						onChange={this.handleSelectionChange.bind(this)}
					/>
					<Radio 
						className="task__radio--S" 
						color="default" value="radio3" 
						checked={this.state.selectedRadio === 'radio3'}
						onChange={this.handleSelectionChange.bind(this)}
					/>
				</div>
				
				<div className="task__description">{this.props.text}</div>

				<div className="task__controls">
					<Checkbox className="task__btn--done" color="primary"></Checkbox>
					<Button className="task__btn--del" children="" variant="contained" color="primary">del</Button>
				</div>
			</div>
		);
	}
};

export default Task;
