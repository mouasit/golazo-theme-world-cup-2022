export const handleDropdown = (buttonId,setArrow) =>{

    let listDropdown = buttonId.parentElement.querySelector(".list-item");
    let  listButtons = listDropdown.querySelectorAll("button");
    let lock = true;
    let useKey = false;
    let index = 0;
    let currentIndex = 0;

    buttonId.addEventListener("click", ()=>{

        if(listDropdown.style.display === "flex")
        {
            listDropdown.style.display = "none";
            setArrow("close");
            lock = false;
            useKey = false;
        }
        else
        {
            listDropdown.style.display = "flex";
            setArrow("open");
            lock = true;
            useKey = true;
        }
    });
    
    buttonId.addEventListener("blur", ()=>{
        lock = false;
    });

    listDropdown.querySelector(".item").addEventListener("click",()=>{
        lock = true;
    });

    listDropdown.querySelector(".item").addEventListener("mouseout",()=>{
        lock = false;
    });
    
    document.addEventListener("click", ()=>{
        if(!lock)
        {
            listDropdown.style.display = "none";
            setArrow("close");
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
                if (listButtons[listButtons.length - 1] === document.activeElement)
                {
                    listDropdown.style.display = "none";
                    setArrow("close");
                    lock = true;
                    useKey = false;
                    index = 0;
                    currentIndex = 0;
                }
                else
                {
                    index++;
                    currentIndex = index - 1;
                }
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
}