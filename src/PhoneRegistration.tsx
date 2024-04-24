import './App.css';
import { Link } from "react-router-dom";

function PhoneRegistration(){
    return(
        <div className="PhoneRegistration">
            <p>Can we Get your Number</p>
            <form>
            <input type="text" placeholder="Username"/><br/>
            <input type="password" placeholder="Password"/><br/>
         
               
            </form>
            <Link to="./BackgroundMusic">
            <button>Login</button>
            </Link>
        </div>
    )
}
export default PhoneRegistration;