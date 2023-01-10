const file_tel =
  "12 4873279 ITS-EASY 888-4567 3-10-10-10 888-GLOP TUT-GLOP 967-11-11 310-GINO F101010 888-1200 -4-8-7-3-2-7-9- 487-3279";

const mapTelDig = new Map([
  ["A", 2],
  ["B", 2],
  ["C", 2],
  ["D", 3],
  ["E", 3],
  ["F", 3],
  ["G", 4],
  ["H", 4],
  ["I", 4],
  ["J", 5],
  ["K", 5],
  ["L", 5],
  ["M", 6],
  ["N", 6],
  ["O", 6],
  ["P", 7],
  ["R", 7],
  ["S", 7],
  ["T", 8],
  ["U", 8],
  ["V", 8],
  ["W", 9],
  ["X", 9],
  ["Y", 9],
]);

const phoneNumbersObject = () => {
  const spliter = file_tel.split(" ");

  const numberOfItems = spliter[0];
  spliter.shift(0);

  return {
    numberOfItems,
    numbers: spliter,
  };
};

const removeHyphenFromPhoneNumbers = (phoneNumbers) =>
  phoneNumbers.map((value) => value.replaceAll("-", ""));
const valid = (phoneNumbersWithoutHyphen) =>
  phoneNumbersWithoutHyphen.filter(
    (value) =>
      value.length === 7 && !value.includes("Q") && !value.includes("Z")
  );

const isNumber = (value) => !isNaN(value);

const singlePhoneNumberToStandardForm = (phoneNumber) => {
  let newValue = "";
  for (let value of phoneNumber) {
    newValue =
      newValue +
      (!isNumber(value) && mapTelDig.has(value) ? mapTelDig.get(value) : value);
  }
  return newValue;
};

const PhoneNumbersToStandardForm = (PhoneNumbers) =>
  PhoneNumbers.map((value) =>
    !isNumber(value) ? singlePhoneNumberToStandardForm(value) : value
  );

const standardFormPhoneNumbers = () => {
  const phoneNumbersWithoutHyphen = removeHyphenFromPhoneNumbers(
    phoneNumbersObject().numbers
  );
  const validPhoneNumbers = valid(phoneNumbersWithoutHyphen);

  return PhoneNumbersToStandardForm(validPhoneNumbers);
};

const uniquePhoneNumbersCount = (phoneNumbers) => {
  const orderNumbers = phoneNumbers.sort();

  const uniqueCount = {};
  orderNumbers.forEach(
    (element) => (uniqueCount[element] = (uniqueCount[element] || 0) + 1)
  );
  return uniqueCount;
};

const checkDuplicates = (phoneNumbers) => {
  const uniquePhoneNumbers = uniquePhoneNumbersCount(phoneNumbers);

  let duplicates = "";
  for (const element in uniquePhoneNumbers) {
    if (uniquePhoneNumbers[element] > 1) {
      duplicates = duplicates + `${element} ${uniquePhoneNumbers[element]}\n`;
    }
  }
  return duplicates;
};

// print the result
const duplicates = checkDuplicates(standardFormPhoneNumbers());
console.log(duplicates);
