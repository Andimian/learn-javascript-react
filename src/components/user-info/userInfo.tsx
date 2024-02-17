import styles from "./style.module.scss";
import { Login } from '../login/component.tsx';
import { Button } from '../button/component.tsx';
import cart from '../../assets/img/cart.png';
import { useState } from 'react';
import { Modal } from '../modal/component.tsx';
import { CartContainer } from '../cart/container.tsx';

const UserInfo = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const closeModal = () => setIsOpen(false);

	return (
		<div className={styles.root}>
			<Login/>

			<Button title={''} onClick={() => setIsOpen(true)} className={styles.btn}>
				<img src={cart} alt=""/>
			</Button>

			{isOpen && (
				<Modal onClose={closeModal} className={styles.modal}>
					<CartContainer/>
				</Modal>
			)}
		</div>
	);
};

export default UserInfo;