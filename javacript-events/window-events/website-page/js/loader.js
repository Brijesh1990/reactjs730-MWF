var myvar;
function ld()
{
    myvar=setTimeout('MainFunction()',1500);
}
function MainFunction()
{
    
    document.getElementById("loader").style="display:none";
    document.getElementById("MainPage").style="display:block";

}