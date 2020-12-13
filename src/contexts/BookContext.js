import React, { createContext, useState } from 'react'; 
import { v1 as uuid } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
       {title: "Alchemist", author: 'Paulo Coehlo', id:1},
       {title: "Time Machine", author: 'HG Wells', id: 2}
    ])

    const addBooks = (title, author) => {
        setBooks([...books, { title, author, id: uuid()}]);
    }

    const removeBook = (id) => {
        setBooks(books.filter((item) => item.id !== id));
    }

    return (
        <BookContext.Provider value={{books, addBooks, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;