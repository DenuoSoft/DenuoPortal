import css from './profile.module.scss';
import PropTypes from 'prop-types';

export const Profile = ({ modalData }) => {
	// Формируем данные для отображения на основе modalData
	const fullName = `${modalData.first_name || ''} ${modalData.last_name || ''}`.trim();
	const positionName = modalData.position?.name || '';
	const extPhone = modalData.ext_phone || '';
	const mobilePhone = modalData.mobile_phone || '';
	const office = modalData.location || '';
	const assistant = modalData.assistant || '';
	const assistantExt = modalData.assistant_ext || '';

	return (
		<div>
			<div className={css.titleBox}>
				<div className={css.titleImage}>
					<img src={modalData.avatar || ''} alt={fullName} />
				</div>
				<h2 className={css.title}>{fullName}</h2>
			</div>

			<div className={css.text}>
				<div className={css.textItem}>
					<strong>Job Position:</strong>
					{positionName}
				</div>
				<div className={css.textItem}>
					<strong>Extension:</strong>
					{extPhone}
				</div>
				<div className={css.textItem}>
					<strong>Mobile Phone:</strong> {mobilePhone}
				</div>
				
				<div className={css.textItem}>
					<strong>Office:</strong> {office}
				</div>
				<div className={css.textItem}>
					<strong>Assistant:</strong> {assistant}
				</div>
				<div className={css.textItem}>
					<strong>Assistant extension:</strong> {assistantExt}
				</div>
			</div>
		</div>
	);
};

Profile.propTypes = {
	modalData: PropTypes.shape({
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		position: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string
		}),
		ext_phone: PropTypes.string,
		mobile_phone: PropTypes.string,
		location: PropTypes.string,
		assistant: PropTypes.string,
		assistant_ext: PropTypes.string,
		avatar: PropTypes.string,
	})
};

export default Profile;