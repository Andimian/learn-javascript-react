import styles from './style.module.scss';
import { ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

type Props = {
    children: ReactNode,
    onClose: () => void,
}

export const Modal = ({children}:Props ) => {
    const modalContainer = useRef(document.getElementById('modal-container'));
    return (
        createPortal(
        <div className={classNames(styles.root)}>
            {children}
        </div>,
        modalContainer.current
        )
    )
};