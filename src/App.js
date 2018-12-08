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
		//this.handleTaskDone = this.handleTaskDone.bind(this);
		this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
		this.handleRadioSelection = this.handleRadioSelection.bind(this);
	}

	addTask(e) {
		e.preventDefault();
		let newTask;
		if(this._inputElement.value !== "") {
			newTask = {
				text: this._inputElement.value,
				key: Date.now(),
				isDone: false,
				radioValue: 'radio3',
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

	handleRadioSelection(e, taskkey) {

		// get task from key has to be open TODO enforce
		let clickedTask = this.state.open.find((cur) => (cur.key === taskkey))
		let filteredTodos = this.state.open.filter((cur) => (cur.key !== taskkey ))

		clickedTask.radioValue = e.target.value;
		this.setState(() =>{
			return {
				open: [...filteredTodos, clickedTask],
			}
		})
	}

	toggleCheckboxChange(taskkey, isDone) {
		// find task in array
		let taskToMove;
		if(isDone === false) // has to be in open 
		{
			let filteredTodos = this.state.open.filter((cur) => {
				if(cur.key === taskkey) {
					taskToMove = cur;
				}
				return (cur.key !== taskkey)
			});
			taskToMove.isDone = !isDone;
			this.setState((prevState) => {
				return {
					open: filteredTodos,
					done: [...prevState.done, taskToMove],
				}
			})

		} else // has to be in done
		{
			let filteredDones = this.state.done.filter((cur) => {
				if(cur.key === taskkey) {
					taskToMove = cur;
				}
				return (cur.key !== taskkey)
			});
			taskToMove.isDone = !isDone;
			this.setState((prevState) => {
				return {
					done: filteredDones,
					open: [...prevState.open, taskToMove],
				}
			})
		}

		console.log("toggle: " + taskkey);
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
					handleCheckbox={this.toggleCheckboxChange}
					handleRadioSelection={this.handleRadioSelection}
				/>
				<h6>styletest</h6>
				<Task text="test task" key="test" id="test" handleCheckbox={this.testTaskHandler} handleRadioSelection={this.testTaskHandler}></Task>
		  	</div>
	  	);
	}

	testTaskHandler() {
		console.log("test task reporting");
	}

	testData() {
		return this.state
	}

}

export default App;
