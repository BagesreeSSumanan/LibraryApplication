import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './Layout.jsx'
import Login from './Login.jsx'
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup.jsx'
import AdminDashboard  from './adminDashboard.jsx'
import UserDashboard from './UserDashboard.jsx'
import IssueBooks from './IssueBooks.jsx'
import BookStatus from './BookStatus.jsx'


function App() {
   const [users, setUsers] = useState([
        {
            username:'admin',
            password:'12345',
            role:'admin'
        },
        {
            username:'member1',
            password:'12345',
            role:'member'
        }

    ]);
    const [loggedInUser, setLoggedInUser] = useState(null); 
    const handleLogin = (username, password) => {
      const found = users.find(
        (u) => u.username === username && u.password === password
        );
        if (found) {
          setLoggedInUser(found); // Save the user in state
          return true;
        } else {
          return false;
      }
    };
    const handleSignup = (username, password, role) => {
      const newUser = {
        username: username,
        password: password,
        role: role
      };

      setUsers((prevUsers) => [...prevUsers, newUser]);
       return true;
    };

  // return (
  //   <>
  //   <Login>
  //   </Login>
  //   </>
  // )
  return (
    <>
    <div className="App">
       <Routes>
         <Route path='/' element={<Login onLogin={handleLogin}/>} />
         <Route path='/signup' element={<Signup onSignup={handleSignup}/>} />
          <Route element={<Layout />}>
             <Route path="/admindashboard" element={<AdminDashboard  />} />
             <Route path="/userDashboard" element={<UserDashboard  />} />\
             <Route path="/issueBooks" element={<IssueBooks/>} />
             <Route path="/bookStatus" element={<BookStatus/>} />
          </Route>
       </Routes>
     </div>
    </>
  )
}

export default App
