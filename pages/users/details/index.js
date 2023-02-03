import React from 'react'
import { useRouter } from "next/router"

function UserbyId({user}) {
    const router = useRouter()
    const userId = router.query.userId;
  return (
    <div>
       <h1>user Details  {user.email}</h1>
      <h2>{userId}</h2>
     
    </div>  
  )
}

export async function getServerSideProps(context){

     const id = context?.query?.id
     console.log(id);
     const response = await fetch(`https://fakestoreapi.com/users/${id}`)
    const data = await response.json()
    console.log(data);
    return {
        props:{
            user:data,
        }
    }

}

export default  UserbyId
