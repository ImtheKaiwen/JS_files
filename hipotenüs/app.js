// doksan derece olan bir üçgenin hipotenüsünün hesaplanması için diğer iki kenarının bilinmesi gerekmektedir
/*
    ?Bundan dolayı da öncelikle kullanıcıdan iki tane değer almam lazım 
*/
let a = window.prompt("Lütfen birinci kenarın uzunluğunuz giriniz :");
let b = window.prompt("Lütf(en ikinci kenarın uzunluğunuz giriniz :");
let square = (a**2)+(b**2);
let hipotenus = Math.sqrt(square);
console.log("Hipotenüsün uzunluğu : "+ hipotenus);