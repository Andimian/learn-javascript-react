import styles from './style.module.scss';
import { useReducer } from "react";

const INITIAL_VALUE = {
    name: '',
    text: '',
    rating: 1,
}
const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'setName':
            return {
                ...INITIAL_VALUE,
                name: payload,
            };
        case 'setText':
            return {
                ...INITIAL_VALUE,
                text: payload,
            };
        case 'setRating':
            return {
                ...INITIAL_VALUE,
                rating: payload,
            };

        default:
            return state;
    }
}



export const ReviewForm = () => {
    const [form, dispatch] = useReducer();

    return (
        <div className={styles.root}>
            <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"/>
            </div>
            <div className={styles.field}>
                <label htmlFor="text">Text</label>
                <input type="text" id="text"/>
            </div>
            <div className={styles.field}>
                <label htmlFor="rating">Rating</label>
                <input type="number" id="rating"/>
            </div>
        </div>
    );
};