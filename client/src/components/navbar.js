import {Link} from "react-router-dom";

function header(){
    return(
        <header>
           <div className="container">
              <Link to="/"><h1>workout buddy</h1></Link>
           </div>
        </header>

    )
}

export default header;