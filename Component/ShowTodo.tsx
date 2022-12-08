import React from "react";
import { todoObj } from "./Interface";

const ShowTodo = (props: any) => {
  const calculate = (e: number) => e + 1;
  const Del=(e:number)=>{
  props.delete(e)
  }
  const Edit=(e:number)=>{
    props.Edit(e)

  }
  const MappedTodos = () => {
    return (
      <>
        {props.AllTodo.map((todo: todoObj, index: any) => (
          <tr key={index}>
            <td>{calculate(index)}</td>
            <td>{todo.todo.length>10? `${todo.todo.substring(0,10)}...`:todo.todo}</td>
            <td>
              <button className="btn btn-success text-dark me-2" onClick={()=>Edit(index)} >Edit</button>
              <button className="btn btn-danger" onClick={()=>Del(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <>
      {props.AllTodo.length > 0 ? (
        <div className="container-fluid">
          <div className="row">
            <div className="col-7 mx-auto">
              <table className="table rounded rounded-3 border table-bordered">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Todo</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody><MappedTodos/></tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col-4 text-center mx-auto">
              No Todo Add new todo
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowTodo;
