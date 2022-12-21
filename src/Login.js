import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
export default function Login(){
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
   

    return(<>
<section>
   <div className=' d-flex justify-content-around'>
    <div className="container">
      <div className='contactForm mt-5'>
      <form >
         <a href="/apiDataDisplay">getApiList</a><br></br>
         <a href="/apiData">getApiData</a>
      <div className='text-center'>
        <h4 className=''>Login Page</h4>
        <p>Login Here</p>

        <label for="email" className='pe-4'>{t("Email Address")}</label>
        <input type="email" placeholder="Email......" required className='py-2 pe-5 me-4 my-3 ps-2'/><br/>

        <label for="password" className='pe-5'>{t("Password")}</label>
        <input type="password" placeholder="Password......" required className='py-2 pe-5 me-4 my-3 ps-2'/><br/>

        <label for="re-password" className='pe-5'>{t("Password")}</label>
        <input type="password" placeholder="Re-password......" required className='py-2 pe-5 me-4 my-3 ps-2'/><br/>


      <input type="submit" value="Login" className="bg-primary px-5 py-2"></input>
     </div>
     <div className='d-flex justify-content-around pt-3'>
    <div><p><a>Not Registered? </a></p></div>
   <div><NavLink className ="" to="/register">Register Here</NavLink>
  </div>
    </div>
      </form>
      </div>
    </div>
  
    </div>

    <div className='pt-1 d-flex justify-content-center'>
        <button onClick={() => changeLanguage('en')} className="me-1 px-3 py-1">English</button>
      <button onClick={() => changeLanguage('np')} className=" px-3 py-1">Nepali</button>
    </div>

</section>
    </>)

}
