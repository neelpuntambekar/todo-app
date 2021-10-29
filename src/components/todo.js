import React ,{useState,useEffect} from 'react';

function Todo ({text ,todo ,settodos,todos}) {

    const [checked,setchecked] = useState(false);
     
    useEffect(() => {
        localStorage.setItem("checked",JSON.stringify(checked))
     },[checked])  
      

    const deletehandler = () => {
        settodos(todos.filter((el) => el.id !== todo.id));
           
    };

   const completethandler =() => {
    setchecked(!checked)
    console.log(checked);
   };
  
   return(
      <div className="todo">
          <br></br>
            <li className={`todo-item ${checked ? 'completed' : ''} `}  >{text}  </li>
        
            <button onClick={deletehandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>

            <button onClick={completethandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>   
            <br></br>
      </div>
);

}

export default Todo;