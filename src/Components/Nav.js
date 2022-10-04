import logo from "../assets/logo.svg"
const Nav = () =>{
    return(
        <nav className="side-nav">
        <a href="/" aria-label="Golazo">
            <img className="logo" src={logo} alt=""/>
        </a>
        <ul>
            <li>
                <a href="/">
                    Live
                </a>
            </li>
            <li>
                <a href="/">
                    Ranking
                </a>
            </li>
            <li>
                <a href="/">
                    Matches
                </a>
        </li>
        <li>
            <a href="/">
                Stadiums
                </a>
            </li>
        </ul>
        <button>Language</button>
    </nav>
    )
}

export default Nav;