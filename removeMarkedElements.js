//Define a method/function that removes from a given array of integers all the values contained
//in a second array.

Array.prototype.remove_ = (x, y) => x.filter((e) => !y.includes(e));
