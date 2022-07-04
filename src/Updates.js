import Update from "./Update"
import React, {useState} from "react"

function Updates({taskList, task, onAddTaskUpdate, onHandleDeleteUpdate}) {

    const [comment, setComment] = useState('')

    function handleAddUpdate(e) {
        e.preventDefault()
        fetch("http://localhost:9292/updates", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: comment,
                task_id: task.id,
                user_id: task.user_id
            })
        })
        .then(resp =>resp.json())
        .then(data => onAddTaskUpdate(data))
    }

    function handleComment(e) {
        setComment(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleAddUpdate}>
                <input type='text' onChange={handleComment}></input>
                <button>Add Update</button>
            </form>
            <p></p>
            <div>
                {taskList.map((update) => {
                    return <Update update={update} onHandleDeleteUpdate={onHandleDeleteUpdate}/>
                })}

            </div>
        </div>
    )
}

export default Updates