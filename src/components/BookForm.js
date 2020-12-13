import React, {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { addBooks } = useContext(BookContext);
    const [formValues, updateForm ] = useState({title: '', author: ''});

    const updateFormValues = (e, field) => {
        const val = e.target.value;
        // in useState hooks state does not get merged it gets replaced
        updateForm({...formValues, [field] : val});
    }

    const addNewBook = (e) => {
        e.preventDefault();
        const { title, author } = formValues;
        if(!title && !author) return;
        addBooks(title, author);
        updateForm({title: '', author: ''});
    }
    return (
        <form>
            <input type="text" placeholder="title" value={formValues.title} onChange={(e) => updateFormValues(e, 'title')}/>
            <input type="text" placeholder="author" value={formValues.author} onChange={(e) => updateFormValues(e, 'author')}/>
            <input type="submit" value="Add Book" onClick={addNewBook} />
        </form>
    )
}

export default BookForm;