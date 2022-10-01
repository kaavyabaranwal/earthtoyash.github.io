//Buttons
const lightModeButton = document.getElementById("light-mode-button");
const darkModeButton = document.getElementById("dark-mode-button");

//Additional params
lightModeButton.theme = 'light'
darkModeButton.theme = 'dark'

hideButton(darkModeButton)

const setMode = (event) => {
    var element = document.body;
    const theme = event.currentTarget.theme

    if (theme === 'dark') {
        var content = document.getElementById("DarkModetext");
        element.className = "dark-mode";
        content.innerText = "Dark Mode is ON";
        hideButton(darkModeButton)
        showButton(lightModeButton)
    } else {
        var content = document.getElementById("DarkModetext");
        element.className = "light-mode";
        content.innerText = "Dark Mode is OFF";
        showButton(darkModeButton)
        hideButton(lightModeButton)
    }
}

//Event listener
lightModeButton.addEventListener("click", setMode);
darkModeButton.addEventListener("click", setMode);




function hideButton(button) {
    button.style.display = "none";
}


function showButton(button) {
    button.style.display = "block";
}