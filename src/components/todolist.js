import React from 'react';
import Todo from './todo';
function Todolist({ settodos,todos,}) {

    return(
    
        <div className="todo-container">
        <ul className="todo-list">
             {todos.map(todo => (
                 <Todo  
                 settodos={settodos} 
                 todos={todos} 
                 todo={todo} 
                 key={todo.id} 
                 text={todo.text}
                 id={todo.id} />
             ))}
        </ul>
      </div>
 
    );
}

export default Todolist;