import { useState , useEffect } from 'react';
import {motion} from "framer-motion";
import {editUser, getUsers} from "../service/api";
import {useNavigate , useParams} from "react-router-dom";
// import { Link } from 'react-router-dom';

const defaultValue = {
  name:"",
  email:"",
  username:"",
  phone:""
}

const EditUsers = () => {

  const [user,setUser] = useState(defaultValue)
  const { name, username, email, phone } = user;
  const { id } = useParams();

  // initialsize the useNavugate
  const navigate = useNavigate();

  useEffect(()=>{
    loadUserDetails();
  });


  const loadUserDetails = async() =>{
        const resp =  await getUsers(id);
        setUser(resp.data)
  }

  // input from user handled here
  const onChangeHandler =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    // e.preventDefault()
  }

  // user details submitted here
  const editUserDetails = async(e)=>{
    e.preventDefault();
    // console.log(user)
    const resp = await editUser(id,user);
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
        <h2>Edit Users</h2>
        <input type="text" placeholder='Name' name='name' onChange={onChangeHandler} value={name} />
        <input type="email" placeholder='Email' name='email' onChange={onChangeHandler} value={email}  />
        <input type="text" placeholder='User Name' name='username' onChange={onChangeHandler} value={username}  />
        <input type="number" placeholder='Phone' name='phone' onChange={onChangeHandler} value={phone}  />

        <button type='submit' onClick={editUserDetails}>EditUser</button>

    </motion.form>
</section>
  )
}

export default EditUsers