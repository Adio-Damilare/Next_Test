import type { NextApiRequest, NextApiResponse } from 'next'
import HandleConnection from '../../../Database/connection';
import userSchema from '../../../Database/userSchema';
 HandleConnection()
export default async function handler(request: NextApiRequest, response: NextApiResponse){
    if(request.method=='GET'){
        response.send("hello world!");
    }
    if(request.method=='POST'){
        // userSchema.create(request.body).then((res:any)=>{
        //     console.log(res)
        //     response.send({message:"successfuly, signup",status:true,data:res})
        // }).catch((err:any)=>{
        //     response.send({message:"failed to create user",status:false});
        // })
        let form =new userSchema(request.body)
        form.save((err:any)=>{
            if(err){
                console.log(err.message)
                response.send({message:"failed to create user",status:false});
            }else{
                response.send({message:"successfuly, signup",status:true})
            }
        })
    }

}