import styles from './style.module.scss';
import { useReducer } from "react";

/* Когда использовать useReducer
Не существует строгого правила, когда нужно использовать useState, а когда useReducer. Но есть некоторые признаки, по
которым можно понять, что стоит попробовать useReducer.

Когда в компоненте есть несколько useState, в целях оптимизации можно заменить их единственным useReducer. Меньше хуков,
меньше затрат памяти, больше производительность. Однако это зависит от приоритетов. useReducer может потребовать написать
много action и это может негативно сказаться на читабельности кода.

Если одно состояние зависит от другого, это с большой вероятностью работа для useReducer. Все зависимости одного
состояния от другого лучше описывать в редукторе (reducer)  */

type State = {
    name: string;
    text: string;
    rating: number;
};

type Action = {
    type: string;
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    payload: any;
};

const INITIAL_STATE = {
    name: '',
    text: '',
    rating: 1,
}

/* Чистая функция, принимает предыдущее значение состояния и экшн (здесь уже деструктурирован, в нем есть обязательное
поле type и необязательное payload), с помощью которого изменим состояние */
const reducer = (state: State, { type, payload }: Action): State => {
    switch (type) {
        case 'setName':
            return {
                ...INITIAL_STATE,
                name: payload,
            };
        case 'setText':
            return {
                ...INITIAL_STATE,
                text: payload,
            };
        case 'setRating':
            return {
                ...INITIAL_STATE,
                rating: payload,
            };

        default:
            return state;
    }
}



export const ReviewForm = () => {
    /* Функция редуктор (reducer) первым аргументом. Вторым аргументом будут некоторые данные (initialiserArg или
    initialState). Обязательный. Если мы передали только два аргумента - эти данные будут начальным состоянием. Третий
    аргумент необязательный (initialiser) - это функция, которая будет вызвана единственный раз при монтировании
    компонента и она должна вернуть начальное значение состояния. Как говорилось выше, эта функция в качестве своего
    аргумента получит второй аргумент useReducer, это позволяет функцию initialiser вынести из компонента.
    Смысл этой функции в оптимизации. Если начальное состояние нужно вычислить, лучше использовать эту функцию, иначе
    при каждом обновлении компонента будете вычислять начальное состояние, но никак его не использовать.
    Возвращает само значение и диспатч (нужен для того, чтобы вносить какие-то изменения */
    const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <div className={styles.root}>
            <div className={styles.field}>
                <label htmlFor="name">Name</label>
                {/* Как подключить input к состоянию. У поля есть два пропа: value - сюда прокидываешь значение и
                onChange - сюда прокидываем функцию, которая будет вызываться когда значение будет изменяться */}
                <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(event) => dispatch({
                        type: 'setName',
                        payload: event.target.value,
                    })}/>
            </div>
            <div className={styles.field}>
                <label htmlFor="text">Text</label>
                <input
                    type="text"
                    id="text"
                    value={form.text}
                    onChange={(event) => dispatch({
                        type: 'setText',
                        payload: event.target.value,
                    })}/>
            </div>
            <div className={styles.field}>
                <label htmlFor="rating">Rating</label>
                <input
                    type="number"
                    id="rating"
                    value={form.rating}
                    onChange={(event) => dispatch({
                        type: 'setRating',
                        payload: +event.target.value,
                    })}/>
            </div>
        </div>
    );
};