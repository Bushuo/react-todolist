import React, { Component } from "react";
import NavBar from "./components/navbar";
import Button from "@material-ui/core/Button";
import TaskList from "./components/taskList";
import "./App.css";



class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: [],
		}

		this.addTask = this.addTask.bind(this);
	}

	addTask(e) {
		e.preventDefault();
		let newTask;
		if(this._inputElement.value !== "") {
			newTask = {
				text: this._inputElement.value,
				key: Date.now(),
			}

			// prevState gives back the state just before the function calls
			// with the concat function we make a new array and add newTask
			// so no data is mutated
			this.setState((prevState) => {
					return {
						open: prevState.open.concat(newTask), 
					}
				}
			);
		}
		
		this._inputElement.value = "";
	}

	render() {

		return (
			<div className="App">
				<NavBar />
				<form className="input__container" onSubmit={this.addTask}>
					<input 
						className="input__text" 
						ref={(a) => this._inputElement = a} 
						placeholder="new task"
					/>
					<div className="input__btn__cont">
						<Button
							className="input__btn--add" 
							type="submit"
							children="" 
							variant="contained" 
							color="primary"
						>
							add
						</Button>
					</div>
				</form>
				<TaskList entries={this.state.open}></TaskList>
		  	</div>
	  	);
  	}
}

export default App;
