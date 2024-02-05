import classNames from 'classnames';
import styles from './style.module.scss';
import { Button } from '../button/component.tsx';
import { useContext } from 'react';
import { UserAuthContext } from '../../contexts/authContext.tsx';

const fakeUser = {
	name: 'andi',
	email: 'test@mail.ru',
}
export const Login = () => {
	const { user, setUser } = useContext(UserAuthContext);

	return (
		// Если пользователь авторизован, то в шапке показываем его имя и кнопку выйти.
		<div className={classNames(styles.root)}>
			{!user && <Button onClick={() => setUser(fakeUser)} title='Войти'/>}
			{user &&
                <div>
					<span className={classNames(styles.name)}>{user.name}</span>
                    <Button onClick={() => setUser(null)} title='Выйти'/>
				</div>
			}
		</div>
	);
};
