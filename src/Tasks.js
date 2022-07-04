import React, { useState, useEffect } from "react"
import Task from "./Task"

function Tasks({ onAddTask, tasks, loggedInUser, onHandleCompleteTask,onHandleEditTask,onHandleTaskDataChange }) {

    const [taskAdded, setTaskAdded] = useState(false)
    const [newTaskType, setNewTaskType] = useState('General')
    const [newTaskDate, setNewTaskDate] = useState('')
    const [newTaskName, setNewTaskName] = useState('')


 

    function handleNewTask(){
        setTaskAdded(true)
    }

    function handleTaskAddToList(e) {
        e.preventDefault()
        console.log(loggedInUser.id)
        console.log(newTaskDate)
        console.log(newTaskName)
        console.log(newTaskType)
        fetch("http://localhost:9292/tasks", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newTaskName,
                category: newTaskType,
                date: newTaskDate,
                user_id: loggedInUser.id
            }),
        })
        .then(resp => resp.json())
        .then(data => onAddTask(data))
    }

    function handleNewTaskType(e) {
        setNewTaskType(e.target.value)
        console.log(e.target.value)
    }
    console.log(newTaskType)
    function handleNewTaskDate(e) {
        setNewTaskDate(e.target.value)
    }

    function handleNewTaskName(e) {
        setNewTaskName(e.target.value)
    }
    console.log(loggedInUser)

    return (  
        <div>
            
            <div>Current Tasks</div>
            {taskAdded ? 
            <div className="newtask">
                <form onSubmit={handleTaskAddToList}>
                    <p className="task-prompt">
                        <input onChange={handleNewTaskName} type='text' placeholder="Task Name..."></input>
                    </p>
                    <div className="task-prompt">
                        Category:
                        <select onChange={handleNewTaskType}>
                            <option value='General'>General</option>
                            <option value='Chore'>Chore</option>
                            <option value='Goal'>Goal</option>
                            <option value='Reminder'>Reminder</option>
                        </select>
                    </div>
                    <p className="task-prompt">
                        Due By:
                        <input onChange={handleNewTaskDate} type='date' ></input>

                    </p>
                    <p>
                        <button>Add Task</button>
                    </p>

                </form>
            </div>
                : <button onClick={handleNewTask}>New Task</button>}
            
            <div className="tasklist">
                {tasks.map((task) => {
                    return <Task task={task} loggedInUser={loggedInUser}
                    onHandleCompleteTask={onHandleCompleteTask}
                    onHandleTaskDataChange={onHandleTaskDataChange}
                    />
                })}
            </div>
        </div>
    )
}

export default Tasks