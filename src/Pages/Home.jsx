import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom' 
import Users from '../Components/Users';
import AddUser from '../Components/AddUser';
import UserList from '../Components/UseerList';
import EditUser from '../Components/Edituser';
function Home() {
    return ( <div>
        <div className="container">
            <h1>Home</h1>
            <UserList />

        </div>
    </div> );
}

export default Home;