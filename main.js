/******************
 * YOUR CODE HERE *
 ******************/
const fizzBuzzSingleNumber = (num) => {
  if (num % 3 === 0 && num % 5 === 0){
    return 'FizzBuzz'
  }else if (num % 3 === 0){
    return 'Fizz'
  }else if (num % 5 === 0){
    return 'Buzz'
  }else {
    return num
  }
}

const getMiddleLetters = (str) => {
  return str.length %2 === 0 ? 
  str[Math.floor(str.length/2) -1] + str[Math.floor(str.length/2)] : 
  str[Math.floor(str.length/2)-1 ] + str[Math.floor(str.length/2)] + str[Math.floor(str.length/2) +1]
}


const getNextLetter = (str) => {
  const aph = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0 ; i < aph.length ; i++){
    if (aph[aph.length -1] === str && aph[i] === str) {
      return aph[0]
    }else if (aph[i] === str) {
      return aph[i+1]
    }
  }
}

const getAverage = (num) => {
  average = 0
  for (const nums of num) {
    average += nums
  }
return average / num.length
}


const triStateAreaOnly = (city) => {
const matching = []
for (const cities of city){
  if (cities.includes('CT') || cities.includes('NJ') || cities.includes('NY')){
    matching.push(cities)
  }
}return matching
}

const removeTrolls = (str) => {
  const aph = 'abcdefghijklmnopqrstuvwxyz'
  const notTroll = []
  for (const post of str){
    for (const eachA of aph)
    if (post.includes(eachA)){
      notTroll.push(post)
      break
    }
  }return notTroll
}


const cipher = (str) => {
let newStr = ''
for (const letter of str){
    newStr+= getNextLetter(letter)
}return newStr
}

const addToMultiDigitNumbers = (addNum , num ) => {
  const newNum = []
  for (const nums of num){
    if (nums > 0 && nums >= 10){
      newNum.push(nums + addNum)
    }else newNum.push(nums)
  }return newNum
}

const hyphenateNames = (str) => {

const reverseWord = (str) => {
  let revWord = ''
  for (let i = str.length-1 ; i>=0 ; i--){
    revWord += str[i]
  }return revWord
}


let spceCount = 0
const newNames = []
let hpnames = ''
    for (const names of str){
      for (let i = names.length-1 ; i >= 0 ;i--){
        if (names[i] === ' ' && spceCount === 0){
          hpnames += '-'
          spceCount ++
        }else {
          hpnames +=names[i]
        }
        if (i === 0){
          newNames.push(reverseWord(hpnames))
          hpnames = ''
          spceCount = 0
        }
      }

    } return newNames
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof fizzBuzzSingleNumber === 'undefined') {
  fizzBuzzSingleNumber = undefined;
}

if (typeof getMiddleLetters === 'undefined') {
  getMiddleLetters = undefined;
}

if (typeof getNextLetter === 'undefined') {
  getNextLetter = undefined;
}

if (typeof getAverage === 'undefined') {
  getAverage = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof hyphenateNames === 'undefined') {
  hyphenateNames = undefined;
}


module.exports = {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
}
