import {lazy} from 'react';
const Button = lazy(() => import('../shared/buttons/button'));
import PropTypes from 'prop-types';
import css from './pagination.module.scss';

const Pagination = ({currentPage, totalPages, onNext, onPrev}) => {
	return (
		<div className={css.pagination}>
			<Button onClick={onPrev} disabled={currentPage === 1} label="Prev" />
			<span
				className={css.pages}
			>{`Page ${currentPage} of ${totalPages}`}</span>
			<Button
				onClick={onNext}
				disabled={currentPage === totalPages}
				label="Next"
			/>
		</div>
	);
};
Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onNext: PropTypes.func.isRequired,
	onPrev: PropTypes.func.isRequired,
};
export default Pagination;
