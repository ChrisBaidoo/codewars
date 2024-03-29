//Usually when you buy something, you're asked whether your credit card number,
//phone number or answer to your most secret question is still correct.
//However, since someone could look over your shoulder, you don't want that
//shown on your screen. Instead, we mask it.

//Your task is to write a function maskify, which changes all but the last
//four characters into '#'.

function maskify(cc) {
  let array = Array.from(cc);

  for (let i = 0; i < array.length - 4; i++) {
    array[i] = "#";
  }

  return array.join("");
}

// Altenative solution
function maskify(cc) {
  return cc.replace(/(?=.{5})./g, "#");
}
