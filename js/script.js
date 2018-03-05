// JavaScript source code
var currentList = "";
var currentBox = "";

function openEquipmentMenu(list, id) {
    if (currentList != "") {
        document.getElementById(currentList).style.display = "none";
        document.getElementById("itemList").style["overflow-y"] = "hidden";
    }

    if (currentBox != id) {
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
        document.getElementById("loader").innerHTML = '<object type="text/html" data="ash.html" ></object>';
    } else if (id == "fuze") {
        document.getElementById("loader").innerHTML = '<object type="text/html" data="Fuze.html"></object>';
    } else if (id == "rook") {
        document.getElementById("loader").innerHTML = '<object type="text/html" data="Rook.html"></object>';
    } else if (id == "jeger") {
        document.getElementById("loader").innerHTML = '<object type="text/html" data="Jeger.html"></object>';
    }
}

function selectItem(id) {
    if (currentBox == "") {
    }
    else if (id == "acog1") {
        document.getElementById(currentBox).src = "images/Attachments/acog1.png";
    }
    else if (id == "hegrenade") {
        document.getElementById(currentBox).src = "images/Gadgets/hegrenade.png";
    }
    else if (id == "p90") {
        document.getElementById(currentBox).src = "images/Weapons/P90rot.png";
    }
    else if (id == "mp5") {
        document.getElementById(currentBox).src = "images/Weapons/MP5rot.png";
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
