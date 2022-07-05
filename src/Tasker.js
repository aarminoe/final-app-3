import React, {useState} from "react"

function Tasker({user}) {

    const [seeBio, setSeeBio] = useState(false)

    function handleSeeBio() {
        setSeeBio((seeBio) => !seeBio)
    }

    return(
        <div onClick={handleSeeBio} className="single-tasker">
            {user.username}
            {seeBio ? 
            <div className="about-me">
                About me
                <p className="user-bio-tasker">{user.bio}</p>
            </div> : null}
        </div>
    )
}

export default Tasker