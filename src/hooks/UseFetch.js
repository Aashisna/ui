import React,{useState} from "react";
import httpClient from "../Utils/httpClient";

function UseFetch(url){
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");
  const [datas,setDatas]=useState([]);
  function fetchData(){
    httpClient.get(url).then(res=>{
     if(res.status==200){
        setLoading(false);
        setDatas(res.data);
        setError("");
     }
    })
    
    return(
      <>
      <div className="container">
        {
          datas.map((post) =>{const{id,title,body}=post;
          return(
              <>
              <div className="card" key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              </>
          )
      })
        }
      </div>
      </>
  )
 } 

  return {loading,error,datas,fetchData}

  

}

export default UseFetch;