window.addEventListener('load', asignarEventos, false);
function asignarEventos()
{
        document.getElementById('menu1').addEventListener('click',click1,false)
        document.getElementById('menu2').addEventListener('click',click2,false)
        document.getElementById('menu3').addEventListener('click',click3,false)
}
function click1()
{
    window.alert("Hizo click en el menu 1");
}
function click2()
{
    window.alert("Hizo click en el menu 2")
}
function click3()
{
    window.alert("Hizo click en el menu 3")
}

