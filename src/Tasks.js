import React, { useState } from "react"

function Tasks() {

    const [taskAdded, setTaskAdded] = useState(false)

    function handleNewTask(){
        setTaskAdded(true)
    }

    return (  
        <div>
            
            <div>Current Tasks</div>
            {taskAdded ? 
            <div>
                <form>
                    <p>
                        <input type='text' placeholder="Task Name..."></input>
                    </p>
                    <p>
                        <select>
                            <option value='general'>General</option>
                            <option value='chore'>Chore</option>
                            <option value='goal'>Goal</option>
                            <option value='reminder'>Reminder</option>
                        </select>
                    </p>
                    <p>
                        <input type='date' ></input>

                    </p>
                    <p>
                        <button>Add Task</button>
                    </p>

                </form>
            </div>
                : <button onClick={handleNewTask}>New Task</button>}
            
            <div className="tasklist">

            </div>
        </div>
    )
}

export default Tasks