/* 
It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

The function should take one parameter: an object/dict with two or more name-value pairs which represent the 
members of the group and the amount spent by each.
The function should return an object/dict with the same names, showing how much money the members should pay or receive.

Further points:

The values should be positive numbers if the person should receive money from the group, negative numbers if 
they owe money to the group.
If value is a decimal, round to two decimal places.

*/
function splitTheBill(x) {
  var average = 0;
  var count = 0;

  for (item in x) {
    average += x[item];
    count++;
  }
  average = average / count;

  for (item in x) {
    x[item] = Math.round((x[item] - average) * 100) / 100;
  }

  return x;
}
