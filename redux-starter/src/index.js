import { pipe, compose } from "lodash/fp";
import { Map } from "immutable";

// Old
let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
// const wrapInDiv = str => `<div${str}</div>>`;
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

// Higher order function = compose
// Takes function as args, and returns new function that is composition of all these functions
//right to left

// const transform = compose(wrapInDiv, toLowerCase, trim);
// transform(input);

// const result = wrapInDiv(toLowerCase(trim(input)));

// Pipe - better option
// trim first, make it lowercase, and wrap in div
const transform = pipe(trim, toLowerCase, wrap("div"));

// console.log(transform(input));

const person = { name: "John" };

// Copy all properties of person obj to empty obj, third arg is if you want to change a pr
//property
const updated = Object.assign({}, person, { name: "Bob", age: 30 });
// console.log(updated);

//Immutable JS
// Map object
let book = Map({ title: "Harry Potter" });

// Map {size: 1, _root: ArrayMapNode, __ownerID: undefined, __hash: undefined, __altered: false}

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

// Problems - have to learn whole new API;
// Hard to integrate with other libraries
console.log(book.toJS());
