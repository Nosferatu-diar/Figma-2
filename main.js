// --- Exercise-11 ---

// let num = 55

// if (50 >= num <= 100) {
// 	console.log('The number is between 50 and 100')
// } else {
// 	console.log('The number is not between 50 and 100')
// }

//  --- Exercise-12 ---

// var num = 4.7
// res = Math.floor(num)
// res = Math.ceil(num)
// console.log(res);

//  --- Exercise-13 ---

// let rand = Math.floor(Math.random() * 100) + 1
// if (rand % 2 === 0) {
// 	console.log("Juft => " + rand)
// } else {
// 	console.log("Toq => "+rand)
// }

//  --- Exercise-14 --- L = 2 * 3.14 * r  D = 2 * r

// let radius = Math.floor(Math.random() * 10) + 1
// let L = Math.floor(2 * Math.PI * radius)
// let D = radius * 2
// console.log('Radius: ' + D + '\nUzunlig: ' + L)

//  --- Exercise-15 ---

// let num1 = 2
// let num2 = 3
// let num3 = 4
// let num4 = 5

// way - 1
// if (num1 > num2 && num1 > num3 && num1 > num4) {
// 	console.log('Eng Katta Son: ' + num1)
// } else if (num2 > num1 && num2 > num3 && num2 > num4) {
// 	console.log('Eng Katta Son: ' + num2)
// } else if (num3 > num1 && num3 > num2 && num3 > num4) {
// 	console.log('Eng Katta Son: ' + num3)
// } else {
// 	console.log('Eng Katta Son: ' + num4)
// }

// way-2
// let big = num1
// if (num2 > big) {
// 	big = num2
// }
// if (num3 > big) {
// 	big = num3
// }
// if (num4 > big) {
// 	big = num4
// }
// console.log(big);

// way-3
// let res = Math.max(num1, num2, num3, num4)
// console.log(res);

//  --- Exercise-16 ---

// let num1 = Math.floor(Math.random() * 10) + 1
// let num2 = Math.floor(Math.random() * 10) + 1
// let res = 0
// if (num1 > num2) {
// 	res = num1 * num2
// 	console.log('Kop..')
// } else {
// 	res = Math.floor(num1 / num2)
// 	console.log('Bol..')
// }
// console.log(res)

//  --- Exercise-17 ---

// let num = Math.floor(Math.random() * 100) + 1
// let res = Math.sqrt(num)
// // it gives us true or false
// if (Number.isInteger(res)) {
// 	console.log('Butun ildiz: ' + res)
// } else {
// 	console.log('Butun emas: ' + res)
// }

//  --- Exercise-18 ---

// let min = 3
// let max = 7
// let loop = Math.floor(Math.random() * (max - min + 1)) + min
// let rand = 0
// let arr = []
// for (let i = 0; i < loop; ++i) {
// 	rand = Math.floor(Math.random() * 50) + 1
// 	arr.push(rand)
// 	rand = 0
// }
// console.log(arr)

// let sum = 0
// let count = 0
// for (let i = 0; i < arr.length; ++i) {
// 	sum += arr[i]
// 	count++
// }
// let result =Math.floor( sum / count)
// console.log(result);

//  --- Exercise-19 --- Masala sharti chunarsiz !!!???

// let rand1 = Math.floor(Math.random() * 100) + 1
// let rand2 = Math.floor(Math.random() * 100) + 1

// if (rund1 > rund2) {
// 	console.log('Katta son yungan: ' + rand1)
// } else {
// 	console.log('Katta son yungan: ' + rand2)
// }

//  --- Exercise-(unknown)---

// let num1 = 10 // Ex => 12 14.5

// if (Number.isInteger(num1)) {
// 	if (num1 % 5 == 0) {
// 		console.log(num1 * 10)
// 	} else {
// 		console.log('5-ga bolinmaydi')
// 	}
// } else {
// 	console.log('Butun son emas')
// }

//  --- Exercise-(ukcnown) ---

// let num = 10
// let res = 0
// if (num % 2 == 0) {
// 	res = Math.pow(num, 2)
// 	console.log(res)
// } else {
// 	res = num % 3
// 	console.log("Qoldiq = "+res)
// }
