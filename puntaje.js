var puntaje1 = 0
var puntaje2 = 0
var games = 0
var games2 = 0
var sets = 0
var sets2 = 0
var tiebrake = 0
var tiebrake2 = 0
var saque = 0



var lblAgregar = document.getElementById("btn_finPuntos1")
var lblAgregar2 = document.getElementById("btn_finPuntos2")
var lblGames = document.getElementById("games")
var lblGames2 = document.getElementById("games2")
var lblSets = document.getElementById("sets")
var lblSets2 = document.getElementById("sets2")
var set1 = document.getElementById("set1")
var set2 = document.getElementById("set2")
var set3 = document.getElementById("set3")
var btn_fin1 = document.getElementById("btn_fin1")
var btn_fin2 = document.getElementById("btn_fin2")
var btn_fin3 = document.getElementById("btn_fin3")
var btn_fin11 = document.getElementById("btn_fin11")
var btn_fin22 = document.getElementById("btn_fin22")
var btn_fin33 = document.getElementById("btn_fin33")
var btn_finPuntos1 = document.getElementById("btn_finPuntos1")
var btn_finPuntos2 = document.getElementById("btn_finPuntos2")
var pelota1 = document.getElementById("pelota1")
var pelota2 = document.getElementById("pelota2")
var parejaA = document.getElementById("parejaA")
var parejaB = document.getElementById("parejaB")
var pareja1 = document.getElementById("pareja1")
var pareja2 = document.getElementById("pareja2")
var audiopelota = document.getElementById("audiopelota")
var error = document.getElementById("error")




function agregar(){
   audiopelota.play()
  

   lblAgregar.style.backgroundColor = "lightblue"
   lblAgregar2.style.backgroundColor = "lightblue"

   if(games == 6 & games2 == 6){
      tiebrake ++

      if((tiebrake + tiebrake2 == 0 || tiebrake + tiebrake2 == 3 || tiebrake + tiebrake2 == 4  || tiebrake + tiebrake2 == 7 || tiebrake + tiebrake2 == 8 || tiebrake + tiebrake2 == 11 || tiebrake + tiebrake2 == 12 || tiebrake + tiebrake2 == 15 || tiebrake + tiebrake2 == 16 || tiebrake + tiebrake2 == 19 || tiebrake + tiebrake2 == 20 || tiebrake + tiebrake2 == 23 || tiebrake + tiebrake2 == 24 || tiebrake + tiebrake2 == 27 || tiebrake + tiebrake2 == 28 || tiebrake + tiebrake2 == 31 || tiebrake + tiebrake2 == 32) & (sets + sets2 == 0 || sets + sets2 == 2)){
         pelota1.style.opacity = 1
         pelota2.style.opacity = 0
      }else{
         pelota1.style.opacity = 0
         pelota2.style.opacity = 1
      }

      lblAgregar.innerText = tiebrake
      btn_finPuntos1.innerText = tiebrake
      if((tiebrake == 7 & tiebrake2 < 6) || (tiebrake > 7 & tiebrake > (tiebrake2 + 1))){
         games ++
         saque ++
         sets ++
         if(sets + sets2 == 1){
           
            btn_fin1.innerText = games
            btn_fin11.innerText = games2
         }
         if(sets + sets2 == 2 ){
           
            btn_fin2.innerText = games
            btn_fin22.innerText = games2
         }
         if(sets + sets2 == 3 ){
           
            btn_fin3.innerText = games
            btn_fin33.innerText = games2
         }
         

         lblSets.innerText = sets
         games = 0
         games2 = 0
         lblGames.innerText = 0
         lblGames2.innerText = 0
         lblAgregar.innerText = 0
         btn_finPuntos1.innerText = 0
         lblAgregar2.innerText = 0
         tiebrake = 0
         tiebrake2 = 0
        


      }

   }else{

      puntaje1 ++;
   
 
      if(puntaje1 == 0){
         lblAgregar.innerText = 0
      }
      if(puntaje1 == 1){
         lblAgregar.innerText = 15
      }
      if(puntaje1 == 2){
         lblAgregar.innerText = 30
      }
      if(puntaje1 == 3){
         lblAgregar.innerText = 40
      }
      if(puntaje1 == 3 & puntaje2 == 3){
         lblAgregar.style.backgroundColor = "yellow"
         lblAgregar2.style.backgroundColor = "yellow"
      }
      if(puntaje1 == 4 ){
         lblAgregar.innerText = 0
         puntaje1 = 0
         lblAgregar2.innerText = 0
         puntaje2 = 0
         games ++
         saque ++
         lblGames.innerText = games;

         if(sets + sets2 == 0){
            btn_fin1.innerText = games;
         }else if(sets + sets2 == 1){
            btn_fin2.innerText = games;
         }else if(sets + sets2 == 2){
            btn_fin3.innerText = games;
         }
         
        
     
      }
      if(games == 6 & games2 < 5){
        sets ++

        if(sets + sets2 == 1){
        
         btn_fin1.innerText = games
         btn_fin11.innerText = games2
      }
      if(sets + sets2 == 2){
       
         btn_fin2.innerText = games
         btn_fin22.innerText = games2
      }
      if(sets + sets2 == 3){
        
         btn_fin3.innerText = games
         btn_fin33.innerText = games2
      }
     

        lblSets.innerText = sets
        games = 0
        games2 = 0
        lblGames.innerText = 0
        
        lblGames2.innerText = 0
        
     
      }
      if(games == 7 & games2 == 5){
         sets ++

         if(sets + sets2  == 1){
           
            btn_fin1.innerText = games
            btn_fin11.innerText = games2
         }
         if(sets + sets2 == 2){
           
            btn_fin2.innerText = games
            btn_fin22.innerText = games2
         }
         if(sets + sets2 == 3){
            
            btn_fin3.innerText = games
            btn_fin33.innerText = games2
         }

         
         

         lblSets.innerText = sets
         games = 0
         games2 = 0
         lblGames.innerText = 0
         lblGames2.innerText = 0
        
      
       }

     
      
   
     }
     if((saque) % 2 == 0 & (tiebrake + tiebrake2 == 0)){
      pelota1.style.opacity = 1
      pelota2.style.opacity = 0
   }else if((saque) % 2 != 0 & (tiebrake + tiebrake2 == 0)){
      pelota1.style.opacity = 0
      pelota2.style.opacity = 1
   }
     


   }
   

   function agregar2(){
      audiopelota.play()
      

      lblAgregar.style.backgroundColor = "lightblue"
   lblAgregar2.style.backgroundColor = "lightblue"

      if(games == 6 & games2 == 6){
         tiebrake2 ++

         if(tiebrake + tiebrake2 == 0 || tiebrake + tiebrake2 == 3 || tiebrake + tiebrake2 == 4  || tiebrake + tiebrake2 == 7 || tiebrake + tiebrake2 == 8 || tiebrake + tiebrake2 == 11 || tiebrake + tiebrake2 == 12 || tiebrake + tiebrake2 == 15 || tiebrake + tiebrake2 == 16 || tiebrake + tiebrake2 == 19 || tiebrake + tiebrake2 == 20 || tiebrake + tiebrake2 == 23 || tiebrake + tiebrake2 == 24 || tiebrake + tiebrake2 == 27 || tiebrake + tiebrake2 == 28 || tiebrake + tiebrake2 == 31 || tiebrake + tiebrake2 == 32) {
            pelota1.style.opacity = 1
            pelota2.style.opacity = 0
         }else{
            pelota1.style.opacity = 0
            pelota2.style.opacity = 1
         }

         lblAgregar2.innerText = tiebrake2
         if((tiebrake2 == 7 & tiebrake < 6) || (tiebrake2 > 7 & tiebrake2 > (tiebrake + 1))){
            games2 ++
            saque ++
            sets2 ++

            if(sets2 + sets == 1){
               
               btn_fin11.innerText = games2
               btn_fin1.innerText = games
            }
            if(sets2 + sets == 2){
              
               btn_fin22.innerText = games2
               btn_fin2.innerText = games
            }
            if(sets2 + sets == 3){
              
               btn_fin33.innerText = games2
               btn_fin3.innerText = games
            }

           

            lblSets2.innerText = sets2
            games = 0
            games2 = 0
            lblGames.innerText = 0
            lblGames2.innerText = 0
            lblAgregar.innerText = 0
            lblAgregar2.innerText = 0
            tiebrake = 0
            tiebrake2 = 0
         }
   
      }else{
     
         puntaje2 ++;
      
    
    if(puntaje2 == 0){
       lblAgregar2.innerText = 0
    }
    if(puntaje2 == 1){
       lblAgregar2.innerText = 15
    }
    if(puntaje2 == 2){
       lblAgregar2.innerText = 30
    }
    if(puntaje2 == 3){
       lblAgregar2.innerText = 40
    }
    if(puntaje1 == 3 & puntaje2 == 3){
      lblAgregar.style.backgroundColor = "yellow"
      lblAgregar2.style.backgroundColor = "yellow"
   }
    if(puntaje2 == 4){
       lblAgregar2.innerText = 0
       puntaje2 = 0
       lblAgregar.innerText = 0
       puntaje1 = 0
       games2 ++
       saque ++
       lblGames2.innerText = games2;
       if(sets + sets2 == 0){
         btn_fin11.innerText = games2;
      }else if(sets + sets2 == 1){
         btn_fin22.innerText = games2;
      }else if(sets + sets2 == 2){
         btn_fin33.innerText = games2;
      }
   
    }
    if(games2 == 6 & games < 5){
      sets2 ++

      if(sets2 + sets == 1){
        
         btn_fin11.innerText = games2
         btn_fin1.innerText = games
      }
      if(sets2 + sets == 2){
        
         btn_fin22.innerText = games2
         btn_fin2.innerText = games
      }
      if(sets2 + sets == 3){
        
         btn_fin33.innerText = games2
         btn_fin3.innerText = games
      }

     

      lblSets2.innerText = sets2
      games2 = 0
      games = 0
      lblGames2.innerText = 0
      lblGames.innerText = 0
   
    }
    if(games2 == 7 & games == 5){
      sets2 ++

      if(sets2 + sets == 1){
       
         btn_fin11.innerText = games2
         btn_fin1.innerText = games
      }
      if(sets2 + sets == 2){
        
         btn_fin22.innerText = games2
         btn_fin2.innerText = games
      }
      if(sets2 + sets == 3){
         
         btn_fin33.innerText = games2
         btn_fin3.innerText = games
      }

      
      
      
      lblSets2.innerText = sets2
      games2 = 0
      games = 0
      lblGames.innerText = 0
      lblGames2.innerText = 0
   
    }
   
    
   
   }
   if((saque) % 2 == 0 & tiebrake + tiebrake2 == 0){
      pelota1.style.opacity = 1
      pelota2.style.opacity = 0
   }else if((saque) % 2 != 0 & tiebrake + tiebrake2 == 0){
      pelota1.style.opacity = 0
      pelota2.style.opacity = 1
   }

  
   
   
   }

   function jugadores(){
      
      if(pareja1.innerText == "" || pareja2.innerText == ""){

      }else{
         pareja1.innerText = parejaA.value;
         pareja2.innerText = parejaB.value;
      }
     

    }

    function restar(){
      error.play()
      lblAgregar.style.backgroundColor = "lightblue"
      lblAgregar2.style.backgroundColor = "lightblue"

      if(tiebrake > 0){
         tiebrake--
         lblAgregar.innerText = tiebrake
      }else{
         puntaje1 --

         if(puntaje1 < 0){
            puntaje1 = 0
         }
   
         if(puntaje1 == 0){
            lblAgregar.innerText = 0
         }
         if(puntaje1 == 1){
            lblAgregar.innerText = 15
         }
         if(puntaje1 == 2){
            lblAgregar.innerText = 30
         }
         if(puntaje1 == 3){
            lblAgregar.innerText = 40
         }
       }
   
      

      
    }

    function restar2(){
      error.play()
      lblAgregar.style.backgroundColor = "lightblue"
      lblAgregar2.style.backgroundColor = "lightblue"

      if(tiebrake2 > 0){
         tiebrake2--
         lblAgregar2.innerText = tiebrake2
      }else{

      puntaje2 --

      if(puntaje2 < 0){
         puntaje2 = 0
      }

      if(puntaje2 == 0){
         lblAgregar2.innerText = 0
      }
      if(puntaje2 == 1){
         lblAgregar2.innerText = 15
      }
      if(puntaje2 == 2){
         lblAgregar2.innerText = 30
      }
      if(puntaje2 == 3){
         lblAgregar2.innerText = 40
      }
   }



   }
   