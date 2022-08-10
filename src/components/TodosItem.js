import React from 'react'


export default function TodosItem({ todo, onDelete, }) {

  return (

    <div className='todo-container'>
      <input type="checkbox" size='30px' style={{ margin: '0 10px' }} />
      <span>{todo.title}</span>
    
      <span style={{
        position: 'fixed',
        right: 20,
        padding: '15 20px',
        cursor: 'pointer',

      }}
        onClick={() => { onDelete(todo) }}>X</span>
        <hr />
    </div>
  )
}