import React, {useState , useEffect} from 'react';
import './App.css';
import Form from "./components/form"
import Todolist from './components/todolist';



function App() {

  const getlocalstorage = () => {
   let lists = localStorage.getItem('lists')

   if (lists) {
     return JSON.parse( localStorage.getItem('lists'));
   }else {
     return[];
   }
}

  const [inputText,setinputText] = useState("");
  const [todos , settodos] = useState(getlocalstorage());
  
   
 useEffect(() => {
    localStorage.setItem('lists',JSON.stringify(todos))
 },[todos])  
  
  return (
    <div className="App">
    <header >
        <h1>todo list </h1>
    </header>

    <Form
     setinputtext={setinputText} 
     inputtext={inputText} 
     todos={todos} 
     settodos={settodos}
     setinputText={setinputText} />
   <Todolist 
   settodos={settodos} 
    todos={todos} />

    </div>
  );
}

export default App;
