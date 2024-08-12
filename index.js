// Task: 1

/**
 * The `customAssign` function merges the properties of several objects using the `assign` method.
 * Additionally, it converts numeric property values to strings and replaces spaces with underscores.
 * objects - The objects whose properties will be merged.
 * Returns - A new object with merged properties.
 */
function customAssign(...objects) {
  if (objects.length < 2) {
    return "Error: At least two objects must be provided.";
  }
  const mergedObject = Object.assign({}, ...objects);
  for (let key in mergedObject) {
    if (typeof mergedObject[key] === 'string') {
      mergedObject[key].toString();
    }
  }
  return mergedObject;
}

// Example usage of the customAssign function
console.log("Task: 1 ==============================");

console.log(customAssign({ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }));
// Outputs: { a: '1', b: '2', c: '3', d: '4', e: '5', f: '6' }

// Task: 2

/**
 * The `customEntries` function returns an array containing all properties of an object and their values as arrays.
 * It uses the `entries` method.
 * obj - The object whose properties need to be retrieved.
 * Returns - An array containing all properties and their values.
 */
function customEntries(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Error: Argument is not an object.";
  }
  const entriesArray = Object.entries(obj);
  return entriesArray;
}

// Example usage of the customEntries function
console.log("Task: 2 ==============================");

console.log(
  customEntries({
    name: "John",
    age: 30,
    occupation: "Developer",
  })
); // Outputs: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'occupation', 'Developer' ] ]

// Task: 3

/**
 * The `customObjectFromEntries` function creates an object from an array of entries, with additional processing of property values.
 * Numeric property values are converted to strings, and spaces are replaced with underscores.
 * entries - An array of entries, where each entry is represented as [key, value].
 * Returns - An object created from the entries with processed values.
 */
function customObjectFromEntries(entries) {
  if (!Array.isArray(entries)) {
    return "Error: Input argument must be an array.";
  }
  const processedEntries = entries.map(([key, value]) => {
    if (typeof key === 'number') {
      value = String(key);
    }
    return [key, value];
  });
  return Object.fromEntries(processedEntries);
}

console.log("Task: 3 ==============================");

// Console output
console.log(
  customObjectFromEntries([
    ["a", 1],
    [43, "Hello"],
    ["c", 3.14],
    ["d", "World"],
    [56, 42],
  ])
); // Outputs: { '43': '43', '56': '56', a: 1, c: 3.14, d: 'World' }

// Task: 4

/**
 * The checkProperty function takes an object and a key. It checks whether the object has the specified property.
 * The hasOwnProperty() method is used to implement this check.
 * obj - The input object, prop - The property key.
 * Returns - boolean - true if the object has the property, otherwise false.
 */
function checkProperty(obj, prop) {
  if (typeof obj !== 'object') {
    return false;
  }
  if (typeof prop !== 'string') {
    return false;
  }
  const hasProp = obj.hasOwnProperty(prop);
  return hasProp;
}

console.log("Task: 4 ==============================");
console.log(checkProperty({ a: 1, b: 2, c: 3 }, "b")); // Outputs true

// Task: 5

/**
 * The extendAndFreezeObject function takes two objects, extends the first with the properties of the second, and "freezes" the resulting object, preventing further changes.
 * Object.assign() and Object.freeze() methods are used for implementation.
 * obj1, obj2 - The input objects.
 * Returns - obj1 - The object that was extended with the properties of obj2 and "frozen".
 */

function extendAndFreezeObject(obj1, obj2) {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return null;
  }
  Object.assign(obj1, obj2);
  Object.freeze(obj1);
  if (Object.isFrozen(obj1)) {
    return obj1;
  } else {
    return "Failed to freeze the object.";
  }
}

console.log("Task: 5 ==============================");
console.log(extendAndFreezeObject({ a: 1, b: 2 }, { c: 3, d: 4 })); // Outputs {a: 1, b: 2, c: 3, d: 4}

// Task: 6

/**
 * The keysAndValues function takes an object, logs its keys and values to the console, and returns an array of arrays containing keys and values.
 * Object.keys(), Object.values(), and Object.entries() methods are used for implementation.
 * obj - The input object.
 * Returns - array - An array consisting of an array of keys and an array of values.
 */

function keysAndValues(obj) {
  if (typeof obj !== 'object') {
    return null;
  }
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return [keys, values];
}

console.log("Task: 6 ==============================");
console.log(keysAndValues({ a: 1, b: 2, c: 3, d: 4 })); // Outputs [['a', 'b', 'c', 'd'], [1, 2, 3, 4]]

// Task: 7

/**
 * The filterObjectsByKey function takes an array of objects and a key name.
 * The function returns a new array of objects that contain the specified key.
 * The hasOwnProperty method is used to check if the key exists in the object.
 * arr - The input array of objects.
 * key - The key to find.
 * Returns - A new array of objects that contain the specified key.
 */
function filterObjectsByKey(arr, key) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter((obj) => obj.hasOwnProperty(key));
}

console.log("Task: 7 ==============================");
console.log(
  filterObjectsByKey([{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5 }], "b")
); // Outputs [{a: 1, b: 2}, {a: 3, b: 4}]

// Task: 8

/**
 * The checkAndPreventExtensions function takes an object.
 * The function checks if it is possible to add new properties to the object,
 * and if so, it prevents further addition of properties to the object.
 * Object.preventExtensions() and Object.isExtensible() methods are used to prevent the addition of new properties to the object and to check the object's state, respectively.
 * obj - The input object.
 * Returns - A boolean value indicating whether new properties can be added to the object.
 */
function checkAndPreventExtensions(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  if (Object.isExtensible(obj)) {
    Object.preventExtensions(obj);
  }
  return Object.isExtensible(obj);
}

console.log("Task: 8 ==============================");
console.log(checkAndPreventExtensions({ a: 1, b: 2 })); // Outputs false

// Task: 9

/**
 * The sealAndCheck function takes an object.
 * The function seals the object and then checks whether the object is sealed.
 * Object.seal() and Object.isSealed() methods are used to seal the object and check its state, respectively.
 * obj - The input object.
 * Returns - A boolean value indicating whether the object is sealed.
 */
function sealAndCheck(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  Object.seal(obj);
  return Object.isSealed(obj);
}

console.log("Task: 9 ==============================");
console.log(sealAndCheck({ a: 1, b: 2 })); // Outputs true

// Task: 10

/**
 * The function `checkOwnership` accepts two objects and a key as a string.
 * The function uses the `hasOwnProperty()` method to check if both objects have the specified key.
 * If so, it compares their values using the strict equality operator (===).
 * If the values differ, it returns false; otherwise, it returns true.
 *
 *  obj1 - The first input object.
 *  obj2 - The second input object.
 *  key - The key to check in both objects.
 * Returns - The result of the comparison.
 */

// Start defining the function.
function checkOwnership(obj1, obj2, key) {
  if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
    return obj1[key] === obj2[key];
  } else {
    return false;
  }
}

// Example usage of the function:
console.log("Task: 10 ==============================");

console.log(checkOwnership({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 4 }, "a")); // true

// Task: 11

/**
 * The `getObjectValuesSum` function accepts an object where the values are numbers and returns the sum of all the values.
 * It uses the `Object.values()` method to get all the values of the object, and then the `reduce()` method to calculate the sum of the values.
 *
 *  obj - The object for which the sum of the values needs to be calculated.
 * Returns - The sum of all the object's values.
 */
function getObjectValuesSum(obj) {
  if (typeof obj !== 'object') {
    return 0;
  }
  const values = Object.values(obj);
  const sumOfAllElements = values.reduce((current, value) => current += value, 0);
  return sumOfAllElements;
}

console.log("Task: 11 ==============================");
console.log(getObjectValuesSum({ a: 1, b: 2, c: 3 })); // Outputs 6

// Task: 12

/**
 * The `convertArrayToObj` function accepts an array of arrays, where each sub-array has two elements - a key and a value.
 * The function converts the array into an object using the `Object.fromEntries()` method.
 * If there are duplicate keys in the array, the function will log a message about it.
 *
 *  arr - An array of arrays, where each sub-array has two elements - a key and a value.
 * Returns - The object created from the array.
 */
function convertArrayToObj(arr) {
  if (!Array.isArray(arr)) {
    return {};
  }
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i];
    if (obj.hasOwnProperty(key)) {
      console.log(`There is a duplicate key in the array: ${key}`);
    }
    obj[key] = value;
  }
  return Object.fromEntries(arr);
}

console.log("Task: 12 ==============================");
const arr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["a", 4],
];
console.log(convertArrayToObj(arr)); // Outputs: There is a duplicate key in the array: a
// {a: 4, b: 2, c: 3}
