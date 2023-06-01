
let boyut, tur,malzeme=0;
let odenecekTutar ;
let malzemesay =0;
let secenek;

boyut = document.getElementsByName("pizzaBoyut");
tur = document.getElementsByName("hamurTur");
malzeme = document.getElementsByName("malzemeler");

mal1=document.getElementById("malzeme1");
mal2=document.getElementById("malzeme2");
mal3=document.getElementById("malzeme3");
mal4=document.getElementById("malzeme4");
mal5=document.getElementById("malzeme5");
mal6=document.getElementById("malzeme6");
mal7=document.getElementById("malzeme7");
mal8=document.getElementById("malzeme8");
mal9=document.getElementById("malzeme9");
mal9=document.getElementById("malzeme9");
mal10=document.getElementById("malzeme10");

sayigor=document.getElementById("sayigor");
tutar=document.getElementById("tutar");

adet=document.getElementById("adet");

//! ********************** pizza boyut fiyat hesaplama ********************************

function pizzaBoyutu(){
    if(document.getElementById("boy1").checked) {
        return tutar.textContent=(odenecekTutar= Number(boy1.value))
    }
    else if(document.getElementById("boy2").checked) {
        return tutar.textContent=(odenecekTutar=Number(boy2.value))
    }
    else if(document.getElementById("boy3").checked) {
        return tutar.textContent=(odenecekTutar=Number(boy3.value))
    }
    else {
        return alert("Lütfen pizza boyut seçiminizi yapınız!!")
    }
}
//! ********************** hamur türü fiyat arttırma ********************************

function hamurTuru(){
    if(document.getElementById("tur1").checked) {
        return tutar.textContent=(odenecekTutar += Number(tur1.value))
    }
    else if(document.getElementById("tur2").checked) {
        return tutar.textContent=(odenecekTutar +=Number(tur2.value))
    }
    else if(document.getElementById("tur3").checked) {
        return tutar.textContent=(odenecekTutar +=Number(tur3.value))
    }
    else {
        return alert("Lütfen hamur türü seçiminizi yapınız!!")
    }

}

//! ********************** secilen malzeme fiyat arttırma ********************************

        function secilenMalzemeler(){
            if(document.getElementById("malzeme1").checked) {
                tutar.textContent=(odenecekTutar +=Number(malzeme1.value))
            }
            if(document.getElementById("malzeme2").checked) {
                tutar.textContent=(odenecekTutar +=Number(malzeme2.value))
            }
            if(document.getElementById("malzeme3").checked) {
                tutar.textContent=(odenecekTutar +=Number(malzeme3.value))
            }
            if(document.getElementById("malzeme4").checked) {
                tutar.textContent=(odenecekTutar +=Number(malzeme4.value))
            }
            if(document.getElementById("malzeme5").checked) {
                tutar.textContent=(odenecekTutar +=Number(malzeme5.value))
            }
            if(document.getElementById("malzeme6").checked) {
                tutar.textContent=(odenecekTutar +=Number(malzeme6.value))
            }
            if(document.getElementById("malzeme7").checked) {
                tutar.textContent=(odenecekTutar +=Number(malzeme7.value))
            }
            if(document.getElementById("malzeme8").checked) {
                tutar.textContent=(odenecekTutar +=Number(malzeme8.value))
            }
            if(document.getElementById("malzeme9").checked) {
                tutar.textContent=(odenecekTutar +=Number(malzeme9.value))
            }
            if(document.getElementById("malzeme10").checked) {
                tutar.textContent=(odenecekTutar +=Number(malzeme10.value))
            }
        }

//! ********************** iNDİRİM VE ADETE GÖRE SON FİYAT HESAPLAMA ******************

function adetHesap(){


    let select=document.getElementById('adet')
    let option=select.options[select.selectedIndex]
    let secenek=Number(option.value)
    odenecekTutar*=secenek
    document.getElementById('tutar').value=odenecekTutar
}

//! **********************Adet ve indirim kontrol *******************************************

function adetindirimKontrol() {
    let adet=document.getElementById('adet')
    let adetvalue=adet.value
    // let option=select.options[select.selectedIndex]
    
    // let secenek=Number(option.value)
    // odenecekTutar*=secenek
    // document.getElementById('tutar').value=odenecekTutar
    document.getElementById("indirim1").disabled=true
    document.getElementById("indirim2").disabled=true

    if(adetvalue==1) {
        document.getElementById("indirim1").disabled=true
        document.getElementById("indirim2").disabled=true
         if(document.getElementById("indirim1").checked){tutar.textContent=odenecekTutar}


    }
    if(adetvalue==2){
        document.getElementById("indirim1").disabled=false
        document.getElementById("indirim2").disabled=true
        if(document.getElementById("indirim1").checked){tutar.textContent=(odenecekTutar *= 0.75)}
    }
    if(adetvalue==3){
        document.getElementById("indirim1").disabled=true
        document.getElementById("indirim2").disabled=false
        if(document.getElementById("indirim2").checked){tutar.textContent=(odenecekTutar=(odenecekTutar * 2/3))}
    }
    if(adetvalue==4){
        document.getElementById("indirim1").disabled=false
        document.getElementById("indirim2").disabled=true
        if(document.getElementById("indirim1").checked){tutar.textContent=(odenecekTutar *= 0.75)}

    }
    if(adetvalue==5){
        document.getElementById("indirim1").disabled=false
        document.getElementById("indirim2").disabled=true
        if(document.getElementById("indirim1").checked){tutar.textContent=(odenecekTutar *= 0.75)}

    }

}

//! ********************** MALZEME SAYISI ARTTIRMA ********************************

mal1.addEventListener("click", function(e){    if(mal1.checked ==true) {malzemesay ++}
    else {malzemesay--}  sayigor.textContent="Seçilen Malzeme Sayısı:"+(malzemesay)})
mal2.addEventListener("click",  function(e){    if(mal2.checked ==true) {malzemesay ++}
    else{ malzemesay--}  sayigor.textContent="Seçilen Malzeme Sayısı:"+(malzemesay)})
mal3.addEventListener("click",  function(e){    if(mal3.checked ==true) {malzemesay ++}
    else {malzemesay--}  sayigor.textContent="Seçilen Malzeme Sayısı:"+(malzemesay)})
mal4.addEventListener("click",  function(e){    if(mal4.checked ==true) {malzemesay ++}
    else {malzemesay--}  sayigor.textContent="Seçilen Malzeme Sayısı:"+(malzemesay)})
mal5.addEventListener("click",  function(e){    if(mal5.checked ==true) {malzemesay ++}
    else {malzemesay--}  sayigor.textContent="Seçilen Malzeme Sayısı:"+(malzemesay)})
mal6.addEventListener("click",  function(e){    if(mal6.checked ==true) {malzemesay ++}
    else {malzemesay--}  sayigor.textContent="Seçilen Malzeme Sayısı:"+(malzemesay)})
mal7.addEventListener("click",  function(e){    if(mal7.checked ==true) {malzemesay ++}
    else {malzemesay--}  sayigor.textContent="Seçilen Malzeme Sayısı:"+(malzemesay)})
mal8.addEventListener("click", function(e){    if(mal8.checked ==true) {malzemesay ++}
    else {malzemesay--}  sayigor.textContent="Seçilen Malzeme Sayısı:"+(malzemesay)})
mal9.addEventListener("click",  function(e){    if(mal9.checked ==true) {malzemesay ++}
    else {malzemesay--}  sayigor.textContent="Seçilen Malzeme Sayısı:"+(malzemesay)})
mal10.addEventListener("click",  function(e){    if(mal10.checked ==true) {malzemesay ++}
    else {malzemesay--}  sayigor.textContent="Seçilen Malzeme Sayısı:"+(malzemesay)})

        


let siparisBtn =document.getElementById("siparis")
siparisBtn.onclick = function(){
    location.reload()
    alert("Siparişiniz Alındı!!")

}
let tutargor=document.getElementById("tutargor")
tutargor.onclick = function(){
    pizzaBoyutu()
    hamurTuru()
    secilenMalzemeler()
    adetHesap ()
    // indirim()
    // adetKontrol()
    // adetKontrol()
    adetindirimKontrol()

}











































































// boyutSecenek = boyut[boyut.selectedIndex].value;
// odenecekTutar = Number(boyutSecenek);

// !for (i = 0; i < boyut.length; i++) {
//     if(boyut[i].checked) {
//         odenecekTutar = Number(boyut[i].value);
//     }
   
// }
//! console.log(odenecekTutar);

// tur = document.getElementById("hamurTur");
// for (i = 0; i < tur.length; i++) {
//   if (tur[i].checked) {
//     odenecekTutar += Number(tur[i].value);
//   }
// }