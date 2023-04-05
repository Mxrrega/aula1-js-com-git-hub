document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );

function showcolor()
{
    document.body.style.backgroundColor = "blue";
}

function exibenome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é:" + usuario;
    document.getElementById( "nome" ).value = "";
}

document.getElementById( "bnt-soma" ).addEventListener( "click" , soma );

function soma ()
{
    let num1 = document.getElementById( "num1" ).value;
    let num2 = document.getElementById( "num2" ).value;
    let num3 = parseFloat(num1) + parseFloat(num2);
    document.getElementById( "resultado1" ).innerHTML = num3;
}

document.getElementById( "bnt-dividir" ).addEventListener( "click" , dividi );

function dividi ()
{
    let num4 = document.getElementById( "num4" ).value;
    let num5 = document.getElementById( "num5" ).value;
    let num6 = parseFloat(num4) / parseFloat(num5);
    document.getElementById( "resultado2" ).innerHTML = num6;
}

document.getElementById( "bnt-multiplicar" ).addEventListener( "click" , multiplica );

function multiplica ()
{
    let num7 = document.getElementById( "num7" ).value;
    let num8 = document.getElementById( "num8" ).value;
    let num9 = parseFloat(num7) * parseFloat(num8);
    document.getElementById( "resultado3" ).innerHTML = num9;
}

document.getElementById( "bnt-subtrair" ).addEventListener( "click" , subtrai );

function subtrai ()
{
    let num10 = document.getElementById( "num10" ).value;
    let num11 = document.getElementById( "num11" ).value;
    let num12 = parseFloat(num10) - parseFloat(num11);
    document.getElementById( "resultado4" ).innerHTML = num12;
}