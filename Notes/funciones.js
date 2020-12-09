window.addEventListener('load', Inicializar,true);
var notas = [];
function Inicializar(){
    Titulo = document.getElementById("titulo");
    Contenido = document.getElementById("texto");
    Tema = document.getElementById("lista");
    Boton = document.getElementById("boton");
    Mensagito = document.querySelector(".mensagito");
    Boton.addEventListener('click', agregarNota, true);
}
function agregarNota(){
    if(Titulo.value!="" && Contenido.value!="")
    {
        Nota={
            TituloNota: Titulo.value,
            ContenidoNota: Contenido.value,
            TemaNota: Tema.value,
        };
        notas.push(Nota);
        console.log(notas.length)
        Pizzarron = document.querySelector('.postit').innerHTML+="<div class ='postito' id = '"+Nota.TemaNota+"'><div class='cir' id = '"+(notas.length-1)+"'></div><h2>"+Nota.TituloNota+"</h2><p class='textito'>"+Nota.ContenidoNota+"</p></div>";
        Titulo.value="";
        Contenido.value="";
    }
    else{
        Mensagito.classList.add('aparecer');
        setTimeout(function(){
            Mensagito.classList.remove('aparecer');
        },3100);
    }



    Elminar=document.querySelectorAll('.cir');
    for(let i=0; i<notas.length;i++)
    {
        Elminar[i].addEventListener('click',ElminarNota,true);
    }
}
function ElminarNota()
{
    console.log('click',event);
    notas.splice(event.target.id,1);
    document.getElementById(event.target.id).parentElement.remove();
}