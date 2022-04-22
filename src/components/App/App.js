import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Books from "../Books/BookList/books";
import LibraryRepository from "../../repository/libraryRepository";
import Categories from "../Categories/categories";
import Header from "../Header/header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <Route path={"/books"} exact render={() => <Books books={this.state.books}/>}/>
                    <Route path={"/categories"} exact render={() => <Categories/>}/>
                    <Redirect to={"/books"}/>
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

    componentDidMount() {
        this.loadBooks();
    }
}

export default App;
