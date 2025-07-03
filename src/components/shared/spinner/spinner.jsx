import css from './spinner.module.scss';

export const Spinner = () => {
    return (
        <div className={css.spinner}>
            <div className={css.loader}></div>
        </div>
    );
};

