//Define a method/function that removes from a given array of integers all the values contained
//in a second array.

Array.prototype.remove_ = function (integer_list, values_list) {
  console.log(
    integer_list.filter((e) => {
      values_list.map((f) => e != f);
    })
  );
};
