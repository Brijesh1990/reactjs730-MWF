function Add()
{
   
    let a=parseInt(prompt("Enter a values :"));
    let b=parseInt(prompt("Enter b values :"));
    let c=a+b;
    alert("additions of numebrs is :"+c)
}
function Subs()
{
    let a=parseInt(prompt("Enter a values :"));
    let b=parseInt(prompt("Enter b values :"));
    let c=a-b;
    alert("substractions of numebrs is :"+c)
}
function Mult()
{
    let a=parseInt(prompt("Enter a values :"));
    let b=parseInt(prompt("Enter b values :"));
    let c=a*b;
    alert("multiplications of numebrs is :"+c)
}
function Dv()
{
    let a=parseInt(prompt("Enter a values :"));
    let b=parseInt(prompt("Enter b values :"));
    let c=a/b;
    alert("Divisions of numebrs is :"+c)
}

function md()
{
    let a=parseInt(prompt("Enter Ammount values :"));
    let b=parseInt(prompt("Enter percentage values :"));
    let c=(a/100)*b;
    alert("Modulas of numebrs is :"+c)
}
export {Add,Subs,Mult,Dv,md}