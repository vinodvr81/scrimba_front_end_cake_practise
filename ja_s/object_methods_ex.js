// Prevents re-assignment
const car = {type:"Fiat", model:"500", color:"white"};

////////////////////////////////////////////////////////////////


// Copies properties from a source object to a target object
Object.assign(target, source)

// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()

// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)


/////////////////////////////////////////////////////////

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing a Property
Object.getOwnPropertyDescriptor(object, property)

// Accessing Properties
Object.getOwnPropertyDescriptors(object)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

//////////////////////////////////////////////////////////////



// Prevents adding object properties
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents adding and deleting object properties
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)