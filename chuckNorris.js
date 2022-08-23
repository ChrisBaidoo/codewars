function onePunch(items) {
  if (typeof items !== "string" || items.length == 0) {
    return "Broken!";
  }
  return items.split(" ").sort().join(" ").replace(/[ea]/gi, "");
}

// Altenative Solution

const onePunch = (items) =>
  typeof items !== "string" || items.length == 0
    ? "Broken!"
    : items.split(" ").sort().join(" ").replace(/[ea]/gi, "");
