import styles from "./style.module.scss";
import { Login } from '../login/component.tsx';
import { useState } from 'react';
import { Modal } from '../modal/component.tsx';
import { CartContainer } from '../cart/container.tsx';
import CartBtnContainer from '../cartBtn/container.tsx';

const UserInfo = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const closeModal = () => setIsOpen(false);

	const handleClick = () => {
		if (isOpen === true) {
			setIsOpen(false);
			return;
		}
		setIsOpen(true);
	}

	return (
		<div className={styles.root}>
			<Login/>

			<CartBtnContainer onClick={handleClick} className={styles.btn}/>

			{isOpen && (
				<Modal onClose={closeModal} className={styles.modal}>
					<CartContainer/>
				</Modal>
			)}
		</div>
	);
};

export default UserInfo;