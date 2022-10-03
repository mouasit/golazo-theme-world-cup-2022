import logo from "../assets/logo.svg"
const Nav = () =>(
    <nav className="side-nav">
        <a href="/" aria-label="Golazo">
            <img className="logo" src={logo} alt=""/>
        </a>
        <ul>
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
</nav>
)

export default Nav;