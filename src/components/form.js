import React from 'react';

 function Form({setinputText ,todos,settodos,inputtext,setinputtext}) {

      const inputtexthandler = (e) => {
        console.log(e.target.value)
        setinputText(e.target.value)
      }

      const submittodohandler = (e) => {
          e.preventDefault()
          if (inputtext === "") {
            return;
          }
           
          settodos([
            ...todos,{text: inputtext,compleated:false,id: Math.random() * 1000 }
          ])

        setinputText('')

      }

     return(
       <div>
        <form className="fixed-bottom">
        
        <input value={inputtext}  onChange={inputtexthandler} type="text" className="todo-input" />
        <button onClick={submittodohandler}  className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      
      </form>
      </div>
     );
 }

 export default Form;