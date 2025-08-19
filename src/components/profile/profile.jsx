import css from './profile.module.scss';
import PropTypes from 'prop-types';
export const Profile = ({modalData}) => {
	return (
		<div>
			<div className={css.titleBox}>
				<div className={css.titleImage}>
					<img src="" alt="" />
				</div>
				<h2 className={css.title}>{modalData.name}</h2>
			</div>

			<div className={css.text}>
				<div className={css.textItem}>
					<strong>Job Position:</strong>
					{modalData.position}
				</div>
				<div className={css.textItem}>
					<strong>Extension:</strong>
					{modalData.phone}
				</div>
				<div className={css.textItem}>
					<strong>Mobile Phone:</strong> {modalData.mobile}
				</div>
				
				<div className={css.textItem}>
					<strong>Office:</strong> {modalData.location}
				</div>
				<div className={css.textItem}>
					<strong>Assistant:</strong> {modalData.assistant}
				</div>
				<div className={css.textItem}>
					<strong>Assistant extension:</strong> {modalData.assistantExt}
				</div>
			</div>
		</div>
	);
};
Profile.propTypes = {
	modalData: PropTypes.shape({
		name: PropTypes.string,
		position: PropTypes.string,
		phone: PropTypes.string,
		mobile: PropTypes.string,
		location: PropTypes.string,
		assistant: PropTypes.string,
		assistantExt: PropTypes.string,
  })
};
export default Profile;
