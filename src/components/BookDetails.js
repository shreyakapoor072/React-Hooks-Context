import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    const { dispatch } = useContext(BookContext);
    return (
        <li onClick={()=> dispatch({type: 'REMOVE_TODO', id: book.id})}>
            <p>{book.title}</p>
            <p>{book.author}</p>
        </li>
    )
}

export default BookDetails;