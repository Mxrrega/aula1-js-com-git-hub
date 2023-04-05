document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let nome = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerhtml = "Meu nome é: " + usuario;
    document.getElementById( "nome" ).value = "";
}