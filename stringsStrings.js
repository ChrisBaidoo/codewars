/*
Background
Oh no, there were some problems with your computer and now you cannot convert any data type to strings!

Task
The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive 
toString() for the following data types.
Boolean, Number, Array
*/

Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString = function () {
  return JSON.stringify(this);
};
