/*
    Dairenin alanını ve çevresin hesaplamamız için bizim pi adlı sabit bir değişkene ihtiyacımız var 

*/

const pi = 3.14; //pi sayımızı burada atadık 

//kullanıcıdan daire hakkında bilgi almamız lazım ve bunları tutmamız lazım

let r = window.prompt("Lütfen dairenin yarı çapını giriniz :");

//yarı çapını aldıktan sonra bunun alanını hesaplatmak için pr**2 kullanmamız lazım

let area = pi*(r**2);  //* burada alanını hesaplattık şimdi çevresini hesaplatalım 

let cevre = 2*pi*r; //*burada da çevresini hesaplamış olduk 

//? şimdi bunları ekrana yazdırmamız lazım arkadaşlar o yüzden bunu hemen ekrana verelim

alert("Dairenizin alanı : "+ area);
alert("Dairenizin çevresi : "+ cevre);



