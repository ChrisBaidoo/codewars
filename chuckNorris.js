function onePunch(items) {
  if (typeof items !== "string" || items.length == 0) {
    return "Broken!";
  }
  return items.split(" ").sort().join(" ").replace(/[ea]/gi, "");
}
