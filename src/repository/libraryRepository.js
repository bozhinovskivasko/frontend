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
    },

    editBooks: (id, name, category, authorId, availableCopies) => {
        return axios.put(`/books/edit/${id}?name=${name}&category=${category}&authorId=${authorId}&availableCopies=${availableCopies}`);
    },

    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },

    markAsTakenBook: (id) => {
        return axios.put(`/books/rent/${id}`);
    }
}

export default LibraryRepository;