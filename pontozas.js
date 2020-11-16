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

    try{
        //matek irasbeli exceptions
        if(matekIrasbeli > 100) throw "A szam tul nagy";
        if(matekIrasbeli < 0) throw "A szam tul kicsi";

        //matek szobeli exceptions
        if(matekSzobeli > 50) throw "A szam tul nagy";
        if(matekSzobeli < 0) throw "A szam tul kicsi";

        //szam vizsgalat
        if(isNaN(matekIrasbeli)) throw "Nem szam";
        if(isNaN(matekSzobeli)) throw "Nem szam";
    }
    catch(error){
        alert("Hiba: " + error);
        document.getElementById("irasbeliMat") = 0;
    }

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

     try{
        //matek irasbeli exceptions
        if(toriIrasbeli > 100) throw "A szam tul nagy";
        if(toriIrasbeli < 0) throw "A szam tul kicsi";

        //matek szobeli exceptions
        if(toriSzobeli > 60) throw "A szam tul nagy";
        if(toriSzobeli < 0) throw "A szam tul kicsi";

        //szam vizsgalat
        if(isNaN(toriIrasbeli)) throw "Nem szam";
        if(isNaN(toriSzobeli)) throw "Nem szam";
    }
    catch(error){
        alert("Hiba: " + error);
        document.getElementById("irasbeliTor") = 0;
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
 
     
     try{
        //matek irasbeli exceptions
        if(magyarIrasbeli > 100) throw "A szam tul nagy";
        if(magyarIrasbeli < 0) throw "A szam tul kicsi";

        //matek szobeli exceptions
        if(magyarSzobeli > 50) throw "A szam tul nagy";
        if(magyarSzobeli < 0) throw "A szam tul kicsi";

        //szam vizsgalat
        if(isNaN(magyarIrasbeli)) throw "Nem szam";
        if(isNaN(magyarSzobeli)) throw "Nem szam";
    }
    catch(error){
        alert("Hiba: " + error);
        document.getElementById("irasbeliMagy") = 0;
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

     
     try{
        //matek irasbeli exceptions
        if(nyelvIrasbeli > 100) throw "A szam tul nagy";
        if(nyelvIrasbeli < 0) throw "A szam tul kicsi";

        //matek szobeli exceptions
        if(nyelvSzobeli > 33) throw "A szam tul nagy";
        if(nyelvSzobeli < 0) throw "A szam tul kicsi";

        //szam vizsgalat
        if(isNaN(nyelvIrasbeli)) throw "Nem szam";
        if(isNaN(nyelvSzobeli)) throw "Nem szam";
    }
    catch(error){
        alert("Hiba: " + error);
        document.getElementById("irasbeliNyelv") = 0;
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