// burada sayı asal mı değil mi diye kontrol etmemiz gerkiyor bunu da asal sayıların özelliklerinden 
// yararlanarak yapacağız 

//* Öncelikle kullanıcıdan sayımızı alalım ve bu asal mı değil mi diye kontrol edelim


//Burada sayımızı kullanıcıdan aldık ve sayi adli değişkene atadık 
let sayi = window.prompt("Lütfen bir sayı giriniz :");


//* şimdi de bu sayı asal mı değil mi onu kontrol etmek için bir for döngüsü kullanacağım 

//? bildiğiniz üzere asal sayılar 1e ve kendine bölünür sadece yani sadece iki tane böleni olur

//* ozaman ben 1 den o sayıya kadar bir döngü açarsam burada yalnızca iki tane böleni olacak anlamına gelir 


var bolen = 0; //* bölen sayısını burada 0 atadık 

for(let i=1; i<=sayi ; i++){
    //şimdi burada sayı i ye bölünüyorsa bölen sayısını bir arttırmam lazım

    if(sayi%i==0){ //*sayının i ye bölümünden kalan 0 ise dedim
        bolen++;
    }
}

//* döngü bittikten sonra ise bu bolen sayımız iki mi diye kontrol etmemiz gerkiyor 

if(bolen==2){
    alert("sayınız asal sayıdır ");
}
else{
    alert("sayınız asal sayı değildir !");
}
