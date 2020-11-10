function insertar (valor) {
    document.querySelector('.pantalla').innerHTML += valor;
}

function resultado (){
    p = document.querySelector('.pantalla');
    r = p.innerHTML;
    res=eval(r);
    p.innerHTML = res;
}

function borrar(){
    document.querySelector('.pantalla').innerHTML = "";
}


function borraruno()
{
    p=document.querySelector('.pantalla');
    valores = p.innerHTML;
    t = valores.length;
    borrar();
    for(i=0;i<t-1;i++)
    {
        p.innerHTML+= valores[i];
    }
}