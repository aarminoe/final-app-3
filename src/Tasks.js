import React, { useState } from "react"
import Task from "./Task"

function Tasks({ onAddTask, tasks }) {

    const [taskAdded, setTaskAdded] = useState(false)
    const [newTaskType, setNewTaskType] = useState('General')
    const [newTaskDate, setNewTaskDate] = useState('')
    const [newTaskName, setNewTaskName] = useState('')

    function handleNewTask(){
        setTaskAdded(true)
    }

    function handleTaskAddToList(e) {
        e.preventDefault()
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
                date: newTaskDate,
            }),
        })
        .then(resp => resp.json())
        .then(data => onAddTask(data))
    }

    function handleNewTaskType(e) {
        setNewTaskType(e.target.value)
    }

    function handleNewTaskDate(e) {
        setNewTaskDate(e.target.value)
    }

    function handleNewTaskName(e) {
        setNewTaskName(e.target.value)
    }

    console.log('here to',tasks)

    return (  
        <div>
            
            <div>Current Tasks</div>
            {taskAdded ? 
            <div className="newtask">
                <form onSubmit={handleTaskAddToList}>
                    <p>
                        <input onChange={handleNewTaskName} type='text' placeholder="Task Name..."></input>
                    </p>
                    <p>
                        <select onChange={handleNewTaskType}>
                            <option value='general'>General</option>
                            <option value='chore'>Chore</option>
                            <option value='goal'>Goal</option>
                            <option value='reminder'>Reminder</option>
                        </select>
                    </p>
                    <p>
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
                    return <Task task={task} />
                })}
            </div>
        </div>
    )
}

export default Tasks