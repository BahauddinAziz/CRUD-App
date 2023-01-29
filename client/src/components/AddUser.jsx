import React, { useState } from 'react';
import {motion} from "framer-motion";
import {addUser} from "../service/api";
import {useNavigate} from "react-router-dom"

const defaultValue = {
  name:"",
  email:"",
  username:"",
  phone:""
}

const AddUser = () => {

  const [user,setUser] = useState(defaultValue)
  const { name, username, email, phone } = user;

  // initialsize the useNavugate
  let navigate = useNavigate();

  // input from user handled here
  const onChangeHandler =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    e.preventDefault()
  }

  // user details submitted here
  const addUserDetails = async(e)=>{
    e.preventDefault();
    // console.log(user)
    await addUser(user);
    // change the component from addUser to allUSer after submit details
    navigate("/allUsers");
  }

  return (
    <section className='contact'>

    <motion.form
    initial={{x:"-100vw" , opacity:0}}
    animate={{x:0 , opacity:1}}
    transition={{delay:0.3}}
    >
        <h2>Add Users</h2>
        <input type="text" placeholder='Name' name='name' onChange={onChangeHandler} value={name}/>
        <input type="email" placeholder='Email' name='email' onChange={onChangeHandler} value={email} />
        <input type="text" placeholder='User Name' name='username' onChange={onChangeHandler} value={username} />
        <input type="number" placeholder='Phone' name='phone' onChange={onChangeHandler} value={phone} />

        <button type='submit' onClick={addUserDetails} >Add User</button>

    </motion.form>
</section>
  )
}

export default AddUser
