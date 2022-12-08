import React from "react";
import Link from "next/link"


const Goods=(props:any)=>{
    return(
        <div className="container">

        <div className="row">
            {
                props.data.map((good:any,index:number)=>(
                    <Link href={`/goods/${good.id}`} className="col-5 shadow-lg py-5 rounded m-3 text-decoration-none text-dark " key={index}>
                        <h5 className="text-center">{good.name}</h5>
                        <article>{good.price}</article>
                    </Link>
                ))
            }
        </div>

        </div>
    )
}

export default Goods

export const getStaticProps=async()=>{
    let  res= await fetch("http://localhost:8000/");
    let {datas}=await res.json();
    return{
        props:{
            data:datas
        }
    }
     
}