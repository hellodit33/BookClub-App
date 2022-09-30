class Book {
  constructor(
    id,
    categoryIds,
    title,
    author,
    type,
    rating,
    pages,
    imageUrl,
    synopsis,

    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.author = author;
    this.type = type;
    this.rating = rating;
    this.pages = pages;
    this.imageUrl = imageUrl;
    this.synopsis = synopsis;

    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Book;
