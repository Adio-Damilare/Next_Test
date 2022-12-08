import mongoose from "mongoose";
let URL:any=process.env.MONGO_URL
const HandleConnection=async()=>{
   await mongoose.connect(URL).then((res:any)=>{
        console.log("mongoose connected successfuly")
    }).catch((error:any)=>{
        console.log("error connecting")
    })
}

export default HandleConnection