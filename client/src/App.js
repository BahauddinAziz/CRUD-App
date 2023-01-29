import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUsers from './components/EditUsers';

import "./styling/navbar.scss"
import "./styling/home.scss"
import "./styling/allusers.scss"
import "./styling/addusers.scss"
import "./styling/editUsers.scss"


function App() {
  return (
    <Router>
    <NavBar/>
     < Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/allUsers' element={<AllUsers/>} />
        <Route exact path='/addUsers' element={<AddUser/>} />
        <Route exact path='/editUsers/:id' element={<EditUsers/> } />
        {/* <Route exact path='/deleteUsers/:id' element={<deleteU } /> */}
     </Routes>
    </Router>
  );
}

export default App;
