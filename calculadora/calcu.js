function uno()
{
    document.getElementById("pantalla").value +="1";
}

function dos()
{
    document.getElementById("pantalla").value +="2";
}

function tres()
{
    document.getElementById("pantalla").value +="3";
}

function mas()
{
    document.getElementById("pantalla").value +="+";
}

function menos()
{
    document.getElementById("pantalla").value +="-";
}

function por()
{
    document.getElementById("pantalla").value +="*";
}

function igual()
{
    let resultado = eval(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = resultado;
}

function div()
{
    document.getElementById("pantalla").value +="/";
}


function c()
{
    document.getElementById("pantalla").value =" ";
}

function borrar()
{
    let pantalla = document.getElementById("pantalla");
    pantalla.value = pantalla.value.slice(0,-1);
}

function ocho()
{
    document.getElementById("pantalla").value +="8";
}

function cuatro()
{
    document.getElementById("pantalla").value +="4";
}

function cinco()
{
    document.getElementById("pantalla").value +="5";
}

function seis()
{
    document.getElementById("pantalla").value +="6";
}

function siete()
{
    document.getElementById("pantalla").value +="7";
}

function nueve()
{
    document.getElementById("pantalla").value +="9";
}

function porcent()
{
    document.getElementById("pantalla").value +="%";
}
function punto()
{
    document.getElementById("pantalla").value +=".";
}






