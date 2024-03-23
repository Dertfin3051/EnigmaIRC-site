const auto_download_btn_os = document.getElementById("small-btn-text");

let OS = navigator.userAgentData.platform;
alert(OS);
if (OS == "Windows") {
    auto_download_btn_os.textContent = "Windows 10";
    alert();
} else if (UAgent.includes("Linux")) {
    auto_download_btn_os.innerHTML = "Linux (Source code)";
}