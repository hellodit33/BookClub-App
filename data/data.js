import Year from "../models/year";
import Book from "../models/book";

export const YEARS = [
  new Year("y1", "2018", "pink"),
  new Year("y2", "2019", "blue"),
  new Year("y3", "2020", "green"),
  new Year("y4", "2021", "red"),
  new Year("y5", "2022", "yellow"),
];

export const BOOKS = [
  new Book(
    "m1",
    "y1",
    "Marcelle",
    "short novel",
    "5",
    "220",
    "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
    20,
    [
      "4 Tomatoes",
      "1 Tablespoon of Olive Oil",
      "1 Onion",
      "250g Spaghetti",
      "Spices",
      "Cheese (optional)",
    ],
    [
      "Cut the tomatoes and the onion into small pieces.",
      "Boil some water - add salt to it once it boils.",
      "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
      "In the meantime, heaten up some olive oil and add the cut onion.",
      "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
      "The sauce will be done once the spaghetti are.",
      "Feel free to add some cheese on top of the finished dish.",
    ],
    false,
    true,
    true,
    true
  ),

  new Book(
    "m2",
    "y1",
    "Marcelle2",
    "short novel",
    "5",
    "220",
    "https://i.pinimg.com/originals/c4/fb/d9/c4fbd9ee539c468af8e24813752fce5c.jpg",
    20,
    [
      "4 Tomatoes",
      "1 Tablespoon of Olive Oil",
      "1 Onion",
      "250g Spaghetti",
      "Spices",
      "Cheese (optional)",
    ],
    [
      "Cut the tomatoes and the onion into small pieces.",
      "Boil some water - add salt to it once it boils.",
      "Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.",
      "In the meantime, heaten up some olive oil and add the cut onion.",
      "After 2 minutes, add the tomato pieces, salt, pepper and your other spices.",
      "The sauce will be done once the spaghetti are.",
      "Feel free to add some cheese on top of the finished dish.",
    ],
    false,
    true,
    true,
    true
  ),

  new Book(
    "m3",
    "y2",
    "Göra sig kvitt Eddy Bellegueule",
    "novel",
    "8",
    "220",

    "http://zone-critique.com/wp-content/uploads/2014/03/9782021117707.jpg",
    10,
    [
      "1 Slice White Bread",
      "1 Slice Ham",
      "1 Slice Pineapple",
      "1-2 Slices of Cheese",
      "Butter",
    ],
    [
      "Butter one side of the white bread",
      "Layer ham, the pineapple and cheese on the white bread",
      "Bake the toast for round about 10 minutes in the oven at 200°C",
    ],
    false,
    false,
    false,
    false
  ),
];
