import React from 'react';
import AddTodo from '../Component/AddTodo';
import Navbar from '../Component/Navbar';
import styled from "../styles/Index.module.css"
import { todoObj } from '../Component/Interface';
import ShowTodo from '../Component/ShowTodo';
import Head from "next/head"
import Image from "next/image"

 
const Home = ( props:any) => { 
  const[AllTodo,setAllTodo]=React.useState<todoObj[]>([]);
  const[edit,setEdit]=React.useState<any>(undefined);
  const Addtodo=(e:todoObj)=>{
    if(edit==undefined){
      let newTodo:todoObj[]=[...AllTodo,e]
       setAllTodo(newTodo)
       return
    }
    let newTodo:todoObj[]=[...AllTodo];
    newTodo[edit]=e;
    setAllTodo(newTodo);
    setEdit(undefined);
    return
  }

  const DEL=(e:number)=>{
    let filterTodo:todoObj[]=AllTodo.filter((todo:todoObj,index:number)=> index!=e)
    setAllTodo(filterTodo);

  }

  const Edit=(e:number)=>{
    setEdit(e)
  }


  return (
    <>
    {/* <Navbar/> */}
    <Head>
      <title>Home page</title>
    </Head>
     {/* <AddTodo Addtodo={Addtodo} Edit={AllTodo[edit]} />
     <ShowTodo AllTodo={AllTodo} delete={DEL} Edit={Edit}/>
     <img src="/image.jpg" alt="" style={{transform:"rotate(180deg)"}}/>
     <Image src="/image.jpg" width="200" alt="helo" height='200'/> */}
     {
      props.data.map((item:any,index:any)=>(
        <div key={index}>{item.name}</div>
      ))
     }
    </>
  )
}

export default Home
// Home.getLayout=(page:any)=>{
// return(
//   <>
//   {
//     page
//   }
//   </>
// )
// }


export const getStaticProps=async()=>{
  // let response = await fetch("https://jsonplaceholder.typicode.com/users");
  // let data= await response.json();
  let data:any=[
    {
      name:"Damilare"
    }
  ]
  return {
    props:{data}
  }
}