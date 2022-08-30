/* Write a simple regex to validate a username. Allowed characters are:
lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).*/

function validateUsr(username) {
  const pattern = /([a-z]){4,16}$/   
  console.log(username)
  console.log(pattern.test(username))
  return pattern.test(username)
}

