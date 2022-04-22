import React from "react";

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
            </td>
        </tr>
    );
}

export default BookItem;