/* eslint-disable react/prop-types */
import css from './textarea.module.scss';

export const TextArea = ({ placeholder }) => {
    return (
        <textarea className={css.textarea} type="text" placeholder={placeholder}/>
    )
}