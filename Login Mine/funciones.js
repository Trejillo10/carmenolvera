function validar()
{
    frasesita = "";
    usuario = document.querySelector('.Usuario').value;
    contra = document.querySelector('.Contra').value; 
    if(usuario == "Carmen")
    {
        if(contra == "123456789")
        {
            frasesita = "Pásale krnal";
        }
    }

    if(frasesita == "")
    {
        frasesita = "Lo siento bro, Datos Incorrectos";
    }

    alert(frasesita);
}