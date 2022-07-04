import {NavLink} from 'react-router-dom'

function NavBar({ username }) {

    function handleLogOut() {

    }

    return (
        <>
            <NavLink
                exact to='/'>
                    Tasks
            </NavLink>
            <NavLink exact to='/my-profile'>
                {username}
            </NavLink>
            <NavLink exact to='/Taskers'>
                Taskers
            </NavLink>
            <form>
                <button onClick={handleLogOut}>Log Out</button>
            </form>
        </>
    )
}

export default NavBar