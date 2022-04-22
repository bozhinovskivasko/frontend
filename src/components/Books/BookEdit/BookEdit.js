import React from "react";
import {useHistory} from "react-router-dom";

const BookEdit = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "DRAMA",
        authorId: 1,
        availableCopies: 0
    });

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.selectedBook.name;
        const category = formData.category !== "" ? formData.category : props.selectedBook.category;
        const authorId = formData.authorId !== 0 ? formData.authorId : props.selectedBook.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.selectedBook.availableCopies;

        props.onEditBook(props.selectedBook.id, name, category, authorId, availableCopies);
        history.push("/books");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.selectedBook.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            <option value={"NOVEL"}>NOVEL</option>
                            <option value={"THRILLER"}>THRILLER</option>
                            <option value={"HISTORY"}>HISTORY</option>
                            <option value={"FANTASY"}>FANTASY</option>
                            <option value={"BIOGRAPHY"}>BIOGRAPHY</option>
                            <option value={"CLASSICS"}>CLASSICS</option>
                            <option value={"DRAMA"}>DRAMA</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Authors</label>
                        <select name="authorId" className="form-control" onChange={handleChange}>
                            {props.authors.map((item) => {
                                    if (props.selectedBook.author !== undefined &&
                                        props.selectedBook.author.id === item.id)
                                        return <option selected={props.selectedBook.author.id}
                                                       value={item.id}>{item.fullName}</option>
                                    else return <option value={item.id}>{item.fullName}</option>
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               placeholder={props.selectedBook.availableCopies}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );

}

export default BookEdit;