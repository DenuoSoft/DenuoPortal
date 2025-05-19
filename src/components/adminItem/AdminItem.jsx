import PropTypes from 'prop-types';
import css from './adminItem.module.scss';
import Button from '../shared/buttons/button'

const AdminItem = ({name, description, onDelete}) => {
	return (
		<div className={css.layout}>
			<div className={css.itemBox}>
				<h1>{name}</h1>
				<span>
					{description}
				</span>
			</div>
			<span> 
				
				<Button type="button" label="Delete" onClick={onDelete}/>
			</span>
		</div>
	);
};

AdminItem.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	onDelete: PropTypes.func
}

export default AdminItem;
