// UserAuthContextProvider.js
import { createContext, useContext} from "react";
import axios from 'axios'

const host=process.env.REACT_APP_HOST;
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {


const AdminSignup=async(name,email,password)=>{
  let userdata={
   name,
    email,
    password,
  }
 
    try {
    let res=  await axios.post(`${host}/api/auth/createuser`, userdata);
    return await res.data;
  
    } catch (err) {
      return (err.response.data);
    }
  
}

const LoginAdmin=async (email,password)=>{
  const userdata={
    email,password
  }
  try {
    let res=  await axios.post(`${host}/api/auth/login`, userdata);
    return await res.data;
    
    } catch (err) {
      return (err.response.data);
    }

}



const AddnewUser=async(userdata)=>{
  try {
    let res=  await axios.post(`${host}/api/alluser/adduser`, userdata);
        return await res.data;
    
    } catch (err) {
      return (err.response.data);
    }
  }
  
const DeleteUser=async(Id)=>{
  try {
    let res=  await axios.delete(`${host}/api/alluser/deleteuser/${Id}`);
        return await res.data;
    
    } catch (err) {
      return (err.response.data);
    }
  }

  const UpdateUser=async(userData,Id)=>{
    try {
      let res=  await axios.put(`${host}/api/alluser/updateuser/${Id}`,userData);
          return await res.data;
      
      } catch (err) {
        return (err.response.data);
      }
    }

  return (
    <userAuthContext.Provider
      value={{
     AdminSignup,
     LoginAdmin,
   AddnewUser,DeleteUser,UpdateUser
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
