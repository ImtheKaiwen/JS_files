//* welcome to JS lessons 

 // console.log("Merhabalar") konsol ile birlikte çıktı verme bu ekranda gözükmez 

 //* Document ile çıktı verme 

    //?  document.write("Merhaba <br>") bu şekilde yaptığınızda bunlar ekranda gözükürler 
    //?  document.write("Ben kerem")

    console.clear(); //*konsolu temizlemenize yarar 

    alert("Merhabalar :)");
    alert("Merhabalar :)");
    alert("Merhabalar :)");
    alert("Merhabalar :)");
    alert("Merhabalar :)");

    var a = 5;
    let b=4;
    const c=7;
    console.log("a"); //bu şekilde yapılabilir
    console.log("b");
    console.log("c");
    for(let i=0; i<=4; i++){
        console.log(i);
    }

    //? anlayacağınız arkadaşlar normal bir c# dilindeki gibi bir kodlama mantığına sahip sadece
    //? değişken tanımlamalarınızda var let ve const adında 3 tane değişken kullanabiliyorsunuz

    /*
        ? Ayrıca bu şekilde yaparak da listenize yorum satırları ekleyerek yorumlarınızı renkli
        ? yapabilirsiniz  ... 

        * Şimdi ise daha parlak olan yeşil rengi ile yazıyorum ama burada bilmeni gerek şey şudur ki 
        * Burada toplu bir şekilde yorum yapabilir ve bunları ekrana yazdırabilirim 
        * ve direk satır sonuna geldiğinizde enter a basarsanız en son hangi renkte yazıyorsanız 
        * sizi o renkte yazmaya devam ettirecek şekilde yeni satır açar ve cümlelelerinizin bölünmesini
        * engeller
        
        ! Şimdi gelelim var let ve const arasındaki farka
        ! var arkadaşlar function scope bir değşiken tanımlamadır ama en dışta 
        !tanımlarsanız burada global scope olur ve her yerden erişim sağlayabilirsiniz

        ?ama bunun size bir zararı olur o da şudur ram belleğinizde çok fazla yer kaplar 
        ?Bundan dolayı da çok satırlı kodlarda programınızda verimsel olarak bazı performans
        ? düşmeleri yaşamanıza neden olur

        *E peki şimdi biz sizlere dedik ki buaradakiler var let ve const türünde dğeişkenler
        *vardan da bahsettiğimize göre şimdi ne yapmamız gerek ona bir bakalım
        * let ve const arasındaki farklara bakalım arkadaşlar let ve const ikisi de block scope
        * elementlerdir bundan dolayı da bunlara yalnızca bloklar içerisinden erişim sağlayabilirsiniz 
        * ve aralarındaki farka gelicek olursak da bunlardan const sadece 1 kez değer ataması yapılırken
        * diğerine aynı isimde değişken tanımlayabilirsiniz const zaten sabit anlamına gelir 
        * buradan da aklınızda tutabilirsiniz 
        * at the end guys the all of things that created for JavaScript is lie 
        



        


    */ 
    function merhaba(){
        console.log("Merhabalar");
    }
