// Temel Tipler
// 1-) Boolean
var isLogin = false;
console.log("Login mi ? " + isLogin);
// 2-) Number
var dataValue1 = 44;
console.log("dataValue: " + dataValue1);
// 3-) string
var dataValue2 = " Deneme";
console.log("dataValue2 " + dataValue2);
// //4-) Array
var dataValue3 = [1, 2, 3, 4, "Malatya", "İstanbul", "Ankara"];
console.log(dataValue3);
// 5-) array
var dataValue4 = [1, 2, 3, 4];
console.log(dataValue4[0]);
var dataValue5 = ["ali", "mehmet", "serpil"];
console.log(dataValue5);
for (var i = 0; i < dataValue4.length; i++) {
    console.log(dataValue4[i]);
}
//6-) Tuple: Dizide belirlediğimiz sırada data yaz
var tupleValue;
tupleValue = ["Hamit", 44];
console.log(tupleValue);
// 7-) Any: Herhangi bir türdeki verileri kabul eder
var anyValue = 99;
console.log(anyValue);
anyValue = "Ben bir stringim";
console.log(anyValue);
anyValue = true;
console.log(anyValue);
