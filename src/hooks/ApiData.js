import react from "react";
import  ReactDOM from "react-dom/client";
import UseFetch from "./UseFetch";
import React,{useEffect} from "react";

export default function ApiData(){

const {loading,error,datas,fetchData}=UseFetch("todos");
const {loading:postsLoading,error:postError,datas:postDatas,fetchData:postFetchData}=UseFetch("posts");
useEffect(()=>{
    fetchData();
    postFetchData();
},[]);

return(
    <>
    <div className="container my-5 text-center py-3">
{datas.map((post) =>{const {id,title,body} =post;
return(
    <div className="card" key={id}>
       <h2>{title}</h2>
       <p>{body}</p>
    </div>
)

})}
</div>
    </>
)

}