function simple()
{
    var p=document.getElementById("pnm").value;
    var r=document.getElementById("rnm").value;
    var n=document.getElementById("nym").value;
    var si=p*n*r/100;
    document.getElementById("my-app").innerHTML=si;
}

