

function Task({ task }) {

    console.log(task)

    return (
        <p className="singletasks">{task.name}</p>
    )
}

export default Task