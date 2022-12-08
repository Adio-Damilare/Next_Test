import { NextRouter, useRouter } from "next/router";
import React from "react";

const SingleGood = (props: any) => {
  let Router:NextRouter=useRouter()
  let { data } = props;
  if(Router.isFallback){
    return(
      <div>Loading....</div>
    )
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 shadow-lg py-5 rounded m-3 text-decoration-none text-dark ">
          <h5 className="text-center">{data.data.name}</h5>
          <article>{data.data.price}</article>
        </div>
      </div>
    </div>
  );
};

export default SingleGood;

export const getStaticProps = async (context: any) => {
  let res = await fetch(`http://localhost:8000/${context.params.GoodId}`);
  let data = await res.json();
  return {
    props: {
      data,
      validate: "20",
    },
  };
};
export const getStaticPaths = async () => {
  let res = await fetch(`http://localhost:8000/`);
  let { datas } = await res.json();
  let paths = datas.map((data: any) => {
    return {
      params: { GoodId: `${data.id}` },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
