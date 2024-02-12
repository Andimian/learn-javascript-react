import classNames from 'classnames';
import styles from './style.module.scss';
import { Button } from '../button/component.tsx';
import { useContext, useState } from 'react';
import { UserAuthContext } from '../../contexts/authContext.tsx';
import { Modal } from "../modal/component.tsx";
import { AuthForm } from "../auth-form/comopnent.tsx";

export const Login = () => {
	const { user, setUser } = useContext(UserAuthContext);
	// для модалки
	const [ isOpen, setIsOpen ] = useState(false);
	const closeModal = () => setIsOpen(false);

	return (
		// Если пользователь авторизован, то в шапке показываем его имя и кнопку выйти.
		<div className={classNames(styles.root)}>
			{isOpen && (
				<Modal onClose={closeModal}>
					<AuthForm closeModal={closeModal} className={classNames(styles.fieldModal)}/>
				</Modal>
			)}

			{user ? (
				<>
					<span className={styles.name}>{user.name}</span>
					<Button className={styles.btn} onClick={() => setUser(null)} title='Выйти'/>
				</>
			) : <Button
				className={styles.btn}
				onClick={() => setIsOpen(true)}
				title='Войти'
			/>}
		</div>
	);
};
