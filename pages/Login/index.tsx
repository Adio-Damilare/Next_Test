import React,{useState,useEffect} from "react";
import Style  from "../../styles/Login.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Login = () => {
    const [email,setEmail]=useState<any>("");
    const [password,setPassword]=useState<any>("");
    const [firstname,setFirstname]=useState<any>("");
    const [lastname,setLastname]=useState<any>("");

    const Submit=async(e:any)=>{
      e.preventDefault()
      let response=await axios.post("/api/register/signup",{email,password,firstname,lastname});
      console.log(response)
    }

  return (
    <div className="container"  id={Style.container}>
      <div className="row" id={Style.row}>
        <div className="col-md-8 col-lg-5 col-sm-12 mx-auto shadow-sm py-3">
          <form>
            <article className="text-center d-block py-2">Login</article>
            <div className="form-floating">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                onInput={(e:any)=>setFirstname(e.target.value)}
              />
              <label htmlFor="email">Firstname</label>
            </div>
            <div className="form-floating mt-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                onInput={(e:any)=>setLastname(e.target.value)}
              />
              <label htmlFor="email">Lastname</label>
            </div>
            
            <div className="form-floating mt-3">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                onInput={(e:any)=>setEmail(e.target.value)}
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mt-2">
              <input
                type="password"
                id="emai"
                className="form-control"
                placeholder="Password"
                onInput={(e:any)=>setPassword(e.target.value)}
              />
              <label htmlFor="email">Password</label>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-md btn-success w-50" onClick={Submit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
