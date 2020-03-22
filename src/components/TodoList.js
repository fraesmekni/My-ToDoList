import React from 'react';import {FaListAlt, FaCheckSquare ,FaTrash, FaPlusSquare} from 'react-icons/fa';
import ToDo from './ToDo';
const TodoList = ({tasks , match , onToggleCompleted}) => {
    let filtredTasks 
    switch (match.params.filter) {
        case 'completed':
            filtredTasks= tasks.filter (task => task.completed)
            
            break;
    
        default:
            filtredTasks=tasks;
    }
    if (filtredTasks.length===0){
        return(
            <React.Fragment>
            <h1 className="m-3"> Task List </h1>
            <ul className="list-group m-3">
                <li className="list-group-item">No Tasks to show</li>
           </ul></React.Fragment>
           )
    }
    else{
        return(
            <React.Fragment>
            <h1 className="m-3"> Task List </h1>
            <ul className="list-group m-3">
             {
                 filtredTasks.map((task) => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted}/> )
             }
           </ul></React.Fragment>
           )
    }
     }
export default TodoList ; 