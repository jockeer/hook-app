import React from 'react';

const TodoListItem = ({todo, i, handleToggle, handleDelete}) => {
    return (  
        <li 
            className="list-group-item">
            <p className={`${ todo.done && 'complete' }`} onClick={()=>handleToggle(todo.id)}>{i+1}.- {todo.desc}</p> 
            <button type='button' className="btn btn-danger" onClick={ () => handleDelete(todo.id)}>Borrar</button>
        </li>
    );
}
 
export default TodoListItem;