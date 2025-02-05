import css from './checkbox.module.scss';

export const CheckBox = () => {
    return (
        <div className={css.checkboxgroup}>
            <input className={css.checkbox} type="checkbox" placeholder="checkbox"/>
        </div>
    )
}