var isDark = false;

function switchTheme(){
    if (isDark){
        document.getElementById("main_theme").setAttribute("href", "css/style.css");
        isDark = false;
    } else{
        document.getElementById("main_theme").setAttribute("href", "css/dark.css");
        isDark = true;
    }
    sleep(2000);
}

