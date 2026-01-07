// Cau lenh re nhanh (if/else)
// 1. if
// if (age < 18) {
//     console.log("Chua du 18 tuoi")
//}
// 2. else
// const age = 18
// if (age < 18) {
//     console.log("Ban chua du 18 tuoi")
// } else if (age === 18) {
//     console.log("Ban vua du 18 tuoi")
// } else {
//     console.log("Ban da du 18 tuoi")
// }

// switch....case
// let day = "Weekend"
// switch (day) {
//     case "Mon":
//         console.log('Hom nay la thu 2')
//         break
//     case "Tue":
//         console.log('Hom nay la thu 3')
//         break
//     case "Wed":
//         console.log('Hom nay la thu 4')
//         break
//     case "Thu":
//         console.log('Hom nay la thu 5')
//         break
//     case "Fri":
//         console.log('Hom nay la thu 6')
//         break
//     case "Sat":
//         console.log('Hom nay la thu 7')
//         break
//     case "Sun":
//         console.log('Hom nay la thu Chu Nhat')
//         break
//     default:
//         console.log("Ngay ko hop le")
// }
//
// let age = 18
// switch (true) {
//     case age < 18:
//         console.log("Ban chua du 18 tuoi")
//         break
//     case age === 18:
//         console.log("Ban vua du 18 tuoi")
//         break
//     case age > 18:
//         console.log("Ban da tren 18 tuoi")
//         break
//     default:
//         console.log("Tuoi ko hop le")
// }

// 5. Ternary operator ( ? : )
// const age = 18
// console.log(age < 18 ? "Ban chua du 18 tuoi" : " Ban da du 18 tuoi")

// Bai 1
// Bai 2
let number = 30
if (number % 2 === 0) {
    console.log("So chan")
} else if (number % 2) {
    console.log("So le")
}
// Bai 3
let age = 16
if (age < 12) {
    console.log("Tre em")
} else if (age >= 12, 25 >= age) {
    console.log("Thanh nien")
} else if (age >= 25, 60 >= age) {
    console.log("Truong thanh")
} else{
    console.log("Nguoi gia")
}