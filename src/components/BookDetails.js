import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    const { removeBook } = useContext(BookContext);
    return (
        <li onClick={()=> removeBook(book.id)}>
            <p>{book.title}</p>
            <p>{book.author}</p>
        </li>
    )
}

export default BookDetails;