// 5. Arrey ichidagi juft raqamlarni boshqa bir arrey ga solib qaytaruvchi function yarating 
// 6. Arrey ichidagi objectlarni id ga ko’ra malumotlarini chiqaruvchi function 
// 7. String holda raqamlar beriladi va uni teskari arrayga aylantiruvchi funksiya tuzing. Misol uchun: "34567" => [7, 6, 5, 4, 3]


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
// 4. arrey ichida objectlar bor userda input orqali qiymat olib arrey ichidagi object dan shu qiymatga teng bo’lgan obj topish 

let arr = [
    {
        name: 'Abdulaziz',
        id: 23733
    },
    {
        name: 'Muhammadjon',
        id: 23734
    }
];

