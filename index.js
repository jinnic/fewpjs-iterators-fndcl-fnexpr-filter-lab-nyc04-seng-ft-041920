// Code your solution here
/**Write a Function To Case-insensitively Match strings
Write findMatching- This function takes an array of drivers and a string as arguments, 
and returns the matching list of drivers. The function should be case insensitive.
 */
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
  return drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase()
  })
}

/**
 * Write a Function To Partially Match Substrings
Write fuzzyMatch - This function takes an array of drivers and a string as arguments
for querying the array, and returns all drivers whose names begin with the provided letters.
 */
function fuzzyMatch(drivers, string){
  return drivers.filter(driver => {
    return driver.toLowerCase().startsWith(string.toLowerCase())
  })
}

/**
 * Write a Function To Match object Values To a Provided string
Write matchName - This function takes an array of drivers and a string as arguments. 
In this function, each element of the drivers array is a JavaScript object 
that has a property of name. 
The function should return each element whose name property matches the provided string argument.
 */
function matchName(drivers, string){
  return drivers.filter(driver => {
    return driver.name.toLowerCase() === string.toLowerCase()
  })
}