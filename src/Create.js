import { Link } from "react-router-dom";


const Create = () => {

    
    const handleSubmit = (e) => {"/"}

    return ( 
        <div className="create">
            <h2>GET STARTED</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                type="text"
                required
                />
                <label>Password:</label>
                <input 
                type="text"
                required
                /> 
                <Link to="/" >
                <button onClick={handleSubmit("/")}>START</button>    
                </Link> 

            </form>
        </div>
     );
}
 
export default Create;