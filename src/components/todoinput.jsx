import {useState} from 'react';

export const Todoinput=({getdata})=>{
    const [text,setText]=useState("");
    return (
        <div>
              <input onChange={(e)=>{  
                  setText(e.target.value)  
              }} type="text" placeholder="Write Something Here"></input>
              <button id='add' onClick={()=>{ 
                  getdata(text)
              }}>+</button>
        </div>
    )
}