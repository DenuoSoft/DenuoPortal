/* eslint-disable react/prop-types */
import css from './modal.module.scss';
import {useEffect, useRef, useState} from 'react';

export const Modal = ({isOpen, onClose, children}) => {
	const modalRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [shouldRender, setShouldRender] = useState(isOpen);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				onClose();
			}
		};
		if (isOpen) {
			setShouldRender(true);
			const timeoutId = setTimeout(() => {
				setIsVisible(true);
			}, 100);

			document.addEventListener('mousedown', handleClickOutside);
			document.body.style.overflow = 'hidden';

			return () => {
				clearTimeout(timeoutId);
				document.removeEventListener('mousedown', handleClickOutside);
				document.body.style.overflow = 'unset';
			};
		} else {
			setIsVisible(false);
			const transitionTimeoutId = setTimeout(() => {
				setShouldRender(false);
				document.body.style.overflow = 'unset';
			}, 300); // Match this duration to your CSS transition duration
			document.removeEventListener('mousedown', handleClickOutside);
			return () => {
				clearTimeout(transitionTimeoutId);
			};
		}
	}, [isOpen, onClose]);

	if (!shouldRender) return null;

	return (
		<div
			className={`${css.modalOverlay} ${isVisible ? css.overlayVisible : ''}`}
		>
			<div
				className={`${css.modalContent} ${isVisible ? css.visible : ''}`}
				ref={modalRef}
			>
				<div className={css.mcontent}>
					<button className={css.closeButton} onClick={onClose}>
						&times;
					</button>
				</div>
				{children}
			</div>
		</div>
	);
};
