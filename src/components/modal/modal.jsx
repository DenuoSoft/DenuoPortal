import css from './modal.module.scss'
import { useEffect } from 'react';
export const Modal = ({isOpen, onClose, children}) => {
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
      {children}
    </div>
  </div>
);
  
}
