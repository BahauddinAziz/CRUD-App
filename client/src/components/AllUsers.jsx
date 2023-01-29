import React,{  useEffect,useState }  from 'react';
import {getUsers , deleteUSer} from "../service/api";
import{MdEdit,MdDelete} from "react-icons/md";
import { Link } from 'react-router-dom';

const AllUsers = () => {

  const [user , setUser] = useState([])

  useEffect(()=>{
    getAllUSers();
  },[])

  const getAllUSers = async() =>{
    let resp = await getUsers()
    console.log(resp.data)
    setUser(resp.data);
  }

  const deleteUSerDetails = async(id) =>{
      await deleteUSer(id);
      getAllUSers();
  }

  return (
    <table>
      <thead>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>E-mail</th>
        <th>User_Name</th>
        <th>Phone</th>
        <th>Operation</th>
      </tr>
      </thead>
      <tbody>

        {
        user.map((user) =>(
              <tr key={user._id} >
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>
                <Link to ={`/editUsers/:${user._id}`}  >
                  <button className='edit'
                   style={{padding:"0.5rem 1rem",backgroundColor:"green", borderRadius:"0.8rem", margin:"0 0.5rem", fontSize:"1.2rem",cursor:"pointer" }}
                  ><MdEdit/></button>
                </Link>
                <Link to ={`/deleteUsers/:${user._id}`}  >
                  <button className='delete' 
                  style={{padding:"0.5rem 1rem",backgroundColor:"red", borderRadius:"0.8rem", fontSize:"1.2rem",cursor:"pointer" }}
                  onClick={()=>deleteUSerDetails(user._id)} ><MdDelete/></button>
                </Link>
              </td>
          </tr>
      ))
        }

      </tbody>
    </table>
  )
}

export default AllUsers
