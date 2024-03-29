import styles from './style.module.scss';
import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

type Props = {
    children: ReactNode,
    onClose: () => void,
}

export const Modal = ({children, onClose}:Props ) => {
    const modalContainer = useRef<HTMLElement>(document.getElementById('modal-container'));
    return (
        <>
            {modalContainer.current && (
            createPortal(
                <>
                    <button onClick={onClose} className={styles.overlay}/>
                    <div className={classNames(styles.root)}>
                    {children}
                </div>
                </>,
                modalContainer.current
            )
            )}
        </>
    )
};