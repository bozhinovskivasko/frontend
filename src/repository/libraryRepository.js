import axios from "../custom-axios/axios";

const LibraryRepository = {
    fetchBooks: () => {
        return axios.get("/books");
    },

    fetchAuthors: () => {
        return axios.get("/authors");
    },

    deleteBooks: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },

    addBooks: (name, category, authorId, availableCopies) => {
        return axios.post(`/books/add?name=${name}&category=${category}&authorId=${authorId}&availableCopies=${availableCopies}`);
        ///add?name=Eyes&category=DRAMA&authorId=1&availableCopies=6
    }
}

export default LibraryRepository;