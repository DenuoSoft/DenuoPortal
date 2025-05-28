import PropTypes from 'prop-types';
import css from './adminItem.module.scss';
import Button from '../shared/buttons/button';

const AdminItem = ({name, description, date, image, onDelete, publishDate}) => {
	return (
		<div className={css.layout}>
			<div className={css.itemBox}>
				<div className={css.imageBox}>
					{image && <img className={css.image} src={image} alt="image" />}
				
				</div>
				<div className={css.text}>
					{publishDate && <span>Publish Date: {publishDate}</span>}
					<h1 className={css.title}>{name}</h1>
					{date && <span>Event date: {date}</span>}
					<span>{description}</span>
				</div>
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
	image: PropTypes.string,
	publishDate: PropTypes.string,
	description: PropTypes.string,
	onDelete: PropTypes.func.isRequired,
	//	type: PropTypes.oneOf(['news', 'event']).isRequired,
};

export default AdminItem;
