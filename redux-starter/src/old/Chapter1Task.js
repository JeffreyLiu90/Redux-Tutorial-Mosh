// Exercise 1

import { pipe } from "lodash/fp";

const pickTag = obj => obj.tag;
const toLowerCase = str => str.toLowerCase();
const bracketify = str => `(${str})`;

const transform = pipe(pickTag, toLowerCase, bracketify);

const output = transform({ tag: "JAVASCRIPT" });
console.log(output);

//Other

const input = { tag: "JAVASCRIPT" };

console.log(input.tag.toLowerCase());

//Exercise 2

const recipe = { name: "Spaghetti Bolognese", ingredients: ["egg", "salt"] };

const newObj = { ...recipe, ingredients: ["egg white", "salt"] };

newObj.name = "Hello";
// console.log(recipe);
// console.log(newObj);

const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"]
};

// Add an ingredient
const added = {
  ...recipe,
  ingredients: [...recipe.ingredients, "cream"]
};

// Update an ingredient
const updated = {
  ...recipe,
  ingredients: recipe.ingredients.map(ingredient =>
    ingredient === "egg" ? "egg white" : ingredient
  )
};

// Remove an ingredient
const removed = {
  ...recipe,
  ingredients: recipe.ingredients.filter(ingredient => ingredient !== "egg")
};
