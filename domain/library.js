import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  #totalWords;
  #wordCount;

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== "string") {
      throw new Error()
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error()
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  getTotalWords(){
    return this.#totalWords;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    let total=0;
    this.#inventory.forEach(item => {
      total+= item.getWords();
    });
    return total;
  }

}

export default Library;
