import Update from "./Update"

function Updates({taskList}) {
    return (
        <div>
            {taskList.map((update) => {
                return <Update update={update} />
            })}
        </div>
    )
}

export default Updates