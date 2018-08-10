function hideSection(section){
    document.getElementById(section+"Content").style.display="none";
    document.getElementById(section+"Show").style.display="inline"
    document.getElementById(section+"Hide").style.display="none"
    document.getElementById(section+"Show").style.textAlign="center";
}
function showSection(section){
    document.getElementById(section+"Content").style.display="inline";
    document.getElementById(section+"Hide").style.display="inline"
    document.getElementById(section+"Show").style.display="none"
    document.getElementById(section+"Hide").style.textAlign="center";
}