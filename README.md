# OBJECTS!

## What are objects?

Objects are the most common data structure in *object-oriented programming* (OOP). Very simply, **objects** are a collection of zero or more **properties**.

So what’s a *property*? A *property* consists of a **key: value** pair, where the: 

- **key** is a *string* or *symbol* (other types will be coerced into strings), and the
- **value** is any JS expression (code that evaluates to a single value or thing), including other objects (yes, functions too).

In computer science, collections of key/value pairs are commonly referred to as dictionaries - a good visualization of what an object is.

## Why do we use objects?

In OOP, we often model the goal of our application using real-world objects.

As developers, you’ll be working with objects more than anything else. The following is just a small example of what is modeled using objects:

- The browser window and the elements it visualizes are all represented in memory as JS objects.
- Every part of those elements, including their styling, is accessed via JS objects.
- Data submitted from the browser will be accessed on the server as objects.
- Data retrieved from a database will be stored in objects.

Even primitive data types like strings and numbers are turned into an object on demand by the JS runtime when we want to call a method like `toUpperCase`! BTW, this process is called *boxing*. Now does it make sense why it’s called **object-oriented programming**?

## Creating Objects 

### Object Literal Notaion

- also known as an *Object Initializer*
- Uses {curly braces} --> we refer to {} as an **empty object**

Is there a difference between:

`const person:{eyes: 'brown', height: '1.87'}`

- AND -

`const person: {`
  `eyes: 'brown',`
  `height: '1.87',` <-- trailing comma... is this allowed?
`}`

### Invoking a Class --> we'll go over this in more detail further down the line.

### Object.create method --> You Do!

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create 

## Adding Properties --> dot or bracket...?

### Dot Notation

- uses a dot (period) to access THE VAULE of a property of an object
- creates very readable code --> easy to understand what the code is doing

`let animal = {`
  `kitty: 'meow',`
  `puppy: 'woof'`
`};`

`let noise = animal.kitty;`

`console.log(noise);`
`// meow`

### Bracket Notation

- uses square brackets --> [] to access the VALUE of an object
- properties are passed as type 'String' in the sqaure brackets
- works similarly to [] with Arrays and finding indexes

`const zoo_inventory = ['tiger', 'monkey', 'shark']`

`console.log(zoo_inventory[1])`

`let animal = {`
  `kitty: 'meow',`
  `puppy: 'woof'`
`};`

`let noise = animal['kitty'];`

`console.log(noise);`
`// meow`

## Changing/Manipulating Data

- .hasOwnProperty() --> built-in method that returns a boolean indicating whether the object has the specified property as its own property

- `in` keyword -->  `in` operator will return true for direct or inherited properties
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#direct_vs._inherited_properties

- `delete`key --> removes a property from an object
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete 

## Iterating over Objects

### for...in Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

### forEach Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach

#### Array --> forEach loop for arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

### Object.values() --> returns an array of a given object's own enumerable property values
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

### Object.keys() --> returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

### Object.entries() --> returns an array of a given object's own enumerable string-keyed property [key, value] pairs
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries 

## Methods

When a property holds a function, we commonly refer to it as a **method** of the object.

## Review

- **An object is a collection of zero or more ___________.**

- **Properties are _____ : ______ pairs.**

- **Is it more efficient to access properties via dot or square bracket notation?**

- **What type of `for` loop is used to iterate over the keys of an object?**

- **Is the following valid code?**
`const name = prompt('Enter your name: ');`
`const age = prompt('Enter your age: ');`
`const person = {name, age};`