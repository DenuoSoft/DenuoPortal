/* eslint-disable react/prop-types */
import css from './modal.module.scss'
import { useEffect } from 'react';
export const Modal = ({isOpen, onClose, children}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'unset'; 
    }
    return () => {
      document.body.style.overflow = 'unset'; 
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
        &times; 
      </button>
      {children}
    </div>
  </div>
);
  
}
