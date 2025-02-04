import css from './textarea.module.scss';

export const TextArea = () => {
    return (
        <input className={css.textarea} type="text" placeholder="text area"/>
    )
}