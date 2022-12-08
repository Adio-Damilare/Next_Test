import {NextApiRequest, NextApiResponse} from "next";
let datas=[
    {
        name:"Bag24444444",
        price:400,
        id:"1"
    },
    {
        name:"Shoe",
        price:500,
        id:"2"
    },
    {
        name:"Shirt",
        price:600,
        id:"3"
    },
    {
        name:"Wristwatch",
        price:400,
        id:"4"
    },
    {
        name:"Boxer",
        price:400,
        id:"5"
    }

]

export default function handler(request:NextApiRequest, response:NextApiResponse){
response.send({datas})
}