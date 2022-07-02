import React, { useState } from "react"
import App from "./App"
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Tasks from "./Tasks"
import Profile from "./Profile"

function Home({ users, username }) {


    function handleLogOut() {
    }

    return(
        <div className="home">
            <p className="logout">
                <form>
                    <button  onClick={handleLogOut}>Log out</button>
                </form>
            </p>
            <div className="App">
            
            <Switch>
                <Route exact path='/'>
                    <Tasks />
                </Route>
                <Route path='/my-profile'>
                    <Profile />
                </Route>
                
             </Switch>
            <div className="sidebar">
                <NavBar username={username}/>
            </div>
        </div>
            
        </div>
    )
}

export default Home