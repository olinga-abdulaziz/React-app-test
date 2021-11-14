import {Link} from 'react-router-dom'
function Navbar() {
    return (
         <>
            <div className="nav bg-success">
                <font> <i class="fa fa-user-secret" aria-hidden="true"></i> INCOGNITO</font>
                <ul>
                    <li>
                        <Link to="/"  className="link">Users</Link>
                    </li>
                    <li>
                        <Link to="/About" className="link">Add User</Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="link">Others</Link>
                    </li>
                </ul>
            </div>
        </> );
}

export default Navbar;