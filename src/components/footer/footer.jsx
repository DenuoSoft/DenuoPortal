import css from './footer.module.scss';

export const Footer = () => {
	return (
		<footer className={css.footer}>
			<a href="https://denuo.legal" target="_blank">
				<span className={css.text}>&#169;</span>
				<span className={css.text}>2022 - 2025</span>
				<span className={css.text}>Denuo</span>
			</a>
		</footer>
	);
};
