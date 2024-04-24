import { Link } from "react-router-dom";

function Welcome() {
    return(
        <>
        <div className="main-content">
          {/* Your main app content goes here */}
          <h1>Welcome to MeloMingle</h1>
        </div>
        <div>
        <Link to="./PhoneRegistration">
        <button >Get registered</button>
        </Link>
        </div>
        </>
    )
}
export default Welcome;