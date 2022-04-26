import {Link} from "react-router-dom"
function LightButton (props){
    return (
        <Link to="register">{props.children} </Link>
    )
}

export default LightButton