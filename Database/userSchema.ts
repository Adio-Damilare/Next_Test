import mongoose,{Schema,Model} from "mongoose";

const UserSchema :any= new Schema({
    lastname:String,
    firstname:String,
    email:String,
    password:String,
},{
    timestamps:true
})

export default mongoose.models.Users_tb|| mongoose.model<any>("Users_tb",UserSchema)