export { capitalize };

function capitalize() {
  const string = "string";
  const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalizedString;
}
