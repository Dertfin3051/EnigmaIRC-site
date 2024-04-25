const windows = "https://github.com/Dertfin3051/EnigmaIRC/releases/download/v1.x/EnigmaIRC_Windows_v1-0beta.zip";
const linux = "https://github.com/Dertfin3051/EnigmaIRC/releases/download/v1.x/EnigmaIRC_Client_Linux_v1-0beta.tar.gz";
const serverDebian = "https://github.com/Dertfin3051/EnigmaIRC/releases/download/v1.x/EnigmaIRC_server_v1-0beta_Debian.tar.gz";
const serverSource = "https://github.com/Dertfin3051/EnigmaIRC";
const platformNames = [["Win", windows, "Windows 10/11"], ["Linux", linux, "Linux"]];
let auto = ""

function dWindows() {window.open(windows)}
function dLinux() {window.open(linux)}
function dServerDebian() {window.open(serverDebian)}
function dServerSource() {window.open(serverSource)}
function dAuto() {window.open(auto)}

function checkAuto() {
    for (const platform of platformNames) {
        if (navigator.platform.toLowerCase().startsWith(platform[0].toLowerCase())) {
            auto = platform[1]
            document.getElementById("small-btn-text").innerText = platform[2]
        }
    }
}

