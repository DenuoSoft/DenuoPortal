/* eslint-disable react/prop-types */
import css from './modal.module.scss'
import { useEffect, useRef } from 'react';

export const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
       document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; 
    } else {
       document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset'; 
    }
    return () => {
       document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset'; 
    };
  }, [isOpen, onClose]);

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
