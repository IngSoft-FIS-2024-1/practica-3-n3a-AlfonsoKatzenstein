class Book {

  #title;
  #author;
  #pages;
  #words;
  
  constructor(title, author, pages, words) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
    this.setWords(words)
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error();
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error();
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error()
    }
    author = author.trim();
    if (author.length === 0) {
      author = "Anónimo";
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof (pages) !== 'number' || isNaN(pages)) {
      throw new Error('Error: las paginas deben ser un numero');
    }
    if (pages < 1) {
      throw new Error('Error: las paginas deben ser mayor a 0');
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(words) {
    if(typeof(words) !== 'number' || isNaN(words) || words < 0){
      throw new Error('Error: el numero debe ser un numero')
    } else{
      this.#words = words;
    }
  }

  wordsPerPage() {
   return this.#words / this.#pages;
  } 

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages} Palabras ${this.#words}`;
  }
}

export default Book;
