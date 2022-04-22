import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Books from "../Books/BookList/books";
import LibraryRepository from "../../repository/libraryRepository";
import Categories from "../Categories/categories";
import Header from "../Header/header";
import BooksAdd from "../Books/BooksAdd/booksAdd";
import BookEdit from "../Books/BookEdit/BookEdit";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <Route path={"/books/add"} exact
                           render={() => <BooksAdd authors={this.state.authors} onAddBook={this.addBooks}/>}/>
                    <Route path={"/books/edit/:id"} exact
                           render={() => <BookEdit authors={this.state.authors}
                                                   selectedBook={this.state.selectedBook}
                                                   onEditBook={this.editBooks}/>}/>
                    <Route path={"/books"} exact
                           render={() => <Books books={this.state.books} onDelete={this.deleteBooks}
                                                onEdit={this.getBook}
                                                onMarkAsTaken={this.markAsTakenBook}/>}/>
                    <Route path={"/categories"} exact render={() => <Categories/>}/>
                    {/*<Redirect to={"/books"}/>*/}
                </main>
            </Router>
        );
    }

    loadBooks = () => {
        LibraryRepository.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadAuthors = () => {
        LibraryRepository.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    deleteBooks = (id) => {
        LibraryRepository.deleteBooks(id)
            .then(() => {
                this.loadBooks();
            });
    }

    addBooks = (name, category, authorId, availableCopies) => {
        LibraryRepository.addBooks(name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    getBook = (id) => {
        LibraryRepository.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            });
    }

    editBooks = (id, name, category, authorId, availableCopies) => {
        LibraryRepository.editBooks(id, name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    markAsTakenBook = (id) => {
        LibraryRepository.markAsTakenBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
    }
}

export default App;
