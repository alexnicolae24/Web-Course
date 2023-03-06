const iconMoon = document.querySelector('.night');
const iconSun = document.querySelector('.day');

const body = document.body;

/**
 * Initial states of the icons
 */
iconMoon.style.display = 'block';
iconSun.style.display = 'none';

const btnMode = document.querySelector('.btn');
btnMode.addEventListener('click', () => {
    /**
     * TODO - Add/Remove the 'active' class depending on
     *        the Day/Night Mode
     * 
     *   -> the 'active' class is used to change the background
     *      when switching to Day Mode (see body.active in .css)
     * 
     * ++ - try using only one command
     */
    body.classList.toggle('active');
    
    /**
     * TODO - Create a function to change the text
     *        and call it (e.g. from 'Night Mode' to 'Day Mode')
     * 
     *   - you can pass any parameters to the function
     */
    
    myFunctionText();

    /**
     * TODO - Create a function to switch the icon
     * 
     * > Hint - which attribute can you change?
     */
    myFunctionIcon();

});

const el = document.getElementsByClassName("text-mode")[0];
function myFunctionText() {
    if (el.innerHTML === "Night Mode") {
        el.innerHTML = "Day Mode";
        el.style.color =  "#ffbf00";
        
     } 
     else {
       el.innerHTML = "Night Mode";
       el.style.color =  "white";
     }
}

function myFunctionIcon() {
    if (el.innerHTML === "Night Mode") {  
        iconMoon.style.display = 'block';
        iconSun.style.display = 'none';
        
    } 
    else {
        iconMoon.style.display = 'none';
        iconSun.style.display = 'block';
    }
}


