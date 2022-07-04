import React, {useState} from "react"
import Updates from "./Updates"

function Task({ task, loggedInUser, onHandleCompleteTask,onHandleTaskDataChange }) {

    console.log(task)

    const [taskEdit, setTaskEdit] = useState(false)
    const [taskNameEdit, setTaskNameEdit] = useState(task.name)
    const [taskCategoryEdit, setTaskCategoryEdit] = useState(task.category)
    const [taskDateEdit, setTaskDateEdit] = useState(task.date)
    const [showUpdates, setShowUpdates] = useState(false)
    const [taskList, setTaskList] = useState([])


    function handleCompleteTaskClick() {
        onHandleCompleteTask(task)
    }

    function handleEditTaskClick(task) {
        setTaskEdit((taskEdit) => !taskEdit)
        console.log('hi')
    }

    function handleTaskChanges(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/tasks/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: taskNameEdit,
                category: taskCategoryEdit,
                date: taskDateEdit
            })
        })
        .then(resp => resp.json())
        .then(data => onHandleTaskDataChange(data))
    }

    function handleEditTaskName(e) {
        setTaskNameEdit(e.target.value)
    }

    function handleEditTaskCategory(e) {
        setTaskCategoryEdit(e.target.value)
    }

    function handleEditTaskDate(e) {
        setTaskDateEdit(e.target.value)
    }

    function handleUpdateClick() {
        setShowUpdates((showUpdates) => !showUpdates)
        fetch("http://localhost:9292/updates")
        .then(resp => resp.json())
        .then((data) => {
            const taskUpdates = data.filter((d) => {
                return d.task_id === task.id
            })
            setTaskList(taskUpdates)
        })
    }

    function addTaskUpdate(newTask) {
        const updatedTaskList = [...taskList, newTask]
        setTaskList(updatedTaskList)
    }

    function handleDeleteUpdate(deletedUpdate) {
        const updatedUpdates = taskList.filter((update) => {
            return update !== deletedUpdate
        })
        setTaskList(updatedUpdates)
        fetch(`http://localhost:9292/tasks/${deletedUpdate.id}`, {
            method: 'DELETE',
        })
        .then(resp => resp.json())
    }


    return (
        <div className="task-card">
            <form onSubmit={handleTaskChanges}>
                <p className="singletasks">Task: {taskEdit ? 
                <div>
                    <input type='text' placeholder={task.name}
                    onChange={handleEditTaskName}
                    value={taskNameEdit}></input> 
                </div>
                : task.name}</p>
                <p>Category: {taskEdit ? 
                <div>
                    <select onChange={handleEditTaskCategory}>
                        <option value='General'>General</option>
                        <option value='Chore'>Chore</option>
                        <option value='Goal'>Goal</option>
                        <option value='Reminder'>Reminder</option>
                    </select> 
                </div>
                : task.category}</p>
                {task.date ? <p>Due by: {taskEdit ? 
                <div>
                    <input type='text' placeholder={task.date}
                    onChange={handleEditTaskDate}
                    value={taskDateEdit}></input> 
                </div>
                : task.date}</p> : null}
                {taskEdit ? <button>Add Change</button> : null}
            </form>
            <button onClick={handleCompleteTaskClick}>✔️</button>
            <button onClick={handleEditTaskClick}>{taskEdit ? 'Done' : 'Edit'}</button>
            {taskEdit ? <p>hi</p>:null}
            <p>
                <button onClick={handleUpdateClick}>Updates</button>
            </p>
            {showUpdates ? 
            <div>
                <Updates taskList={taskList} task={task} onAddTaskUpdate={addTaskUpdate}
                onHandleDeleteUpdate={handleDeleteUpdate}/>
            </div> : null}
            _________________________
        </div>
    )
}

export default Task