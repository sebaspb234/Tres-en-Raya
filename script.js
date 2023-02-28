function jugada(element)
{
    
    var jugador = document.getElementById("jugador");
    

    if(jugador.innerHTML == " Jugador numero 1 ")
    {
        var mov = document.getElementById(element.id);
        mov.style.backgroundImage = "url(equis.jpg)";
        mov.style.backgroundSize = "cover";
    }
    else{
        var mov = document.getElementById(element.id);
        mov.style.backgroundImage = "url(O.jpg)";
        mov.style.backgroundSize = "cover";
    }
    
    ganador(jugador);
    num_jugadas();
    
}

function num_jugadas()
{
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var c4 = document.getElementById("c4");
    var c5 = document.getElementById("c5");
    var c6 = document.getElementById("c6");
    var c7 = document.getElementById("c7");
    var c8 = document.getElementById("c8");
    var c9 = document.getElementById("c9");


    let contador = 0;
    const array = [c1,c2,c3,c4,c5,c6,c7,c8,c9];
    for(let i=0; i<array.length; i++)
    {
        let url = array[i].style.backgroundImage;
        //console.log(url);
        
        if(url == 'url("equis.jpg")' || url == 'url("O.jpg")')
        {
            contador++;
        }   
    }

    var jugador = document.getElementById("jugador");
    if(contador%2==0)
    {
        
        jugador.innerHTML = " Jugador numero 1 ";
    }
    else{
        jugador.innerHTML = " Jugador numero 2 ";
    }
    return contador;
    //console.log(contador);
}



function ganador(jugador)
{
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    var c4 = document.getElementById("c4");
    var c5 = document.getElementById("c5");
    var c6 = document.getElementById("c6");
    var c7 = document.getElementById("c7");
    var c8 = document.getElementById("c8");
    var c9 = document.getElementById("c9");
    const fila = [];
    const array = [c1,c2,c3,c4,c5,c6,c7,c8,c9];
    for(let i=0;i<array.length;i++)
    {
        fila.push(array[i].style.backgroundImage);
    }

    if(fila[0]==fila[1] && fila[1]==fila[2] && fila[0]!="")
    {
        alert(jugador.innerHTML + " HA GANADO EL JUEGO");
    }
    else if(fila[3]==fila[4] && fila[4]==fila[5] && fila[3]!=""){//rows
        alert(jugador.innerHTML + " HA GANADO EL JUEGO");
    }else if(fila[6]==fila[7] && fila[7]==fila[8] && fila[6]!=""){
        alert(jugador.innerHTML + " HA GANADO EL JUEGO");
    }else if(fila[0]==fila[3] && fila[3]==fila[6] && fila[0]!=""){ //columns
        alert(jugador.innerHTML + " HA GANADO EL JUEGO");
    }else if(fila[1]==fila[4] && fila[4]==fila[7] && fila[1]!=""){
        alert(jugador.innerHTML + " HA GANADO EL JUEGO");
    }else if(fila[2]==fila[5] && fila[5]==fila[8] && fila[2]!=""){
        alert(jugador.innerHTML + " HA GANADO EL JUEGO");
    }else if(fila[0]==fila[4] && fila[4]==fila[8] && fila[0]!=""){ //diagonals
        alert(jugador.innerHTML + " HA GANADO EL JUEGO");
    }else if(fila[2]==fila[4] && fila[4]==fila[6] && fila[2]!=""){
        alert(jugador.innerHTML + " HA GANADO EL JUEGO");
    }
    
    

    
}