import React from 'react'

const GoodId = (props:any) => {
  return (
    <div>

{
    props.data.name
}
    </div>
  )
}

export default GoodId
export const getServerSideProps= async (context:any)=> {
  let response=await fetch(`http://localhost:8000/${context.params.GoodId}`)
  let data:any=await response.json()
  return {
      props:{
          data:data.data
      }
  }
}