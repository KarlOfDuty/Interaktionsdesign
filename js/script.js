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

function loadCharacter()
{
  document.getElementById("demo").innerHTML = 5 + 6;
    document.getElementById("loade").innerHTML='<object type="text/html" data="home.html" ></object>';
}
