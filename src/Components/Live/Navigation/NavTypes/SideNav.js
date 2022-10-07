
import logo from "../../../../assets/logo.svg";
import Background from "../../Items/Background";
import Button from "../../Items/Button";
import englishFlag from "../../../../assets/flags/languages/english.svg";
import frenshFlag from "../../../../assets/flags/languages/frensh.svg";
import arabicFlag from "../../../../assets/flags/languages/arabic.svg";
import { BiChevronRight } from "react-icons/bi";
import { useEffect} from "react";

const SideNav = () => {
    useEffect(()=>{
        let btn = document.querySelector(".dropdown");
        let listDropdown = btn.parentElement.querySelector(".list-item");
        let  listButtons = listDropdown.querySelectorAll("button");
        let lock = true;
        let useKey = false;
        let index = 0;
        let currentIndex = 0;

        btn.addEventListener("click", ()=>{

            if(listDropdown.style.display === "flex")
                listDropdown.style.display = "none";
            else
                listDropdown.style.display = "flex";
            useKey = true;
        });
        
        btn.addEventListener("blur", ()=>{
            lock = false;
        });

        btn.addEventListener("mousemove",()=>{
            lock = true;
        })
        
        document.addEventListener("click", ()=>{
           // console.log("lock: ",lock);
            if(!lock)
            {
                listDropdown.style.display = "none";
                lock = true;
                useKey = false;
            }
        });

        document.addEventListener("keydown",(e)=>{
            if(useKey && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Tab"))
            {
                let items = listDropdown.querySelector(".item").querySelectorAll("button");

                if (e.key === "Tab")
                {
                    index++;
                    currentIndex = index - 1;
                }

                if (e.key === "ArrowDown")
                {
                    if(index > items.length - 1)
                        index = 0;
                    items[index++].focus();
                    currentIndex = index - 1;
                }
                
                if (e.key === "ArrowUp")
                {
                    if(currentIndex === 0)
                    currentIndex = items.length;
                    items[--currentIndex].focus();
                    index = currentIndex + 1;
                }
            }
        });

    },[])
    return (
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
            <div className="layout-dropdown">
                <button className="dropdown">
                    <Button />
                    <span className="name-flag">
                        <img src={englishFlag} alt="" />
                        <span>English</span>
                    </span>
                    <span className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.293" height="24.286" viewBox="0 0 21.293 24.286">
                            <path id="Path_1738" data-name="Path 1738" d="M793.082,1047.652,782.435,1059.8l10.647,12.143,10.646-12.143Z" transform="translate(-782.435 -1047.652)" fill="#47b7ab"/>
                        </svg>
                        <BiChevronRight />
                    </span>
                </button>
                <div className="list-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="149.127" viewBox="0 0 216.347 149.127">
                        <path id="Path_7097" data-name="Path 7097" d="M476.471,776.232A947.7,947.7,0,0,1,378.5,771.12l-2.345-.247-.524-2.3a309.161,309.161,0,0,1,0-133.809l.524-2.3,2.345-.247a941.443,941.443,0,0,1,195.956,0l2.345.247.524,2.3a309.131,309.131,0,0,1,0,133.809l-.524,2.3-2.345.247a947.7,947.7,0,0,1-97.973,5.112Z" transform="translate(-368.305 -627.105)" fill="#eeeee4"/>
                    </svg>
                    <div className="item">
                        <button>
                            <img src={frenshFlag} alt="" />
                            <span>Frensh</span>
                        </button>
                        <button>
                            <img src={arabicFlag} alt="" />
                            <span>Arabic</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideNav;