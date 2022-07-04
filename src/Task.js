import React, {useState} from "react"

function Task({ task, loggedInUser, onHandleCompleteTask }) {

    console.log(task)

    const [taskEdit, setTaskEdit] = useState(false)

    function handleCompleteTaskClick() {
        onHandleCompleteTask(task)
    }

    function handleEditTaskClick(task) {
        setTaskEdit((taskEdit) => !taskEdit)
        console.log('hi')
    }

    
    // function handleEditTask(editTask) {
    //     fetch(`http://localhost:9292/tasks/${editTask.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name:
    //         })
    //     })
    // }

    return (
        <div className="task-card">
            <p className="singletasks">Task: {task.name}</p>
            <p>Category: {taskEdit ? 
            <form>
                <input type='text' placeholder={task.category}></input> 
                <button>Add Change</button>
            </form>
            : task.category}</p>
            {task.date ? <p>Due by: {task.date}</p> : null}
            <button onClick={handleCompleteTaskClick}>✔️</button>
            <button onClick={handleEditTaskClick}>Edit</button>
            {taskEdit ? <p>hi</p>:null}
            _________________________
        </div>
    )
}

export default Task