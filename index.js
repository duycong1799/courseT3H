
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

let randomNum = prompt('Nhap so bat ki');
let rever = '';
let checkSymmetrical = function (randomNum) {
    let check;
    for (let i = randomNum.length - 1; i >= 0; --i) {

        rever += randomNum[i];
    }
    console.log(rever);

    if (randomNum == rever) {
        check = 'La so dao nguoc';
        

    } else {
        check = 'Khong phai La so dao nguoc';
    }    
    return check;
};

console.log(checkSymmetrical(randomNum));

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

