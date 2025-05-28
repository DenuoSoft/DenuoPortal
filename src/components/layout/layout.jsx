/* eslint-disable react/prop-types */
import css from './layout.module.scss';

export const Layout = (props) => {
	return (
		<div className={css.layout}>
			<div className={css.main}>
				{props.children}
			</div>
		</div>
	);
};
