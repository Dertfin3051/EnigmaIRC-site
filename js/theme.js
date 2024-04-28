let isDark = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function switchTheme() {
    if (isDark) {
        document.getElementById("main_theme").setAttribute("href", "css/style.css");
        isDark = false;
    } else {
        document.getElementById("main_theme").setAttribute("href", "css/dark.css");
        isDark = true;
    }
    await sleep(2000)
}

