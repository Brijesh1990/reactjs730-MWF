function simple()
{
    var p=document.getElementById("pnm").value;
    var r=document.getElementById("rnm").value;
    var n=document.getElementById("nym").value;
    var si=p*n*r/100;
    document.getElementById("my-app").innerHTML=si;
}
function sq()
{
    var number=document.getElementById("nm").value;
    var square=Math.pow(number,2);
    document.getElementById("my-app").innerHTML="Square of numbers is:"+square;
}

function ci()
{
    var p=document.getElementById("pnm").value;
    var r=document.getElementById("rnm").value;
    var n=document.getElementById("nym").value;
    var compound=p*(Math.pow((1+(r/100)),n));
    document.getElementById("my-app-cp").innerHTML=compound;
}
