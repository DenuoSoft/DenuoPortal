import css from './modal.module.scss'
import { useEffect } from 'react';
export const Modal = ({isOpen, onClose}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Блокируем прокрутку
    } else {
      document.body.style.overflow = 'unset'; // Восстанавливаем прокрутку
    }
    return () => {
      document.body.style.overflow = 'unset'; // Восстанавливаем прокрутку при размонтировании
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
        &times; {/* Символ крестика */}
      </button>
      <h2>Profile Information</h2>
        <p>User name:</p>
        <p>Job position:</p>
        <p>Office:</p>
        <p>Phone number:</p>
        <p>Assistant:</p>
    </div>
  </div>
);
  
}
