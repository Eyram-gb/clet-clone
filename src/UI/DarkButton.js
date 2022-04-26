import {Link} from "react-router-dom"
function DarkButton (props){
    return (
        <Link to="register">{props.children} </Link>
    )
}

export default DarkButton