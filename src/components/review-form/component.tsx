import styles from './style.module.scss';
import classNames from 'classnames';
import { useReviewForm } from './use-review-form.tsx';

/* Когда использовать useReducer
Не существует строгого правила, когда нужно использовать useState, а когда useReducer. Но есть некоторые признаки, по
которым можно понять, что стоит попробовать useReducer.

Когда в компоненте есть несколько useState, в целях оптимизации можно заменить их единственным useReducer. Меньше хуков,
меньше затрат памяти, больше производительность. Однако это зависит от приоритетов. useReducer может потребовать написать
много action и это может негативно сказаться на читабельности кода.

Если одно состояние зависит от другого, это с большой вероятностью работа для useReducer. Все зависимости одного
состояния от другого лучше описывать в редукторе (reducer)  */

// type State = {
//     name: string;
//     text: string;
//     rating: number;
// };
//
// type Action = {
//     type: string;
//     /* eslint-disable  @typescript-eslint/no-explicit-any */
//     payload: any;
// };
//
// const INITIAL_STATE = {
//     name: '',
//     text: '',
//     rating: 1,
// }

/* Чистая функция, принимает предыдущее значение состояния и экшн (здесь уже деструктурирован, в нем есть обязательное
поле type и необязательное payload), с помощью которого изменим состояние */
// const reducer = (state: State, { type, payload }: Action): State => {
//     switch (type) {
//         case 'setName':
//             return {
//                 ...INITIAL_STATE,
//                 name: payload,
//             };
//         case 'setText':
//             return {
//                 ...INITIAL_STATE,
//                 text: payload,
//             };
//         case 'setRating':
//             return {
//                 ...INITIAL_STATE,
//                 rating: payload,
//             };
//
//         default:
//             return state;
//     }
// }

type Props = {
    className?: string;
    initialState?: IReviewForm;
    userName: string;
    showCancelBtn?: boolean;
    onSave: (newReview: IReviewForm) => void;
    onCancel?: () => void;
};

export interface IReviewForm {
    text: string;
    rating: number;
}

export const ReviewForm: React.FC<Props> = ({
   className,
   initialState,
   userName,
   showCancelBtn,
   onSave,
   onCancel,
}) => {
    /* Функция редуктор (reducer) первым аргументом. Вторым аргументом будут некоторые данные (initialiserArg или
    initialState). Обязательный. Если мы передали только два аргумента - эти данные будут начальным состоянием. Третий
    аргумент необязательный (initialiser) - это функция, которая будет вызвана единственный раз при монтировании
    компонента и она должна вернуть начальное значение состояния. Как говорилось выше, эта функция в качестве своего
    аргумента получит второй аргумент useReducer, это позволяет функцию initialiser вынести из компонента.
    Смысл этой функции в оптимизации. Если начальное состояние нужно вычислить, лучше использовать эту функцию, иначе
    при каждом обновлении компонента будете вычислять начальное состояние, но никак его не использовать.
    Возвращает само значение и диспатч (нужен для того, чтобы вносить какие-то изменения */
    // const [form, dispatch] = useReducer(reducer, INITIAL_STATE);
    // const { user } = useContext(UserAuthContext);
    const { form, setText, setRating } = useReviewForm(initialState);


    return (
        <form name="reviewForm" className={classNames(className, styles.root)}>
            <div className={styles.root}>
                <label htmlFor="name">User name</label>
                <input name="name" type="text" disabled={true} value={userName}></input>
            </div>
            <div className={styles.root}>
                <label htmlFor="text">Review text</label>
                <input
                    name="text"
                    type="text"
                    value={form.text}
                    onChange={setText}
                ></input>
            </div>
            <div>
                <label htmlFor="rating">Rating</label>
                <input
                    name="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={form.rating}
                    onChange={setRating}
                ></input>
            </div>
            <div className={styles.buttons_container}>
                {showCancelBtn && onCancel && (
                    <button onClick={() => onCancel()}>
                        Cancel
                    </button>
                )}
                <button onClick={() => onSave(form)}>Save</button>
            </div>
        </form>
    );
};