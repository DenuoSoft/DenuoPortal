/* eslint-disable react/prop-types */
import css from './modal.module.scss';
import {useEffect, useRef, useState, useCallback} from 'react';

export const Modal = ({isOpen, onClose, children}) => {
	const modalRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);
	const [shouldRender, setShouldRender] = useState(isOpen);
	const timeoutRef = useRef(null);

	const handleClickOutside = useCallback((event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			onClose();
		}
	}, [onClose]);

	const handleEscapeKey = useCallback((event) => {
		if (event.key === 'Escape') {
			onClose();
		}
	}, [onClose]);

	const cleanup = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		document.removeEventListener('mousedown', handleClickOutside);
		document.removeEventListener('keydown', handleEscapeKey);
		document.body.style.overflow = 'unset';
	}, [handleClickOutside, handleEscapeKey]);

	useEffect(() => {
		if (isOpen) {
			setShouldRender(true);
			timeoutRef.current = setTimeout(() => {
				setIsVisible(true);
			}, 10); 

			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', handleEscapeKey);
			document.body.style.overflow = 'hidden';

			return cleanup;
		} else {
			setIsVisible(false);
			timeoutRef.current = setTimeout(() => {
				setShouldRender(false);
			}, 300);
			
			return () => {
				if (timeoutRef.current) {
					clearTimeout(timeoutRef.current);
				}
			};
		}
	}, [isOpen, onClose, handleClickOutside, handleEscapeKey, cleanup]);

	if (!shouldRender) return null;

	return (
		<div
			className={`${css.modalOverlay} ${isVisible ? css.overlayVisible : ''}`}
			onClick={handleClickOutside} 
		>
			<div
				className={`${css.modalContent} ${isVisible ? css.visible : ''}`}
				ref={modalRef}
				role="dialog"
				aria-modal="true"
			>
				<div className={css.modalHeader}>
					<button 
						className={css.closeButton} 
						onClick={onClose}
						aria-label="Close modal"
					>
						&times;
					</button>
				</div>
				<div className={css.modalBody}>
					{children}
				</div>
			</div>
		</div>
	);
};