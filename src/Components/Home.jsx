import React from 'react'
import { account } from "../Appwrite/config";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function Home() {
    const navigate = useNavigate()
    const [userDetails, setuserDetails] = useState();
    
    useEffect(() => {
 
        const getData = account.get();
        getData.then(
          function (response) {
            setuserDetails(response);
          },
          function (error) {
            navigate("/");
          }
        );
      }, []);
    
    const handelLogout = async () => {
        try {
          await account.deleteSession("current");
          navigate("/");
        } catch (error) {
          toast.warn("Something Went Wrong Please Try Later.")
        }
      };


  return (


    <div>
         <ToastContainer />
        {
            userDetails ? (
                <div>
                    <center>Welcome,</center>
                    <button className='className="w-full flex justify-right py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"' onClick={handelLogout} >Logout</button>
                </div>
            ) : (
                navigate("/")
            )
        }
        
    
    </div>
  )
}

export default Home