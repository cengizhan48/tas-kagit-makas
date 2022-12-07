
let tas=document.getElementById("tas")
let kagit=document.getElementById("kagit")
let makas=document.getElementById("makas")
let pcSelections=document.getElementById("pcSelections")
let playerSelections=document.getElementById("playerSelections")
let conclusion=document.getElementById("conclusion")
let choice=["tas", "kagıt", "makas"]


kagit.onclick=randomSelections;
makas.onclick=randomSelections;
tas.onclick=randomSelections;
 


function randomSelections(){ 

    var pcSelections=RasgeleKagit

    if
    (pcSelections==0 && playerSelections==0){
        conclusion= "AYNI SEÇİM (BERABERE)"
    }

    else if
    (pcSelections==0 && playerSelections==1){
        conclusion="OYUNCU KAZANDI"
    }
     
    else if
    (pcSelections==0 && playerSelections==2){
        conclusion="BİLGİSAYAR KAZANDI"
    }

    else if
    (pcSelections==1 && playerSelections==0){
        conclusion="BİLGİSAYAR KAZANDI"
    }

    else if
    (pcSelections==1 && playerSelections==1){
        conclusion="AYNI SEÇİM(BERABERE)"
    }

    else if
    (pcSelections==1 && playerSelections==2){
        conclusion="OYUNCU KAZANDI"
    }

    else if
    (pcSelections==2 && playerSelections==0){
        conclusion=="OYUNCU KAZANDI"
    }

    else if
    (pcSelections==2 && playerSelections==1){
        conclusion="BİLGİSAYAR KAZANDI"
    }

    else if
    (pcSelections==2 && playerSelections==2){
        conclusion="AYNI SEÇİM(BERABERE)"
    }
    conclusion.innerHTML=conclusion;
}

    function RasgeleKagit(){
        var sayi= Math.round(Math.random()*2);
        pcSelections.src=choice[sayi]; 

        return sayi;
    }





