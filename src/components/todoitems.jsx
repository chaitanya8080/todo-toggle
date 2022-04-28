
export const TodoItems=({todo,handelstatus})=>{
    return(
        <div className='list'>
      
            {todo.title}--{todo.status ? "Done" : "NotDone"} 
            <button className={todo.status ? "Done" : "NotDone"} id="toggle" onClick={()=>handelstatus(todo.id)}>
            Toggle</button>
           
        
        </div>
    )
}