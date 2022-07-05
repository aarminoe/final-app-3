

function Profile({loggedInUser}) {
    console.log(loggedInUser)
    return (
        <div>
           <h1>
                {loggedInUser.username}
           </h1>
           <div className="user-bio">
                {loggedInUser.bio}
           </div>
        </div>
    )
}

export default Profile