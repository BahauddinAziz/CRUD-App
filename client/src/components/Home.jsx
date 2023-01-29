import React from 'react';
import {FaLongArrowAltRight} from "react-icons/fa";
import {motion} from "framer-motion"

const Home = () => {
  return (
    <section>
      <div>
        <h1>Hii, This is Sandeep Khariwal</h1>
      </div>

      <motion.div className='welcome' initial={{x:"+100%" ,opacity:0 }} whileInView={{x:"0%" , opacity:1 }} transition={{delay:0.5}}   >
        <h2><b>Welcome To My CRUD-Operation Project,<br/><br/> Using MERN Stack</b></h2>
      </motion.div>

      <motion.div className='crud' initial={{y:"-100%"}} whileInView={{y:"0%"}} transition={{duration: 1, times: [1] }}  >
        <h3>
            C <span><FaLongArrowAltRight/></span> Create , R <span><FaLongArrowAltRight/></span> Read   <br/><br/>
            {/* R = Read   <br/><br/> */}
            U <span><FaLongArrowAltRight/></span> Update , D <span><FaLongArrowAltRight/></span> Delete 
            {/* D = Delete  */}
        </h3>
      </motion.div>

    </section>
  )
}

export default Home
