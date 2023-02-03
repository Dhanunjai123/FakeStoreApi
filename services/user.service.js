import { getUsersApi } from "@/api/users.api"

export const getUsers = async() =>{
    try{
      const resp = await getUsersApi()
    //   console.log(resp)
      return resp
    }
    catch(e){
      return {isError:true,message:"error"}
    }
  }