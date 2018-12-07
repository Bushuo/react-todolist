import React, { Component } from "react";
import NavBar from "./components/navbar";
import Button from "@material-ui/core/Button";
import TaskList from "./components/taskList";
import Task from "./components/task";
import "./App.css";



class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: [],
			done: [],
		}

		this.addTask = this.addTask.bind(this);
		this.handleTaskDone = this.handleTaskDone.bind(this);
	}

	addTask(e) {
		e.preventDefault();
		let newTask;
		if(this._inputElement.value !== "") {
			newTask = {
				text: this._inputElement.value,
				key: Date.now(),
				done: false,
			}

			// prevState gives back the state just before the function calls
			// with the concat function we make a new array and add newTask
			// so no data is mutated
			this.setState((prevState) => {
					return {
						open: [...prevState.open, newTask], 
					}
				}
			);
		}
		
		this._inputElement.value = "";
	}

	handleTaskDone(key, e) {
		let handeledTask;
		// could be handeled by an extra function to avoid code duplication
		if(e.target.checked === true) {
			console.log("checked");
			let filteredTasks = this.state.open.filter( (el) =>{
				if(el.key === key) {
					handeledTask = el;
				}
				return (el.key !== key);
			});
			this.setState((prevState) => {
				return {
					open: filteredTasks,
					done: [...prevState.done, handeledTask]
				}
			})
		}
		else {
			console.log("not checked");
			let filteredTasks = this.state.done.filter(el => {
				if(el.key === key) {
					handeledTask = el;
				}
				return (el.key !== key);
			});
			this.setState((prevState) => {
				return {
					done: filteredTasks,
					open: [...prevState.open, handeledTask]
				}
			})
		}
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
				<TaskList 
					openTasks={this.state.open}
					doneTasks={this.state.done}
					taskDone={this.handleTaskDone}
				/>
				<Task text="test task"></Task>
		  	</div>
	  	);
	}

	testData() {
		return this.state
	}

}

export default App;
