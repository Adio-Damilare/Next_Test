import React,{useState} from 'react';
import { todoObj } from './Interface';

const AddTodo = (props:any) => {
    const [todo,setTodo]=useState<string>("")
     const Create=()=>{
        if(!todo){
            return alert("Please add your todo")
        }
        let data:todoObj={todo:todo}
       props.Addtodo(data)
       setTodo("")
       return
     }

     React.useEffect(()=>{
        if(props.Edit !=undefined){
            setTodo(props.Edit.todo)
        }
     },[props.Edit])
  return (
    <div className='container'>
        <div className='row '>
            <div className='col-4 alert alert-info p-5  mx-auto text-center'>
            <input type="text" value={todo} onInput={(event:any)=>setTodo(event.target.value)} placeholder="New todo" className="form-control"/>
            <button onClick={Create} className="btn btn-success mt-4"> {props.Edit==undefined? 'Create new todo':"Edit todo"}</button>
            </div>
        </div>
    </div>
  )
}

export default AddTodo