import { Button } from "../button/component.tsx";
import { useContext, useReducer } from "react";
import { UserAuthContext } from "../../contexts/authContext.tsx";
import styles from './style.module.scss';

type Prop = {
    closeModal: () => void,
    className: string,
}
type State = {
    name: string;
    email: string;
};

type Action = {
    type: string;
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    payload: any;
};

const INITIAL_STATE = {
    name: '',
    email: '',
}

const reducer = (state: State, { type, payload }: Action): State => {
    switch (type) {
        case 'setName':
            return {
                ...state,
                name: payload,
            };
        case 'setEmail':
            return {
                ...state,
                email: payload,
            };
        case 'cancel':
            return {
                ...payload,
            };

        default:
            return state;
    }
}

export const AuthForm = ({closeModal, className}: Prop ) => {
    const {setUser} = useContext(UserAuthContext);
    const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <div className={styles.authModal}>
            <div className={className}>
                <label htmlFor="name">Имя</label>
                <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(event) => dispatch({
                        type: 'setName',
                        payload: event.target.value,
                    })}/>
            </div>
            <div className={className}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={form.email}
                    onChange={(event) => dispatch({
                        type: 'setEmail',
                        payload: event.target.value,
                    })}/>
            </div>
            <Button title={"Войти"}
                    onClick={() => {
                        if (form.name.length > 0) {
                        setUser({name: form.name, email: form.email});
                        closeModal();
                        }
                    }}
                    disabled={form.name.length === 0}
            />
            <Button title={"Отмена"} onClick={() => {
                dispatch({
                    type: 'cancel',
                    payload: INITIAL_STATE,
                });
                closeModal();
            }}/>
        </div>
    );
};