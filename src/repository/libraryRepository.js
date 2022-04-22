import axios from "../custom-axios/axios";

const LibraryRepository = {
    fetchBooks: () => {
        return axios.get("/books");
    }
}

export default LibraryRepository;