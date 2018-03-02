// JavaScript source code
var currentBoi = "";

function openEquipmentMenu(id) {
    if (currentBoi != "") {
        document.getElementById(currentBoi).style.display = "none";
        document.getElementById("itemList").style["overflow-y"] = "hidden";
    }

    if (currentBoi != id) {
        document.getElementById(id).style.display = "block";
        document.getElementById("itemList").style["overflow-y"] = "auto";
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

function loadCharacter(id) {
    if (id == "ash") {
        document.getElementById("loade").innerHTML = '<object type="text/html" data="ash.html" ></object>';
    } else if (id == "fuze") {
        document.getElementById("loade").innerHTML = '<object type="text/html" data="Fuze.html" ></object>';
    } else if (id == "rook") {
        document.getElementById("loade").innerHTML = '<object type="text/html" data="Rook.html" ></object>';
    } else if (id == "jeger") {
        document.getElementById("loade").innerHTML = '<object type="text/html" data="Jeger.html" ></object>';
    }
}