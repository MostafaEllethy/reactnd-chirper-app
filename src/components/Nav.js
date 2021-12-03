import { NavLink } from 'react-router-dom'

export default () => {
    return <nav className='nav'>
        <ul>
            <li>
                <NavLink exact='true' to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink exact='true' to='/new'>New Tweet</NavLink>
            </li>
        </ul>
    </nav>
}