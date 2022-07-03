import React, { useEffect, useState } from "react"
import App from "./App"
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Tasks from "./Tasks"
import Profile from "./Profile"

function Home({ users, username, loggedInUser }) {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/tasks")
        .then(resp => resp.json())
        .then(data => setTasks(data))
    }, [])

    function handleLogOut() {
    }

    function addTask(task) {
        setTasks([...tasks, task])
    }

    function handleCompleteTask(deletedTask) {
        const updatedTasks = tasks.filter((task) => {
            return task !== deletedTask
        })
        setTasks(updatedTasks)
        fetch(`http://localhost:9292/tasks/${deletedTask.id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
    }

    console.log('tasks', tasks)
    return(
        <div className="home">
            <div className="App">
            
            <Switch>
                <Route exact path='/'>
                    <Tasks tasks={tasks} 
                    onAddTask={addTask}
                    loggedInUser={loggedInUser}
                    onHandleCompleteTask={handleCompleteTask}/>
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