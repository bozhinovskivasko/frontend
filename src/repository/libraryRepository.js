import axios from "../custom-axios/axios";

const LibraryRepository = {
    fetchBooks: () => {
        return axios.get("/books");
    },

    deleteBooks: (id) => {
        return axios.delete(`/books/delete/${id}`);
    }
}

export default LibraryRepository;