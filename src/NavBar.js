import {NavLink, useRouteMatch} from 'react-router-dom'

function NavBar({ username }) {

    return (
        <>
            <NavLink
                exact to='/'>
                    Tasks
            </NavLink>
            <NavLink exact to='/my-profile'>
                {username}
            </NavLink>
        
        </>
    )
}

export default NavBar