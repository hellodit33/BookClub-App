class Quote {
  constructor(title, imageUri, book, page) {
    this.title = title;
    this.imageUri = imageUri;
    this.book = book;
    this.page = page;
    this.id = new Date().toString() + Math.random().toString();
  }
}

export default Quote;
