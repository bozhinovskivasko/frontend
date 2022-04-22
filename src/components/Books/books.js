import React from "react";

const Books = (props) => {
    return (
        <div>
            <div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>Author</th>
                            <th scope={"col"}>Available copies</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.books.map((item) => {
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.author.fullName}</td>
                                    <td>{item.availableCopies}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Books;