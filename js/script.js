// JavaScript source code
var currentBoi = "";

function openEquipmentMenu(id) {
    if (currentBoi != "") {
        document.getElementById(currentBoi).style.display = "none";
        document.getElementById("itemList").style["overflow-y"] = "hidden";
    }

    if (currentBoi != id) {
        document.getElementById(id).style.display = "block";
        document.getElementById("itemList").style["overflow-y"] = "scroll";
        currentBoi = id;
    }
    else {
        currentBoi = "";
    }
}
function clearEquipmentMenu() {
    if (currentBoi != "") {
        document.getElementById(currentBoi).style.display = "none";
    }
    document.getElementById("itemList").style["overflow-y"] = "hidden";
    currentBoi = "";
}

function loadCharacter() {
    document.getElementById("loade").innerHTML = '<object type="text/html" data="ash.html" ></object>';
}