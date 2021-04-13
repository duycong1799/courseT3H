
// Bai1
// let demo = 0
// while(demo<10){
//     let count = 0;
//     let input = prompt("Nhap so bat ki de kiem tra");
//     if (input < 2) {
//         console.log(input+' Be hon 2 Khong phai nguyen to');
//     } else {
//         for (let i = 2; i <= Math.sqrt(input); i++) {
//             if (input % i == 0) {
//                 count++;
//             } 
//         }
//     }
//     if(count==0){
//         console.log(input+' La so nguyen to');
//     }else{
//         console.log(input+' Khong phai so nguyen to');
//     }
//     demo++;
// }

// Bai 8
// let n=0;
// while(n<3){
// let check=true;
// let input = prompt('Nhap so bat ki de kiem tra');
// while(input>0){
//     // consol123e.log('input', input);
//     let layDu = input%10;

//     if(layDu%2==0){
//         check = false;
//         break;
//     }
// }else if(layDu%2!=0){12341234
//     check = true;
// }
// input/=10;
// console.log('input', input);
// }
// if(check==true){
//     console.log('YES');
// }else if(check==false){
//     console.log('NO');
// }

//     n++;
// }

//Bai 9

// let randomNum = prompt('Nhap so bat ki');
// let rever = '';
// let checkSymmetrical = function (randomNum) {
//     let check;
//     for (let i = randomNum.length - 1; i >= 0; --i) {

//         rever += randomNum[i];
//     }
//     console.log(rever);

//     if (randomNum == rever) {
//         check = 'La so dao nguoc';
        

//     } else {
//         check = 'Khong phai La so dao nguoc';
//     }    
//     return check;
// };

// console.log(checkSymmetrical(randomNum));

// Bai 10

// for(let i=2; i<=9;i++){
//     for(j=1;j<=10;j++){
//         console.log(i + 'x' + j + '='+i*j)
//     }
// }


// let input = prompt("Nhap so bat ki de kiem tra");
// var checkPrime = function(input){
//     let check = true;
//     if (input < 2) {
//         return false;
//     } else {
//         for (let i = 2; i <= Math.sqrt(input); i++) {
//                 if (input % i ==0) {
//                     return false;
//                 } 
//         }
//         return true;
//     }

// };
// let check = checkPrime(input);
// if(check){
//     console.log('La so nt');
// }else{
//     console.log('Khong phai nt');
// }

//Bai 11

// let input = prompt('Nhap 1 chuoi');

// var countSpace = function (input) {
//     let count = 0;
//     for (let i = 0; i <= input.length; i++) {
//         if (input[i] == ' ') {
//             count++;
//         }
//     }
//     return count;
// };

// let nofi = countSpace(input);
// console.log('So khoang trang trong chuoi : '+ nofi);


//Bai 12

// let input = prompt('Nhap 1 chuoi');

// var countSpace = function (input) {
//      return input.replace(/ /g,'');
// };

// console.log(countSpace(input));

//Bai 13

// let input = prompt("Nhap chuoi bat ki");

// let reverse = function(input){
//     let myString ='';
//     for(let i=input.length-1; i>0;i--){
//         myString+=input[i];
//     }
//     return myString;
// };
// console.log(reverse(input));

 //De quy
//  let total = function(input){
//     return 
//  }

//  console.log('Total 1-n : ',total(10) );


//Bai 14

// let s1 = "This is a beautiful day";
// let s2 = "is"

// let check = function(s1,s2){
//     return s1.match(s2);
// };

// console.log(check(s1,s2));

//Bai 16

// let link = "https://www.facebook.com/ngothucdat";

// function getName(link) {
//     for (let i = 0; i < link.length; i++) {
//         if (link.slice(0, i) === "https://www.facebook.com/") {
//             link = link.slice(i);
//         }
//     }
//     return link;
// }

// console.log(getName(link));

//Bai17

// function getMax(a, b, c) {
//     let max = a;

//     if (b > max) {
//         max = b;
//     } else if (c > max) {
//         max = c;
//     }

//     return max;
// }

// function getMin(a, b, c) {
//     let min = a;

//     if (b < min) {
//         min = b;
//     } else if (c < min) {
//         min = c;
//     }

//     return min;
// }

// console.log(getMax(3, 5, 2));
// console.log(getMin(3, 5, 2)); 

//Bai 19

// let n = 10;
// function getTotal(n) {
//     if (n === 0) {
//         return 0;
//     }
//     return n + getTotal(n - 1);
// }
// console.log(getTotal(n)); 

// let point =[5,6,7,8,10];
//  let checkPoint = point.indexOf(10);
//  console.log(checkPoint);

//  let students = [
//      {
//          name:"Cong",
//          mark:0
//      },
//      {
//         name:"Manh Buoi",
//         mark:1
//     },
//     {
//         name:"Thai",
//         mark:2
//     }
//  ]

// let JSStudent = [
// {
//     name:"Le Minh",
//     mark:9
// },
// {
//     name:"Vo Minh",
//     mark:10
// },
// {
//     name:"Tuan Hai",
//     mark:11
// },
// {
//     name:"Nguyen Van A",
//     mark:12
// },
// {
//     name:"Nguyen Van A",
//     mark:12
// }
// ];
// let student10MArks = 
// let check = JSStudent.filter()


//Bai 21 -> Done
// var arr = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] ;
// var output = function(thamso){
//     total = 0;
//     for(var i=0; i<arr.length;i++){
//         total+=arr[i];
//     }
//     return total;
// }
// console.log('Day la ket qua : '+output(arr));

//Bai 22 -> Done
// var arr = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
// var numberMax = function(thamso){
//     var numMax = arr[0];
//     for(var i=1;i<arr.length;i++){
//         if(arr[i]>numMax){
//             numMax = arr[i];
//         }
//     }
//     return numMax;
// } 
// var numberMin = function(thamso){
//     var numMin = arr[0];
//     for(var i=1;i<arr.length;i++){
//         if(arr[i]<numMin){
//             numMin = arr[i];
//         }
//     }
//     return numMin;
// }
// var average = function(numberMax,numberMin){
//     var tb = (numberMax+numberMin)/2;
//     return tb;
// } 
// console.log('Max : ' + numberMax(arr));
// console.log('Min : ' + numberMin(arr));
// console.log('Average : ' + average(numberMax(arr),numberMin(arr)));
//Bai 23 -> Done
// var arr = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] 
// var checkTimesappear = function(arr){
//     var count = 0;
//     var Max=2;    
//     for(var i=0;i<arr.length;i++){
//         for(var j=i;j<arr.length;j++){
//             if(arr[i]==arr[j])
//             count++;
//         }
//         if(count>Max){
//             var getValue = arr[i];
//         }
//         count = 0;
//     }
//     return getValue;

// }
// console.log('So co so lan xuat hien nhieu nhat : '+ checkTimesappear(arr));

//Bai 24 -> Done
// var a = [1,2,3,2,3,4,6,7];
// var b = [];
// function checkPrime(num){
//     var check = true;
//     if (num < 2) {
//         check = false;
//     } else {
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i == 0) {
//                 check = false;
//                 break;
//             }
//         }
//     }
//     if(check==true){
//         return num;
//     }
// }
// var check = a.filter(function(item){
//     return checkPrime(item);
// });
// console.log(check)

//Bai 25 -> Done
// var a = [1,2,3,2,3,4,6,7];
// var b = [];
// for(let i=0;i<a.length;i++){
//     let tmp = a[i]*a[i];
//     b.push(tmp);
//     // console.log(b);
// }
// console.log(b);

//Bai 28
// students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// let studentDo = students.filter(function(student) {
//     return student.lastName.split(' ')[0].indexOf('Do') != -1;    
// })
// console.log('học sinh có họ Do: ', studentDo);


//map, reduce, sort, concat

// Vi du map : tra ve 1 mang 
let students =[
    {
        firstName: 'Nguyen Van ',
        lastName : 'A',
        mark:'9'
    },
    {
        firstName: 'Nguyen Thi',
        lastName : 'B',
        mark:'9'
    },
    {
        firstName: 'Nguyen Van ',
        lastName : 'C',
        mark:'9'
    }

];
// in mot danh sach voi fullname
// let studentFullName = students.map((student)=>{
//     return `${student.firstName} ${student.lastName}`
// });
// console.log(studentFullName);
// in mot danh sach day du thuoc tinh va them attribute fullName
// let studentFullName = students.map((student)=>{
//     student.fullName = `${student.firstName} ${student.lastName}`;
//     return student
// });
// console.log(studentFullName);

// Vi du reduce 
//reduce(item,index,arr)
// let numbers  = [1,2,3,4,6];

//a = 0 : gia tri khoi tao bang 0
//b = 1 : gia tri tiep theo 
// a moi = a + b = 1
// b = 2
//neu khong co gia tri khoi tao thi se nhan phan tu dau lam gia tri kho tao
// let totalOdd = numbers.reduce((a,b,index)=>{
//     if(b%2!=0){
//         return a+b;
//     }else if(b%2==0){
//         return a;
//     }
// },0);
// console.log(totalOdd);

//sort : Sap xep

let numbers  = [1,22,3,44,6];

// let sortNumbers = numbers.sort();

// let sortNumbers = numbers.sort((number1,number2)=>{
//     return number1-number2;
// });
// console.log(sortNumbers);

//sort students

students.push({
    firstName: "tran thi",
    lastName: "D",
    mark:5
});
// console.log(students)
// let sortMarkStudent = numbers.sort((student1,student2)=>{
//     if(student1.mark > student2.mark){
//         return 1;
//     }else if(student1.mark < student2.mark){
//         return -1;
//     }else{
//         0;
//     }
// });
// console.log(sortMarkStudent);


// let sortFirstNameStudent = students.sort((student1,student2)=>{
//     return student1.firstName.localeCompare(student2.firstName) ;

// });
// console.log(sortFirstNameStudent);

// let sortLengthFirstNameStudent = students.sort((student1,student2)=>{
//     return student2.firstName.length - student1.firstName.length;

// });
// console.log(sortLengthFirstNameStudent);

//concat
console.log(numbers.concat(students)) // noi 2 mang

// Object - property, method (OOP)
let car = {
    name: 'Fiat',
    color:'white',
    weigth:850,
    start:function(){
        console.log(`${this.name} Starting`);
    }
}
console.log(car.name) ; // lay gia tri thuoc tinh name
console.log(car["name"]) ; // lay gia tri thuoc tinh name

function getValueByProperty(prop){
    console.log("prop: ", prop);
    return car[prop];
}
console.log(getValueByProperty("name"))
console.log(getValueByProperty("color"))

car.model = "2020"; // them property model va gan gia tri
console.log(car);

let start = car.start.bind(car);
car.start();
start();
