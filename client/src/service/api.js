import axios from "axios";
const URL = "http://localhost:8000";


// call api for add data in database
export const addUser = async(data) =>{
    try{

       return await axios.post(`${URL}/addUsers`,data)

    }catch(error){

      console.log("Error Occure While Calling API",error);

    }
}

// call api for fetch data from databse
export const getUsers = async() =>{
    try{

      return await axios.get(`${URL}/allUsers`)

    }catch(error){

      console.log("Error while fatching data from database",error);
      
    }
}

// call API for Edit USer
// export const getUser = async(id) =>{
//   id = id || "";
//     try{
//       return await axios.get(`${URL}/${id}`)
//     }catch(error){
//       console.log("Error while calling getUser API",error)
//     }
// }

// call API for Edit USer detail and save in DB
export const editUser = async(user,id) =>{
  try{
    return await axios.put(`${URL}/${id}`,user)
  }catch(error){
    console.log("Error while saving edited details in DB",error)
  }
}

export const deleteUSer = async(id)=>{
   try{
      return await axios.delete(`${URL}/${id}`)
   }catch(error){
    console.log("Error while Deleting data",error)
   }
}