import React from 'react'
import TodosItem from './TodosItem'

export default function Todos(props) {
  return (
    <div className='container1'>
      {props.todos.length===0 ? "No todos to display" : 
        props.todos.map((todo)=>{
        return <TodosItem todo={todo} key={todo.title} onDelete={props.onDelete}/>
      })
      }
    </div>
  )
}