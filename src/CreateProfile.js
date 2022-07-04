import React, {useState} from "react"

function CreateProfile({ onHandleCreateUser }) {

    const [newUser, setNewUser] = useState('')
    const [newPass, setNewPass] = useState('')
    const [profileCreated, setProfileCreated] = useState(false)

    function handleUser(e) {
        setNewUser(e.target.value)
        console.log(e.target.value)
    }

    function handlePassword(e) {
        setNewPass(e.target.value)
        console.log(e.target.value)
    }

    function handleNewUser(e) {
        e.preventDefault()
        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: newUser,
                password: newPass
            })
        })
        .then(resp => resp.json())
        .then(data => onHandleCreateUser(data))
        setProfileCreated(true)
    }

    return (
        <div className="create-profile-card">
           <form onSubmit={handleNewUser}>
                <p className="profile-tag">Username:</p>
                <input onChange={handleUser} type='text' className="profile-tag-input"></input>
                <p className="profile-tag">Password</p>
                <input onChange={handlePassword} type='password' className="profile-tag-input"></input>
                <p className="profile-tag">
                    <button>Create Profile!</button>
                </p>
                {profileCreated ? <p>Profile Created! Please Log In!</p>:null}
            </form>
            
        </div>
    )
}

export default CreateProfile