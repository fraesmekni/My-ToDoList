import React from 'react';
import {FaListAlt, FaCheckSquare ,FaTrash, FaPlusSquare} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


class AddTask extends React.Component {
    handleSubmit = (e) =>   {
        e.preventDefault()
        this.props.onAddTask(this.NewTask.value)
        this.props.history.push('/')
    }
    render(){
return( <React.Fragment>
    <section>  
    <h1 className="m-3" >New Task</h1> 
        <div className=" card mx-3 "> 
            <form className="card-body" onSubmit={(e)=>this.handleSubmit(e) }>
            <div className="form-group">
            <label form="taskName">Task Name</label>
                <input className="form-control" name="taskName" id="taskName" required ref={input => this.NewTask=input} />
                </div>
                <button type="submit" className="btn btn-primary">Add Task </button>
            </form>
        </div>
        
        </section>
        </React.Fragment>
);
    }
}
export default AddTask;