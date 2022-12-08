import React from 'react';
import swr from 'swr';


const fetcher=async()=>{
    let response=await fetch("http://localhost:8000/1");
    let data:any=await response.json();
    return data.data
}
const ClientFetch = () => {

    const {data,error}=swr<any>("client",fetcher);
    // const [data,setData]=useState<any>([]);
    // const [Isloading,setIsloading]=useState<any>(true);
    // useEffect(  () => {
    //   return () => {
    //     GetApi()
    //   }
    // }, [])
    

    // const GetApi=async()=>{
    //     let response=await fetch("http://localhost:8000/");
    //     let data:any=await response.json()
    //     setData(data.datas)
    //     setIsloading(false)
    // }


    if(error) return <div>Faile to load</div>;
    if(!data)return <div>Loading...</div>
  return (
    <div>{ data.name}</div>
  )
}

export default ClientFetch
