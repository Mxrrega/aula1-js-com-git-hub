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
    let num3 = document.getElementById( "num3" ).value;
    let num4 = document.getElementById( "num4" ).value;
    let num5 = parseFloat(num3) + parseFloat(num4);
    document.getElementById( "resultado1" ).innerHTML = num5;
}