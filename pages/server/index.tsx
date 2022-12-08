import React from 'react'



const Goods = (props:any) => {
    console.log(props)
  return (
    <div>
        {
            props.data.map((good:any,index:number)=>(
                <div key={index}>
                    {
                        good.name
                    }

                </div>
            ))
        }
    </div>
  )
}


export default Goods

export const getServerSideProps= async ()=> {
    let response=await fetch("http://localhost:8000/")
    let data:any=await response.json()
    // console.log(data)
    return {
        props:{
            data:data.datas
        }
    }
}