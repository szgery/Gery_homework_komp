function Szamol(){
    var matekIrasbeli = parseInt(document.getElementById("irasbeliMat").value);
    var matekSzobeli = document.getElementById("irasbeliMat").value;
    var toriIrasbeli = document.getElementById("irasbeliTor").value;
    var toriSzobeli = document.getElementById("szobeliTor").value;
    var magyarIrasbeli = document.getElementById("irasbeliMagy").value;
    var magyarSzobeli = document.getElementById("szobeliMagy").value;
    var nyelvIrasbeli = document.getElementById("irasbeliNyelv").value;
    var nyelvSzobeli = document.getElementById("szobeliNyelv").value;

    var stuff = [];

    if((matekIrasbeli + matekSzobeli*100/50)/2 <= 100 && (matekIrasbeli + matekSzobeli*100/50)/2 >= 80){
       stuff[0] = "Matek 5";
    }
    else if((matekIrasbeli + matekSzobeli*100/50)/2 <= 79 && (matekIrasbeli + matekSzobeli*100/50)/2 >= 60){
        stuff[0] = "Matek 4";
    }else if((matekIrasbeli + matekSzobeli*100/50)/2 <= 59 && (matekIrasbeli + matekSzobeli*100/50)/2 >= 40){
        stuff[0] = "Matek 3";
    }else if((matekIrasbeli + matekSzobeli*100/50)/2 <= 39 && (matekIrasbeli + matekSzobeli*100/50)/2 >= 25){
        stuff[0] = "Matek 2";
    }else if((matekIrasbeli + matekSzobeli*100/50)/2 <= 24 && (matekIrasbeli + matekSzobeli*100/50)/2 >= 0){
        stuff[0] = "Matek 1";
    }

    if(toriIrasbeli < 101 && toriIrasbeli >= 80){
        stuff[1] = "Töri 5";
    }
    else if(toriIrasbeli < 80 && toriIrasbeli >= 60){
        stuff[1] = "Töri 4";
    }else if(toriIrasbeli < 60 && toriIrasbeli >= 40){
        stuff[1] = "Töri 3";
    }else if(toriIrasbeli< 40 && toriIrasbeli >= 25){
        stuff[1] = "Töri 2";
    }else if(toriIrasbeli< 25 && toriIrasbeli >= 0){
        stuff[1] = "Töri 1";
    }

    if(magyarIrasbeli < 101 && magyarIrasbeli >= 80){
        stuff[2] = "Magyar 5";
    }
    else if(magyarIrasbeli < 80 && magyarIrasbeli >= 60){
        stuff[2] = "Magyar 4";
    }else if(magyarIrasbeli < 60 && magyarIrasbeli >= 40){
        stuff[2] = "Magyar 3";
    }else if(magyarIrasbeli< 40 && magyarIrasbeli >= 25){
        stuff[2] = "Magyar 2";
    }else if(magyarIrasbeli< 25 && magyarIrasbeli >= 0){
        stuff[2] = "Magyar 1";
    }

    if(nyelvIrasbeli < 101 && nyelvIrasbeli >= 80){
        stuff[3] = "Nyelv 5";
    }
    else if(nyelvIrasbeli < 80 && nyelvIrasbeli >= 60){
        stuff[3] = "Nyelv 4";
    }else if(nyelvIrasbeli < 60 &&nyelvIrasbeli >= 40){
        stuff[3] = "Nyelv 3";
    }else if(nyelvIrasbeli< 40 && nyelvIrasbeli >= 25){
        stuff[3] = "Nyelv 2";
    }else if(nyelvIrasbeli< 25 && nyelvIrasbeli >= 0){
        stuff[3] = "Nyelv 1";
    }

    document.getElementById("eredmenyasd").innerHTML = stuff;
}

function onClick(){
    Szamol();
}