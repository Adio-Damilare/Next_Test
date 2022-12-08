import { useRouter } from 'next/router'
import React from 'react'

const Fish = () => {
    let router=useRouter();
    const takeMeHome=()=> router.push("/");
  return (
    <div>
        Fish
        <button className='btn btn-success'  onClick={takeMeHome}>Take me Home</button>
    </div>
  )
}

export default Fish