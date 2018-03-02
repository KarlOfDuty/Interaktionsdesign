// JavaScript source code
var currentList = "";
var currentBox = "";

function openEquipmentMenu(list, id) {
    if (currentList != "") {
        document.getElementById(currentList).style.display = "none";
        document.getElementById("itemList").style["overflow-y"] = "hidden";
    }

    if (currentList != list) {
        document.getElementById(list).style.display = "block";
        document.getElementById("itemList").style["overflow-y"] = "auto";
        currentList = list;
        currentBox = id;
    }
    else {
        currentList = "";
        currentBox = "";
    }
}
function clearEquipmentMenu() {
    if (currentList != "") {
        document.getElementById(currentList).style.display = "none";
    }
    document.getElementById("itemList").style["overflow-y"] = "hidden";
    currentList = "";
}

function loadCharacter(id) {
    if (id == "ash") {
        document.getElementById("loade").innerHTML = '<object type="text/html" data="ash.html" ></object>';
    } else if (id == "fuze") {
        document.getElementById("loade").innerHTML = '<object type="text/html" data="Fuze.html"></object>';
    } else if (id == "rook") {
        document.getElementById("loade").innerHTML = '<object type="text/html" data="Rook.html"></object>';
    } else if (id == "jeger") {
        document.getElementById("loade").innerHTML = '<object type="text/html" data="Jeger.html"></object>';
    }
}

function selectItem(id) {
    if (currentBox == "") {
    }
    else if (id == "m4") {
        document.getElementById(currentBox).src = "images/weapon1.png";
    }
    else if (id == "ak") {
        document.getElementById(currentBox).src = "images/ak.png";
    }
    clearEquipmentMenu();
    return;
}