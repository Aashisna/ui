import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from "i18next";
import useFetch from './hooks/UseFetch';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
export default function Register(){
        const { t, i18n } = useTranslation();
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
            localStorage.setItem('lng', JSON.stringify(lng));
          }
        const roles=[
        {
            value:"Admin",
            name:"Admin"
        },
        // {
        //     value:"User",
        //     name:"User"
        // }
        
    ]
    const {loading,error,datas,fetchData}=useFetch("todos");
    const {loading:postsLoading,error:postError,datas:postDatas,fetchData:postFetchData}=useFetch("posts");
    useEffect(()=>{
        fetchData();
        postFetchData();
    },[]);

    console.log(loading,error,datas,"todos");
    console.log(postsLoading,postError,postDatas,"posts");
   

    return(<>
<section>
   <div className=' d-flex justify-content-around'>
    <div className="container">
      <div className='contactForm mt-5'>
      <form >
      <div className='text-center'>
        <h4 className=''>Registration Page</h4>
        <p>Register your account</p>
        <label for="fullName" className='pe-5'>{t("Full Name")}</label>
        <input type="text" placeholder="Name......" required className='py-2 pe-5 me-4 my-3 ps-2'/><br/>
        <label for="email" className='pe-4'>{t("Email Address")}</label>
        <input type="email" placeholder="Email......" required className='py-2 pe-5 me-4 my-3 ps-2'/><br/>
        <label for="email" className='pe-5'>{t("Password")}</label>
        <input type="password" placeholder="Password......" required className='py-2 pe-5 me-4 my-3 ps-2'/><br/>
        <label for="email" className='pe-5'>{t("Address")}</label>
        <input type="address" placeholder="Address......" required className='py-2 pe-5 me-4 my-3 ps-2'/><br/>
        <label for="myfile" className='pe-5'>{t("Upload Photo")}</label>
        <input type="file" id="myfile" name="myfile" multiple/><br></br>
        <label for="roles" className='pe-5'>{t("Roles")}</label>
        <select name="roles" id="roles" className='py-2 pe-5 me-4 my-3 ps-5'>
         {
            roles.map(val=>{
                
                return(
                    <>
                    <option>Java Developer</option>
                    <option>Python Developer</option>
                    <option>Mern Stack Developer</option>
                    </>
                )
            })
         }
      </select><br></br>
      <input type="submit" value="submit" className="bg-primary px-5 py-2"></input>
     </div>
     <div className='d-flex justify-content-around pt-3'>
    <div><p><a>Already have an account? </a></p></div>
   <div><NavLink className ="" to="/login">Return to Sign In</NavLink>
  </div>
    </div>
    <div className='pt-1 d-flex justify-content-center'>
        <button onClick={() => changeLanguage('en')} className="me-1 px-3 py-1">English</button>
      <button onClick={() => changeLanguage('np')} className=" px-3 py-1">Nepali</button>
    </div>
      </form>
      </div>
    </div>
    </div>

    const arr =[1,2,5,7,3,7]
    console.log(...set(arr));
</section>
    </>)

}
