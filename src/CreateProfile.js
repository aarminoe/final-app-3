import React, {useState} from "react"

function CreateProfile() {

    const [newUser, setNewUser] = useState('')
    const [newPass, setNewPass] = useState('')

    function handleUser(e) {
        setNewUser(e.target.value)
    }

    function handlePassword(e) {
        setNewPass(e.target.value)
    }

    function handleNewUser(e) {
        e.preventDefault()
        console.log(newUser)
        console.log(newPass)
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
            </form>
            
        </div>
    )
}

export default CreateProfile