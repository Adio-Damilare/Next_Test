import { NextRouter, useRouter } from 'next/router'
import React from 'react'

const Posts = () => {
    // let router:NextRouter=useRouter();
    // if(router.isFallback){
    //     return (
    //         <div>
    //             loading....
    //         </div>
    //     )
    // }

  return (
    <div>
        {/* <h1>{props.data}</h1> */}
    </div>
  )
}



export default Posts

// export const getStaticPaths=async()=>{
//     let response:any= await fetch(`https://jsonplaceholder.typecode.com/posts/`);
//     let data:any =await response.json();
//     // let paths=data.map((post:any)=>{
//     //     return {
//     //         params:{id:`${post.id}`}
//     //     }
//     // })
//     // return {
//     //     paths,
//     //     fallback:false,
//     // }


//     // return {
//     //     paths:[{params:{id:"1"}},{params:{id:"2"}},{params:{id:"3"}},{params:{id:"4"}}],
//     //     fallback:true,
//     // }
//     return {
//         paths:[
//             {params:{id:`1`}},
//             {params:{id:`2`}},
//             {params:{id:`3`}}
//         ],
//         fallback:false ,
//     }
    
// }


// export const getStaticProps= async (context:any)=>{
//      let response= await fetch(`https://jsonplaceholder.typecode.com/posts/${context.params.id}`)
//     let data= await response.json();
//       return{
//         props:{
//             post:data
//         }
//       }
// }