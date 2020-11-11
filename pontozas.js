function Szamol(){
    var matekIrasbeli = parseInt(document.getElementById("irasbeliMat").value);
    var matekSzobeli = parseInt(document.getElementById("szobeliMat").value);
    var toriIrasbeli = parseInt(document.getElementById("irasbeliTor").value);
    var toriSzobeli = parseInt(document.getElementById("szobeliTor").value);
    var magyarIrasbeli = parseInt(document.getElementById("irasbeliMagy").value);
    var magyarSzobeli = parseInt(document.getElementById("szobeliMagy").value);
    var nyelvIrasbeli = parseInt(document.getElementById("irasbeliNyelv").value);
    var nyelvSzobeli = parseInt(document.getElementById("szobeliNyelv").value);

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
 
     if((toriIrasbeli + toriSzobeli*100/60)/2 <= 100 && (toriIrasbeli + toriSzobeli*100/60)/2 >= 80){
         stuff[1] = "Töri 5";
     }
     else if((toriIrasbeli + toriSzobeli*100/60)/2 <= 79 && (toriIrasbeli + toriSzobeli*100/60)/2 >= 60){
         stuff[1] = "Töri 4";
     }else if((toriIrasbeli + toriSzobeli*100/60)/2 <= 59 && (toriIrasbeli + toriSzobeli*100/60)/2 >= 40){
         stuff[1] = "Töri 3";
     }else if((toriIrasbeli + toriSzobeli*100/60)/2 <= 39 && (toriIrasbeli + toriSzobeli*100/60)/2 >= 25){
         stuff[1] = "Töri 2";
     }else if((toriIrasbeli + toriSzobeli*100/60)/2 <= 24 && (toriIrasbeli + toriSzobeli*100/60)/2 >= 0){
         stuff[1] = "Töri 1";
     }
 
     if((magyarIrasbeli + magyarSzobeli*100/50)/2 <=100 && (magyarIrasbeli + magyarSzobeli*100/50)/2 >=80){
         stuff[2] = "Magyar 5";
     }
     else if((magyarIrasbeli + magyarSzobeli*100/50)/2 <=79 && (magyarIrasbeli + magyarSzobeli*100/50)/2 >=60){
         stuff[2] = "Magyar 4";
     }else if((magyarIrasbeli + magyarSzobeli*100/50)/2 <=59 && (magyarIrasbeli + magyarSzobeli*100/50)/2 >=40){
         stuff[2] = "Magyar 3";
     }else if((magyarIrasbeli + magyarSzobeli*100/50)/2 <=39 && (magyarIrasbeli + magyarSzobeli*100/50)/2 >=25){
         stuff[2] = "Magyar 2";
     }else if((magyarIrasbeli + magyarSzobeli*100/50)/2 <=24 && (magyarIrasbeli + magyarSzobeli*100/50)/2 >=0){
         stuff[2] = "Magyar 1";
     }

    if((nyelvIrasbeli + nyelvSzobeli*100/33)/2 <= 100 && (nyelvIrasbeli + nyelvSzobeli*100/33)/2 >= 80){
        stuff[3] = "Nyelv 5";
    }
    else if((nyelvIrasbeli + nyelvSzobeli*100/33)/2 <= 79 && (nyelvIrasbeli + nyelvSzobeli*100/33)/2 >= 60){
        stuff[3] = "Nyelv 4";
    }else if((nyelvIrasbeli + nyelvSzobeli*100/33)/2 <= 59 && (nyelvIrasbeli + nyelvSzobeli*100/33)/2 >= 40){
        stuff[3] = "Nyelv 3";
    }else if((nyelvIrasbeli + nyelvSzobeli*100/33)/2 <= 39 && (nyelvIrasbeli + nyelvSzobeli*100/33)/2 >= 25){
        stuff[3] = "Nyelv 2";
    }else if((nyelvIrasbeli + nyelvSzobeli*100/33)/2 <= 24 && (nyelvIrasbeli + nyelvSzobeli*100/33)/2 >= 0){
        stuff[3] = "Nyelv 1";
    }

    document.getElementById("eredmenyasd").innerHTML = stuff;
}

function onClick(){
    Szamol();
}