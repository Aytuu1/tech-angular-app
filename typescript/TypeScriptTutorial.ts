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
