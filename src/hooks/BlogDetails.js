import React from "react";
import  ReactDOM from "react-dom/client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function BlogDetails(){
   const[myData, setMyData] = useState([]);
   const[error,setIsError] = useState([]);

    const getApiData =async () => {
        try{
        const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(setMyData);
        setMyData(res.data);
    }catch(error){
        setIsError(error.message);
    }

    };
    useEffect(() => {
       getApiData();
    });

    /* Using Promises */

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts");
    //     .then((res) =>);
    // });
    return(
        <>
        <div className="container">
    {myData.map((post) =>{const {id,title,body} =post;
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
    