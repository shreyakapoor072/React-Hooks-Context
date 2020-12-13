
import { v1 as uuid } from 'uuid';

export const BookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
        return [...state, {title: action.book.title, author: action.book.author, id: uuid()}];

        case 'REMOVE_TODO':
        return state.filter((item) => item.id !== action.id);

        default:
        return state;
    }
}