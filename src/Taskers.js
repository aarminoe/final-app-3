import Tasker from "./Tasker"

function Taskers({users}) {

    console.log(users)

    return (
        <div>
            <div className="taskers">
                {users.map((user) => {
                    return <Tasker user={user}/>
                })}
            </div>
        </div>
    )
}

export default Taskers