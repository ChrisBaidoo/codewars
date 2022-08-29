/* Write a simple regex to validate a username. Allowed characters are:
lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).*/

function validateUsr(username) {
  const pattern = /^[A-Za-z0-9_]*$/
  console.log(username)
  console.log(pattern.test(username))
  return pattern.test(username)

}

