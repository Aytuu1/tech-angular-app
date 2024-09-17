// Temel Tipler

// 1-) Boolean
let isLogin:boolean=false;
console.log("Login mi ? " + isLogin);

// 2-) Number
let dataValue1:number=44;
console.log("dataValue: " + dataValue1);

// 3-) string
let dataValue2:string=" Deneme";
console.log("dataValue2 " + dataValue2);

// //4-) Array
let dataValue3:[]=[1,2,3,4,"Malatya","İstanbul","Ankara"];
console.log(dataValue3);

// 5-) array
let dataValue4:number[]=[1,2,3,4];
console.log(dataValue4[0]);

let dataValue5:Array<string>=["ali","mehmet","serpil"];
console.log(dataValue5);

for (let i = 0; i < dataValue4.length; i++)
{
   console.log(dataValue4[i]);
    
}

//6-) Tuple: Dizide belirlediğimiz sırada data yaz
let tupleValue:[string,number];
tupleValue=["Hamit",44];
console.log(tupleValue);

// 7-) Any: Herhangi bir türdeki verileri kabul eder
let anyValue:any=99;
console.log(anyValue);

anyValue="Ben bir stringim";
console.log(anyValue);

anyValue=true;
console.log(anyValue);

// 8-) Union Type: Birden fazla tür eklemek istediğimizde
let unionTypeValue:string|number;
unionTypeValue="ts ögreniyorum";
console.log(unionTypeValue);
unionTypeValue=44;
console.log(unionTypeValue);

//9-) Void : Fonksiyon dönüş değeri olmasın.
function normalFnc():void{
   console.log("Normal Fonksiyon");
}
normalFnc();

// 10-) Enum: Sabit listeler
enum WeekDay{
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday,
   Sunday
}
let enumValue:WeekDay=WeekDay.Monday;
console.log("Enum value:" + enumValue);

// 11-) Never: Hiçbir değerin olmayacağını gösterir.

function error(message:string):never{
   throw new Error(message);
}
// 12-) Değer Döndüren Fonksiyon

function sum(data1:number,data2:number){
   return data1 + data2;
}
const data =sum(3,4);
console.log(data);

function sumRest(...sayilar:number[]):number{
   return sayilar.reduce((toplam,sayi)=>toplam + sayi,0);
}
const resultRest = sumRest(1,2,3,4);
console.log(resultRest);

// 13-) Conditional
const numValue= 15;
let result =(numValue>0)?"Positive":"Negative";
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

class Car {
   //Veriable
   private carPrice:number;
   private carVersion:string;
   private carModel:string;

   constructor(carprice:number,carversion:string,carmodel:string) {
      this.carPrice=carprice;
      this.carVersion=carversion;
      this.carModel=carmodel;
   }
}


