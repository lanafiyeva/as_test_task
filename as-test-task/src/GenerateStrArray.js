function GenerateStrArray() {
  var min = 65
  var max = 90
  var length = 5
  var StrArray = new Array(length)

  while (length--) {
    StrArray[length] = String.fromCharCode(
      Math.floor(Math.random() * (max - min)) + min
    )
  }

  return StrArray
}

export default GenerateStrArray
