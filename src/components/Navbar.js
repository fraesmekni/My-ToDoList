import React from 'react';
import {FaListAlt, FaCheckSquare ,FaTrash, FaPlusSquare} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
const Navbar = ({onDeleteCompleted}) => (
    <footer className="d-flex justify-content-between bg-secondary p-3" id="mainfooter">
    <div className="btn-grp">
    <NavLink to="/" className="btn btn-outline-dark btn-light" exact={true}><FaListAlt /></NavLink>
    <NavLink to="/completed" className="btn btn-outline-dark btn-light"><FaCheckSquare /> </NavLink>
    <NavLink to="/add-task" className="btn btn-outline-dark btn-light" exact={true}><FaPlusSquare /></NavLink>
    </div>  <p>  Copyright © 2020 ToDoList | MEKNI FARES: <a href="https://www.facebook.com/mohamedfares.mekni" target="_blank" rel= " noopener noreferer"  >https://www.facebook.com/mohamedfares.mekni  </a>     </p> 
    <button className="btn btn-outline-dark btn-light" onClick={onDeleteCompleted} > <FaTrash />  </button>
</footer>
)
export default Navbar;