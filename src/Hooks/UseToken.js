import { useEffect, useState } from "react"

const UseToken=user=>{
   const [token,settoken]=useState('')
   useEffect(()=>{
      const email=user?.user?.email;
      const currentUser={email:email};
      if(email){
         fetch(`http://localhost:5000/user/${email}`,{
            method:'PUT',
            headers:{
               'content-type':'application/json'
            },
            body:JSON.stringify(currentUser)
         })
         .then(res=>res.json())
         .then(data=>{
            const accessToken=data.token;
            localStorage.setItem('accessToken',accessToken)
            console.log(data)
            settoken(accessToken)
         }   
         )
      }
   },[user])
   return [token]
}
export default UseToken;