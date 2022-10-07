class Event {
  constructor(date, host, book, location) {
    this.date = date;
    this.host = host;
    this.book = book;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}

export default Event;
