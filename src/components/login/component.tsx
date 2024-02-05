import classNames from 'classnames';
import styles from './style.module.scss';
import { Button } from '../button/component.tsx';
import { useContext } from 'react';
import { UserAuthContext } from '../../contexts/authContext.tsx';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fakeUser = {
	name: 'andi',
	email: 'test@mail.ru',
}
export const Login = () => {
	const {user, setUser} = useContext(UserAuthContext);

	return (
		// Если пользователь авторизован, то в шапке показываем его имя и кнопку выйти.
		<div className={classNames(styles.root)}>
			<Button onClick={setUser()} title='Войти'/>

			<Button onClick={() => console.log('log out')} title='Выйти'/>
		</div>
	);
};
