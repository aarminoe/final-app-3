

function Task({ task, loggedInUser, onHandleCompleteTask }) {

    console.log(task)

    function handleCompleteTaskClick() {
        onHandleCompleteTask(task)
    }

    return (
        <div>
            <p className="singletasks">{task.name}</p>
            <button onClick={handleCompleteTaskClick}>✔️</button>
        </div>
    )
}

export default Task