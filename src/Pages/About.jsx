import {Link} from 'react-router-dom'
function About() {
    return ( <div>
        <div className="container">
            <h3>Add User</h3>
            <div className="form-group">
                <form action="">
                    <div>
                        <label htmlFor="user">User</label> <br />
                        <input type="text" id="user" className="form-control" placeholder="Add user" />
                         <br />
                        <button type="submit" className="btn btn-success">Submit</button>
                        <Link to="/"><button className="btn btn-danger ml-2">Cancel</button></Link>
                    </div>
                </form>
            </div>
        </div>
        
    </div> );
}

export default About;