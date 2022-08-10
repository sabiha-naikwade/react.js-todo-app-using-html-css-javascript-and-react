import './App.css';
import AddTodo from './components/AddTodo';
import Todos from "./components/Todos";
// import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  
  
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo=(title)=>{
    
    const myTodo={
      title:title
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)
  }
  const [todos, setTodos] = useState([
    {
      title: 'Hit the gym'
    },
    {
      title: 'Pay bills'
    },
    {
      title: 'Meet George'
    },
    {
      title: 'Buy eggs'
    },
    {
      title: 'Read a book'
    },
    {
      title: 'Organize office'
    }
  ]);
  return (
    <>
      <div className="main-container">
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete} />
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;
