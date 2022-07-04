import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import {NavLink} from 'react-router-dom'
import { Route, Switch } from "react-router-dom"
import CreateProfile from './CreateProfile';


function App() {

  const [users, setUsers] = useState([])
  const [password, setPassword] = useState(null)
  const [username, setUsername] = useState(null)
  const [logInEnable, setLogInEnable] = useState(false)
  const [logInError, setLogInError] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [addNewProfile, setAddNewProfile] = useState(false)
  const [newProfileIncoming, setNewProfileIncoming] = useState(false)

  

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(resp => resp.json())
    .then(data => setUsers(data))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    users.forEach((user) => {
      if (user.username === username && user.password === password) {
        setLogInEnable(true)
        setLogInError(false)
        setLoggedInUser(user)
        console.log('yes')
        console.log(user)
      }
      else {
        setLogInError(true)
        console.log('no')
      }
    })
  }
  
  function handleUsername(e) {
    setUsername(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleCreateUser(newUser) {
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    console.log(users)
  }

  function handleNewProfileClick() {
    setNewProfileIncoming(true)
  }

  return (
    <div>
      
      {logInEnable ? 
        <Home
        username = {username} users = {users} loggedInUser={loggedInUser}/>  :
      <div className="App">
        <header className="App-header">
          <h1 className='tasker-title'>TASKER</h1>
          <form className='card' onSubmit={handleSubmit}>
            <p>Username:</p>
            <input className={logInError ? 'userpass' : null} onChange={handleUsername} type="text"/>
            <p>Password:</p>
            <input className={logInError ? 'userpass' : null} onChange={handlePassword} type="password"/>
            <p className='under-login'>
              <button>Log In</button>
              <p>or</p>
            </p>
          </form>
              <button className='create-profile-button' onClick={handleNewProfileClick}>Create Profile</button>
              <div className='under-login'>
                  {newProfileIncoming ? <CreateProfile addNewProfile={addNewProfile} onHandleCreateUser={handleCreateUser}/>: null}
              </div>
          {logInError ? <p>User/Password Not Found</p> : null}
        </header>
      </div>
      }
    </div>
  );
}

export default App;
