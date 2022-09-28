import React, { useState } from 'react'


export default function AddTodo({addTodo}) {
    const [title,setTitle]=useState('');
    
    const submit=(e)=>{e.preventDefault()
        if(title){
            addTodo(title)
        }
        
    }
    
    return (
        <div className='container'>
           <h1>My Todo List</h1>
          <span>
          <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className='inp' type="text" placeholder='Title' />
          <button id='btn' onClick={submit}>Add</button>
          </span>
        </div>
    
    )
}