const cleanUserInput = userInput => {
  Object.keys(userInput).forEach(key => {
    if (userInput[key].trim() === "") {
      userInput[key] = null
    }
  })
  return userInput
}

export default cleanUserInput
