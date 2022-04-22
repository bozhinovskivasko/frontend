import React from "react";
import {Link} from "react-router-dom";

const BookItem = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.item.name}</td>
            <td scope={"col"}>{props.item.category}</td>
            <td scope={"col"}>{props.item.author.fullName}</td>
            <td scope={"col"}>{props.item.availableCopies}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.item.id)}
                >Delete</a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.item.id)}
                      to={`/books/edit/${props.item.id}`}
                >Edit</Link>
                <a title={"Mark As Taken"} className={"btn btn-success ml-2"}
                   onClick={() => props.onMarkAsTaken(props.item.id)}
                >Mark As Taken</a>
            </td>
        </tr>
    );
}

export default BookItem;