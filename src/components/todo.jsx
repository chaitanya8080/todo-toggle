import { useState } from 'react'
import { Todoinput } from './todoinput'
import {TodoItems} from './todoitems'
import {nanoid} from 'nanoid';
function Todo() {
    
    const [todoList,setTodoList]=useState([]);
    const getlistdata=(todo)=>{
        const payload={
            title:todo,
            status:false,
            id:nanoid(5),
        }
        console.log("recieved",todo);

        setTodoList([...todoList,payload])  
    }
    const handelstatus=(id)=>{
  
        setTodoList(todoList.map(e=>e.id === id ? {...e, status : !e.status}:e))
      
    }  
    return (
        <div className='main'>
            <h1>Todo List</h1>
          
            <Todoinput getdata={getlistdata}></Todoinput>
                { 
                    todoList.map((e)=>( 
                    <TodoItems handelstatus={handelstatus} todo={e}></TodoItems>
                    ))
                }
        </div>

    )
}
export { Todo }