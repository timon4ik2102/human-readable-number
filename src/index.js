const numbers = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
}


module.exports = function toReadable(num) {
  let str = ''
  let numStr = String(num);
  let tens = +numStr.slice(1)
  if (num < 20) {
    str += numbers[num]
  } else if (num >= 20 && num < 100) {
    if (num % 10 === 0) {
      str += numbers[num]
    } else {
      str += `${numbers[numStr[0] + 0]} ${numbers[numStr[1]]}`
    }
  } else if (num >= 100 && num <= 999) {
    if (num % 100 === 0) {
      str += `${numbers[numStr[0]]} hundred`
    }
    else if (num * 10 % 100 === 0) {
      str += `${numbers[numStr[0]]} hundred ${numbers[numStr[1] + 0]}`
    }
    else if (tens <= 20) {
      str += `${numbers[numStr[0]]} hundred ${numbers[tens]}`
    }
    else {
      str += `${numbers[numStr[0]]} hundred ${numbers[numStr[1] + 0]} ${numbers[numStr[2]]}`
    }
  }
  return str
}

