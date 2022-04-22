import './App.css';
import React, {Component} from "react";
import Books from "../Books/books";
import LibraryRepository from "../../repository/libraryRepository";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    render() {
        return (
            <div>
                <Books books={this.state.books}/>
            </div>
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
