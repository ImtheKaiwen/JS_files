// burada dizilerdeki elemanlardan yararlanacağız 
// hemen bir dizi oluşturalım ve içerisine random değerler atayalım 


// dizimizi oluşturduk 
var numbers = [];

//* dizimizin elemanlarını teker teker atadık toplam 10 tane aldık 
for(let i=0; i<=9; i++){
    var a = prompt("Lütfen bir sayı giriniz :");
    numbers[i]= a;
}

//* max ve min değerlerimize girdiğimiz sayılardan ilkinia tadık ona göre karşılaştıracak 
var max = numbers[0];
var min = numbers[0];


//* burada da dizimizin elemanlarını teker teker gezerek bunların max ve min değerlerinden büyük veya 
//* küçük olması durumlarına göre karşılaştırma yaparak max ve min değerlerimizi deiştirdik 
for(let i=0; i<=9; i++){
    if(numbers[i]>max){
        max= numbers[i];
       
    }
    else if(numbers[i]<min){
        min = numbers[i];
    }
}


//* En son da bunları ekrana yazdırdık
 
alert("Girdiklerinizden en büyük olan sayı : "+ max);
alert("Girdiklerinizden en küçük olans ayı : "+ min);
    
