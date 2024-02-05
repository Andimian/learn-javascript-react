import classNames from 'classnames';
import styles from './style.module.scss';
import { Button } from '../button/component.tsx';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext.tsx';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fakeUser = {
	name: 'andi',
	email: 'test@mail.ru',
}
export const Login = () => {
	const {user, setUser} = useContext(AuthContext);
	const [showModal, setShowModal] = useState(false);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const authUser = useContext(AuthContext);

	const [auth, setAuth] = useState('dark');

	return (
		// Если пользователь авторизован, то в шапке показываем его имя и кнопку выйти.
		<div className={classNames(styles.root)}>
			<Button onClick={() => console.log('login')} title='Войти'/>

			<Button onClick={() => console.log('log out')} title='Выйти'/>
		</div>
	);
};
