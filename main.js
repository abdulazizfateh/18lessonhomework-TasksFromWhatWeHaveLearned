// TASK 1 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 1. **salom dunyo** degan so’zni teskari qilib **oynud molas** qaytaruvchi function yozing Yordam: function, console.log, 

// let greet = 'Salom Dunyo';

// const reverseString = (greet) => {
//     let newGreet = '';
//     for (let i = greet.length - 1; i >= 0; i--) {
//         newGreet += greet[i];
//     }
//     return newGreet;
// }

// console.log(reverseString(greet));









// TASK 2 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 2. “1java2script3 5deve6lo4per” shu string orasidagi sonlarni 1 ta arreyga soling, so'zlarni boshqa bir stringa o’zlashtiring va return qiling 

// let str = '1java2script3 5deve6lo4per';

// const seperateTheChracters = (str) => {
//     let numbers = [];
//     let string = '';
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i]) && str[i] != " ") {
//             numbers.push(str[i]);
//         } else {
//             string += str[i];
//         }
//     }
//     return { numbers, string };

// }

// console.log(seperateTheChracters(str));









// TASK 3 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 3. let numbers = [1,-5,2,3,-7]; Arreydagi sonlarni musbatini qo’shib qaytaradigan yani return qiladigan function yozish 

// let numbers = [1, -5, 2, 3, -7];

// const addThePositives = (numbers) => {
//     let sumOfThePositives = 0;
//     for (i in numbers){
//         if (numbers[i] > 0){
//             sumOfThePositives += numbers[i];
//         }
//     }
//     return sumOfThePositives;
// }

// console.log(addThePositives(numbers));









// TASK 4 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 4. arrey ichida objectlar bor userdan input orqali qiymat olib arrey ichidagi object dan shu qiymatga teng bo’lgan obj topish 


// Using array find method 

// let inputValue = prompt('Enter any info of the user');
// let arr = [
//     {
//         name: 'Abdulaziz',
//         id: 23733
//     },
//     {
//         name: 'Muhammadjon',
//         id: 23734
//     }
// ];

// const findTheCorrespondingValue = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let values = Object.values(arr[i]);
//         let findTheValue = values.find((item) => item == inputValue) // item objectni ichidagi asl data type, 
//         // inputValue bu promptda olingani sabab string. Lekin biz strictmas tenglik qo'yganmiz (==). Shunga to'gri chiqyapti
//         if (findTheValue) {
//             return arr[i];
//         }
//     }
//     return 'Error';
// }
// console.log(findTheCorrespondingValue(arr));




// Using inner loops

// let inputValue = prompt('Enter any info of the user');
// let arr = [
//     {
//         name: 'Abdulaziz',
//         id: 23733
//     },
//     {
//         name: 'Muhammadjon',
//         id: 23734
//     }
// ];
// const findTheCorrespondingValue = (arr) => {
//     let response = 'Error';
//     for (let i = 0; i < arr.length; i++) { // i = 0, 1
//         let values = Object.values(arr[i]);
//         for (let k = 0; k < values.length; k++) {
//             if (values[k] == inputValue) {
//                 response = arr[i];
//             }
//         }
//     }
//     return response;
// }
// console.log(findTheCorrespondingValue(arr));









// TASK 5 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 5. Arrey ichidagi juft raqamlarni boshqa bir arrey ga solib qaytaruvchi function yarating 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const seperateTheEven = (arr) => {
//     let evenNums = [];
//     for (i in arr) {
//         if (arr[i] % 2 == 0) {
//             evenNums.push(arr[i]);
//         }
//     }
//     return evenNums;
// }

// console.log(seperateTheEven(arr));









// TASK 6 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 6. Arrey ichidagi objectlarni id ga ko’ra malumotlarini chiqaruvchi function 

// arr = [
//     {
//         firstName: 'Abdulaziz',
//         lastName: 'Ergashev',
//         age: 18,
//         nationality: 'Uzbekistan',
//         id: 19111
//     },
//     {
//         firstname: 'Muhammadjon',
//         lastName: 'Shavkatov',
//         age: 18,
//         nationality: 'Uzbekistan',
//         id: 17917
//     }
// ];

// const takeTheObjectFromId = (arr) => {
//     let inputId = prompt('User ID kiriting');
//     let response = 'There is no user with the entered ID';
//     for (let i = 0; i < arr.length; i++) {
//         if (inputId == arr[i].id) {
//             response = arr[i];
//         }
//     }
//     return response;
// }

// console.log(takeTheObjectFromId(arr));









// TASK 7 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 7. String holda raqamlar beriladi va uni teskari arrayga aylantiruvchi funksiya tuzing.
// Misol uchun: "34567" => [7, 6, 5, 4, 3]


// Using only one functions

// let str = "34567";
// const reverseIntoArr = (str) => {
//     let toArr = str.split('').reverse();
//     let toNum = [];
//     for (let i = 0; i < toArr.length; i++) {
//         toNum.push(Number(toArr[i]));
//     }
//     return toNum;
// }
// console.log(reverseIntoArr(str));




// Using two functions

// let str = "34567";
// const convertToNum = (toArr) => {
//     let toNum = [];
//     for (let i = 0; i < toArr.length; i++) {
//         toNum.push(Number(toArr[i]));
//     }
//     return toNum;
// }

// const reverseIntoArr = (str) => {
//     let toArr = str.split('').reverse();
//     return convertToNum(toArr);
// }
// console.log(reverseIntoArr(str));