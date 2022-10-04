import logo from "../assets/logo.svg"
import Background from "./Background"
const Nav = () =>{
    return(
        <nav className="side-nav">
        <a href="/" aria-label="Golazo">
            <img className="logo" src={logo} alt=""/>
        </a>
        <ul>
            <li>
                <a href="/" className="active">
                    <Background />
                   <span>Live</span>
                </a>
            </li>
            <li>
                <a href="/">
                    <Background />
                    <span>Ranking</span>
                </a>
            </li>
            <li>
                <a href="/">
                    <Background />
                    <span>Matches</span>
                </a>
        </li>
        <li>
            <a href="/">
                <Background />
                <span>Stadiums</span>
                </a>
            </li>
        </ul>
        <button>Language</button>
    </nav>
    )
}

export default Nav;