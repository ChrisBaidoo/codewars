//In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
//make as few changes as possible.
//if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s){
    let uppercase = ''
      
      for(let i = 0; i < s.length; i++)
      if (s[i] == s[i].toUpperCase())
      uppercase += s[i]
      
      if(uppercase.length == 3){
        return s.toUpperCase()
      }
      return s.toLowerCase()
    }