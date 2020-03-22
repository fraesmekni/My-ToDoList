import React from 'react';
import ReactDOM from 'react-dom';
import logo, { ReactComponent } from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaListAlt, FaCheckSquare ,FaTrash, FaPlusSquare} from 'react-icons/fa';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import {BrowserRouter , Switch,Route,} from "react-router-dom";
import AddTask from './components/AddTask';
import'./css/ToDo.css';
import InitialData from './components/InitialData';
import ToDo from './components/ToDo.js';
import uniqueid from'uniqueid';
import Fetching from './components/Fetching';
class App extends React.Component {
  state = {
    tasks : [],
    fetching : true
  }
  //Did mount of the Fetching componenet when the data from the web services is uploaded
  componentDidMount=() => {
    let delay = Math.floor(Math.random() * 5000 )

    setTimeout(() => {this.setState({
      fetching:false ,
      tasks : InitialData
    })} , delay )
  }
//Update of a completed task 
  onToggleCompleted = (taskId) => {
    let taskToUpdate = this.state.tasks.find( task => task.id === taskId )
    taskToUpdate.completed = !taskToUpdate.completed
    this.setState(prevState => (
      prevState.tasks.map(task => {
        return task.id === taskId ? taskToUpdate : task 
      })
    ))
  }
  //new task
  onAddTask =(newTaskName) => {
    let newTask = {
      id: uniqueid(),
      name : newTaskName,
      completed : false
    }
//add task on tasks' table
    this.setState(prevState =>({
      tasks:[...prevState.tasks, newTask]
    })) 
  }
//delete task
  onDeleteCompleted =() => {
    this.setState(prevState => {
      let newState = prevState.tasks.filter(task => !task.completed)
      return {
        tasks : newState
      }
    })
  }

  render(){
    return( <section id="toDo">
    {this.state.fetching ? <Fetching /> : null }
      <React.Fragment>
      
      <BrowserRouter>
      <Switch> 
          <Route path="/add-task" render = {(props) => <AddTask {...props} onAddTask={this.onAddTask}/>} />
          <Route path="/:filter?" render={(props) => <TodoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} /> }/> 
        </Switch>
        <Navbar onDeleteCompleted={this.onDeleteCompleted}/>
      </BrowserRouter>
      </React.Fragment></section> 
    )
  }
}
export default App;
