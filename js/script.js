// JavaScript source code
var currentBoi = "";

function openEquipmentMenu(id)
{
    document.getElementById(id).style.display = "block";
    if (currentBoi != "")
    {
        document.getElementById(currentBoi).style.display = "none";
    }
    currentBoi = id;
}
function clearEquipmentMenu()
{
    if (currentBoi != "")
    {
        document.getElementById(currentBoi).style.display = "none";
    }
    currentBoi = "";
}