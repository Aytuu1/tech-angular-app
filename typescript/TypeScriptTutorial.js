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
// 8-) Union Type: Birden fazla tür eklemek istediğimizde
var unionTypeValue;
unionTypeValue = "ts ögreniyorum";
console.log(unionTypeValue);
unionTypeValue = 44;
console.log(unionTypeValue);
//9-) Void : Fonksiyon dönüş değeri olmasın.
function normalFnc() {
    console.log("Normal Fonksiyon");
}
normalFnc();
// 10-) Enum: Sabit listeler
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 0] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 1] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 2] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 3] = "Thursday";
    WeekDay[WeekDay["Friday"] = 4] = "Friday";
    WeekDay[WeekDay["Saturday"] = 5] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 6] = "Sunday";
})(WeekDay || (WeekDay = {}));
var enumValue = WeekDay.Monday;
console.log("Enum value:" + enumValue);
// 11-) Never: Hiçbir değerin olmayacağını gösterir.
function error(message) {
    throw new Error(message);
}
// 12-) Değer Döndüren Fonksiyon
function sum(data1, data2) {
    return data1 + data2;
}
var data = sum(3, 4);
console.log(data);
function sumRest() {
    var sayilar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sayilar[_i] = arguments[_i];
    }
    return sayilar.reduce(function (toplam, sayi) { return toplam + sayi; }, 0);
}
var resultRest = sumRest(1, 2, 3, 4);
console.log(resultRest);
// 13-) Conditional
var numValue = 15;
var result = (numValue > 0) ? "Positive" : "Negative";
console.log(result);
// 14-CLASS
// class Computer{
//    //Veriable
//    public cpu:number;
//    private mainboard:string;
//    protected isNewVersion:boolean;
//    // constructor
//    constructor(cpu:number,mainboard:string,isNewVersion:boolean){
//       this.cpu=cpu;
//       this.mainboard=mainboard;
//       this.isNewVersion=isNewVersion;
//    }
//    computerAllInformation():void{
//       console.log(`CPU:${this.cpu}, Mainboard:${this.mainboard}, Version:${this.isNewVersion}`);
//    }
//    // Getter and Setter
//    public get getCpu(){
//       return this.cpu;
//    }
//    public set setCpu(cpu:number){
//        this.cpu=cpu;
//    }
//    public get getMainBoard(){
//       return this.mainboard;
//    }
//    public set setMainBoard(mainboard:string){
//        this.mainboard=mainboard;
//    }
//    public get getIsNewVersion(){
//       return this.isNewVersion;
//    }
//    public set setIsNewVersion(isnewVersion:boolean){
//        this.isNewVersion=this.isNewVersion;
//    }
// }
// const computerInstance = new Computer(5,"mainboardxkl",true);
// console.log(computerInstance.computerAllInformation());
// 15-) Computer2 : GENERICS YAPILAR
// class Computer2<T>{
//    //Veriable
//    public cpu:T;
//    public mainboard:T;
//    public isNewVersion:T; 
// }
// const computerValue = new Computer2<string>();
// computerValue.cpu="generics CPU 4.5GHZ";
// computerValue.mainboard="generics Mainboard 4.5GHZ";
// computerValue.isNewVersion="generics 14 Gen";
// console.log(computerValue.cpu);
// console.log(computerValue.mainboard);
// console.log(computerValue.isNewVersion);
// Abstract 
var Car = /** @class */ (function () {
    function Car(carprice, carversion, carmodel) {
        this.carPrice = carprice;
        this.carVersion = carversion;
        this.carModel = carmodel;
    }
    return Car;
}());
