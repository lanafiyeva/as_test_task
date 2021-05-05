function GenerateStrArray() {
  const min = 65
  const max = 90
  let length = 5
  let StrArray = []
  let AllLettersArray = []
  let randomIndex

  for (let i = min; i <= max; i++) {
    AllLettersArray.push(String.fromCharCode(i))
  }

  while (length--) {
    randomIndex = Math.floor(Math.random() * AllLettersArray.length)
    StrArray.push(AllLettersArray[randomIndex])
    AllLettersArray.splice(randomIndex, 1)
  }
  return StrArray
}

export default GenerateStrArray
