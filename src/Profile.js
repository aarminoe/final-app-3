

function Profile({loggedInUser}) {
    console.log(loggedInUser)
    return (
        <div>
           <h1>
                {loggedInUser.username}
           </h1>
           <div>
                bio
           </div>
        </div>
    )
}

export default Profile