function onePunch(items) {
  if (typeof items !== "string") {
    return "Broken!";
  }
  return items
    .split(" ")
    .sort()
    .join(" ")
    .replace(/['e','a']/g, "");
}
