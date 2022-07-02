import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';


function App() {

  const [users, setUsers] = useState([])
  const [password, setPassword] = useState(null)
  const [username, setUsername] = useState(null)
  const [logInEnable, setLogInEnable] = useState(false)
  const [logInError, setLogInError] = useState(false)
  

  useEffect(() => {
    fetch("http://localhost:9292")
    .then(resp => resp.json())
    .then(data => setUsers(data))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    users.forEach((user) => {
      if (user.username === username && user.password === password) {
        setLogInEnable(true)
        setLogInError(false)
        console.log('yes')
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


  return (
    <div>
      {logInEnable ? 
      <Home 
      username = {username} users = {users}/> :
      <div className="App">
        <header className="App-header">
          <form className='card' onSubmit={handleSubmit}>
            <p>Username:</p>
            <input className={logInError ? 'userpass' : null} onChange={handleUsername} type="text"/>
            <p>Password:</p>
            <input className={logInError ? 'userpass' : null} onChange={handlePassword} type="password"/>
            <p>
              <button>Log In</button>
            </p>
          </form>
          {logInError ? <p>User/Password Not Found</p> : null}
        </header>
      </div>
      }
    </div>
  );
}

export default App;
