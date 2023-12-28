//? kullanıcıdan dikdörtgenin bilgilerini alıcaz ve buna göre işlemler yaptıracağız

//* Öncelikle bunları kullanıcıdan almam lazım uzun ve kısa kenar olmak üzere


//* Burada kullanıcıdan dikdörtgenlerinin bilgilerini aldık 

var kısakenar = window.prompt("Lütfen dikdörtgenin kısa kenarının uzunluğunuz giriniz  :");
var uzunkenar = window.prompt("Lütfen dikdörtgenin uzun kenarının uzunluğunuz giriniz  :");

//* burada alanını hesapladık 
var alan = kısakenar * uzunkenar ;


//* burada çevresini hesapladık 
var cevre = kısakenar*2 + uzunkenar*2;


//* Burada ise ekrana bunları yazdırdık
 
alert("Dikdörtgeninizin alanı : "+ alan);
alert("Dikdörtgeninizin çevresi : "+ cevre);