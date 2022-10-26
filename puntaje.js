var puntaje1 = 0
var puntaje2 = 0
var games = 0
var games2 = 0
var sets = 0
var sets2 = 0
var tiebrake = 0
var tiebrake2 = 0



var lblAgregar = document.getElementById("lbl_agregar")
var lblAgregar2 = document.getElementById("lbl_agregar2")
var lblGames = document.getElementById("games")
var lblGames2 = document.getElementById("games2")
var lblSets = document.getElementById("sets")
var lblSets2 = document.getElementById("sets2")
var set1 = document.getElementById("set1")
var set2 = document.getElementById("set2")
var set3 = document.getElementById("set3")



function agregar(){

   if(games == 6 & games2 == 6){
      tiebrake ++
      lblAgregar.innerText = tiebrake
      if((tiebrake == 7 & tiebrake2 < 6) || (tiebrake > 7 & tiebrake > (tiebrake2 + 1))){
         games ++
         sets ++
         if(sets == 1){
            set1.innerText = set1.innerText + " " + games + " - " + games2
         }
         if(sets == 2){
            set2.innerText = set2.innerText  + " "+ games + " - " + games2
         }
         if(sets == 3){
            set3.innerText = set3.innerText  + " "+ games + " - " + games2
         }

         lblSets.innerText = sets
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
      if(puntaje1 == 4 ){
         lblAgregar.innerText = 0
         puntaje1 = 0
         lblAgregar2.innerText = 0
         puntaje2 = 0
         games ++
         lblGames.innerText = games;
     
      }
      if(games == 6 & games2 < 5){
        sets ++

        if(sets == 1){
         set1.innerText = set1.innerText  + " "+ games + " - " + games2
      }
      if(sets == 2){
         set2.innerText = set2.innerText  + " "+ games + " - " + games2
      }
      if(sets == 3){
         set3.innerText = set3.innerText  + " "+ games + " - " + games2
      }

        lblSets.innerText = sets
        games = 0
        lblGames.innerText = 0
        
     
      }
      if(games == 7 & games2 == 5){
         sets ++

         if(sets == 1){
            set1.innerText = set1.innerText + " " + games + " - " + games2
         }
         if(sets == 2){
            set2.innerText = set2.innerText  + " "+ games + " - " + games2
         }
         if(sets == 3){
            set3.innerText = set3.innerText  + " "+ games + " - " + games2
         }

         lblSets.innerText = sets
         games = 0
         games2 = 0
         lblGames.innerText = 0
         lblGames2.innerText = 0
        
      
       }

     
      
   
     }


   }
   

  

function restar(){
    
    puntaje1 --;
    if(puntaje1 == -1){
        puntaje1 = 0
        lblAgregar.innerText = 0
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
    if(puntaje1 == 4){
       lblAgregar.innerText = 0
       puntaje1 = 0
    }
    
   
   }

   function agregar2(){

      if(games == 6 & games2 == 6){
         tiebrake2 ++
         lblAgregar2.innerText = tiebrake2
         if((tiebrake2 == 7 & tiebrake < 6) || (tiebrake2 > 7 & tiebrake2 > (tiebrake + 1))){
            games2 ++
            sets2 ++

            if(sets2 == 1){
               set1.innerText = set1.innerText + " " + games + " - " + games2
            }
            if(sets2 == 2){
               set2.innerText = set2.innerText  + " "+ games + " - " + games2
            }
            if(sets2 == 3){
               set3.innerText = set3.innerText  + " "+ games + " - " + games2
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
    if(puntaje2 == 4){
       lblAgregar2.innerText = 0
       puntaje2 = 0
       lblAgregar.innerText = 0
       puntaje1 = 0
       games2 ++
       lblGames2.innerText = games2;
   
    }
    if(games2 == 6 & games < 5){
      sets2 ++

      if(sets2 == 1){
         set1.innerText = set1.innerText + " " + games + " - " + games2
      }
      if(sets2 == 2){
         set2.innerText = set2.innerText  + " "+ games + " - " + games2
      }
      if(sets2 == 3){
         set3.innerText = set3.innerText  + " "+ games + " - " + games2
      }

      lblSets2.innerText = sets2
      games2 = 0
      lblGames2.innerText = 0
   
    }
    if(games2 == 7 & games == 5){
      sets2 ++
      
      if(sets2 == 1){
         set1.innerText = set1.innerText + " " + games + " - " + games2
      }
      if(sets2 == 2){
         set2.innerText = set2.innerText  + " "+ games + " - " + games2
      }
      if(sets2 == 3){
         set3.innerText = set3.innerText  + " "+ games + " - " + games2
      }

      lblSets2.innerText = sets2
      games2 = 0
      games = 0
      lblGames.innerText = 0
      lblGames2.innerText = 0
   
    }
   
    
   
   }
   
   function restar2(){
       puntaje2 --;
       if(puntaje2 == -1){
        puntaje2 = 0
        lblAgregar2.innerText = 0
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
       if(puntaje2 == 4){
          lblAgregar2.innerText = 0
          puntaje2 = 0
       }
       
      
      }
   }
