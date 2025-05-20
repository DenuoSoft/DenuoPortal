import PropTypes from 'prop-types';
import css from './adminItem.module.scss';
import Button from '../shared/buttons/button';

const AdminItem = ({name, description, date, onDelete, publishDate}) => {
	return (
		<div className={css.layout}>
			<div className={css.itemBox}>
				<h1>{name}</h1>
				{publishDate && <span>Publish Date: {publishDate}</span>}
				{date && <span>Event date: {date}</span>}
				<span>{description}</span>
			</div>
			<span>
				<Button type="button" label="Delete" onClick={onDelete} />
			</span>
		</div>
	);
};

AdminItem.propTypes = {
	name: PropTypes.string,
	date: PropTypes.string,
	publishDate: PropTypes.string,
	description: PropTypes.string,
	onDelete: PropTypes.func.isRequired,
	//	type: PropTypes.oneOf(['news', 'event']).isRequired,
};

export default AdminItem;
