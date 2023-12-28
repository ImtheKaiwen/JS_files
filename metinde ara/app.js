// şimdi metin içerisinde arama moduna girelim 
// girilen bir metinin içerisinde o harf var mı diye bir bakalım 

// kullanıcıdan bir metin alalım 

var metin = window.prompt("Lütfen bir metin giriniz :");

//metni aldıktan sonra mesela a harfine var mı diye bakalım 
debugger ;
var asay = 0;
 for(let i=0; i<= metin.length-1; i++){
    if(metin[i]=="a"){
        asay++;
    }
 }

alert("Metninizin içerisindeki a sayısı : "+ asay);