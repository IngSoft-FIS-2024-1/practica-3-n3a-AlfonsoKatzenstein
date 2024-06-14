import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 1000);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('return the correct number of words', () => {
    expect(myBook.getWords()).toBe(1000);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 123, 350)).toThrow();
  });

  it('check page param is a number', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 123, 'number of pages')).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() => myBook = new Book('Cuentos de la Selva', 123, -4)).toThrow();
  });

  it('check that pages are not a number ', () => {
    myBook.setPages('fg');
    expect(myBook).toThrow();
  });

  it('check that pages are not less than 1 ', () => {
    myBook.setPages(-4);
    expect(myBook).toThrow();
  });

  it('check that words are not a number ', () => {
    myBook.setWords('dasd');
    expect(myBook).toThrow();
  });

  it('sets author to "Anónimo" if author is empty or whitespace', () => {
    myBook.setWords(434);
    expect(myBook.getAuthor()).toBe(434);
  });

  it('sets author to "Anónimo" if author is empty or whitespace', () => {
    myBook.setAuthor('   ');
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  it('returns NaN if words is not set', () => {
    expect(myBook.wordsPerPage()).toBeNaN();
  });
  

  it('toString()', () => {
    const expectedString = 'Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: null';
    expect(myBook.toString()).toBe(expectedString);
  });

});
